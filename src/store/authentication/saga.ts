import { call, takeLatest, put } from "redux-saga/effects";
import * as fromActions from './actions';
import axios from "axios";
import { trackPromise } from "react-promise-tracker";
import { LoginRequest } from "../../models";

axios.defaults.withCredentials = true;
// Login a user
function login(payload: LoginRequest) {
    return trackPromise(axios.post(`${process.env.REACT_APP_BASE_URL}/login`, payload, { withCredentials: true }));
}

function authenticate() {
    return trackPromise(axios.get(`${process.env.REACT_APP_BASE_URL}/authenticate`, { withCredentials: true }));
}

function* authenticateUserLogin(action: fromActions.authenticationActionTypes) {
    try {
        if (action.type === fromActions.LOGIN_USER_REQUEST) {
            const { data } = yield call(login, action.payload);
            yield put(fromActions.loginUserSuccess(data));
        } else {
            const { data } = yield call(authenticate);
            yield put(fromActions.loginUserSuccess(data));
        }

    } catch (err) {
        yield put(fromActions.loginUserFail(err.response.data))
    }
}

export function* watchAuthenticationLogin() {
    yield takeLatest(fromActions.LOGIN_USER_REQUEST, authenticateUserLogin);
    yield takeLatest(fromActions.AUTHENTICATE_USER, authenticateUserLogin);
}

function* authenticateUserLogout() {
    try {
        yield trackPromise(axios.get(`${process.env.REACT_APP_BASE_URL}/logout`));
    } catch (err) {
        console.log(err);
    }
}

export function* watchAuthenticationLogout() {
    yield takeLatest(fromActions.LOGOUT_USER, authenticateUserLogout);
}
