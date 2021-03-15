import { call, takeLatest, put } from "redux-saga/effects";
import * as fromActions from './actions';
import * as constants from '../../utils/constants';
import axios from "axios";
import { trackPromise } from "react-promise-tracker";
import { LoginRequest } from "../../models";
import { setCookie } from "../../utils/cookies";

axios.defaults.withCredentials = true;
// Login a user
function login(payload: LoginRequest) {
    return trackPromise(axios.post(`${constants.BASE_URL}/login`, payload, { withCredentials: true }));
}

function authenticate() {
    return trackPromise(axios.get(`${constants.BASE_URL}/authenticate`, { withCredentials: true }));
}

function* authenticateUserLogin(action: fromActions.authenticationActionTypes) {
    try {
        if (action.type === fromActions.LOGIN_USER_REQUEST) {
            const { data } = yield call(login, action.payload);
            setCookie(constants.jwt_token, data.token, 1);
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
