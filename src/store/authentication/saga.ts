import { call, takeLatest, put } from "redux-saga/effects";
import * as fromActions from './actions';
import axios from "axios";
import { trackPromise } from "react-promise-tracker";
import { LoginRequest } from "../../models";
import { ApplicationReport } from "../../models/Report";

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

function* changePassword(action: fromActions.ChangePasswordAction) {
    try {
        yield trackPromise(axios.post(`${process.env.REACT_APP_BASE_URL}/changePassword`, action.payload, { withCredentials: true }));
        yield put(fromActions.changePasswordSuccess());
    } catch (err) {
        yield put(fromActions.changePasswordFail(err.response.data))
    }
}

export function* watchChangePassword() {
    yield takeLatest(fromActions.CHANGE_PASSWORD, changePassword)
}

function getUpdatedApplications(payload: ApplicationReport) {
    return trackPromise(
        axios.post(`${process.env.REACT_APP_BASE_URL}/report/updateApplications`,
            payload, { withCredentials: true }));
}

function* updateApplications(action: any) {
    try {
        const { data: { applications } } = yield call(getUpdatedApplications, action.payload)
        yield put(fromActions.updateApplicationsSuccess(applications));
    }
    catch (err) {
        yield put(fromActions.updateApplicationsFail(err.response.data))
    }
}

export function* watchUpdateApplications() {
    yield takeLatest(fromActions.UPDATE_APPLICATIONS, updateApplications)
}
