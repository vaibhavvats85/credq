import { ErrorPayload, LoginRequest, LoginResponse } from "../../models";
import { ApplicationReport } from "../../models/Report";
export const LOGIN_USER_REQUEST = '[LOGIN USER REQUEST] Login user Request';
export const LOGIN_USER_SUCCESS = '[LOGIN USER SUCCESS] Login User Success';
export const LOGIN_USER_FAIL = '[LOGIN USER FAIL] Login User Fail';
export const LOGOUT_USER = '[LOGOUT USER] Logout User';
export const AUTHENTICATE_USER = '[AUTHENTICATE USER] Authenticate user';
export const UPDATE_LOGIN_MESSAGE = '[UPDATE LOGIN MESSAGE] Login message';
export const CHANGE_PASSWORD = '[CHANGE PASSWORD] Change Password';
export const UPDATE_APPLICATIONS = '[UPDATE APPLICATIONS] Update Applications';
export const UPDATE_APPLICATIONS_SUCCESS = '[UPDATE APPLICATIONS] Update Applications Success';
export const UPDATE_APPLICATIONS_FAIL = '[UPDATE APPLICATIONS] Update Applications Fail';
export const CHANGE_PASSWORD_SUCCESS = '[CHANGE PASSWORD SUCCESS] Change Password Success';
export const CHANGE_PASSWORD_FAIL = '[CHANGE PASSWORD FAIL] Change Password Fail';

interface LoginUserRequestAction {
    type: typeof LOGIN_USER_REQUEST,
    payload: LoginRequest
}

interface AuthenticateUser {
    type: typeof AUTHENTICATE_USER,
}

interface LoginUserSuccessAction {
    type: typeof LOGIN_USER_SUCCESS,
    payload: LoginResponse
}

interface LoginUserFailAction {
    type: typeof LOGIN_USER_FAIL,
    payload: { message: string }
}

interface LogoutUserAction {
    type: typeof LOGOUT_USER,
    payload?: string;
}

interface UpdateLoginMessageAction {
    type: typeof UPDATE_LOGIN_MESSAGE,
    message: string;
    msgType?: string;
}

interface UpdateApplicationsAction {
    type: typeof UPDATE_APPLICATIONS,
    payload: ApplicationReport
}

interface UpdateApplicationsSuccessAction {
    type: typeof UPDATE_APPLICATIONS_SUCCESS,
    applications: string;
}

interface UpdateApplicationsFailAction {
    type: typeof UPDATE_APPLICATIONS_FAIL,
    payload: { message: string; }
}

export interface ChangePasswordAction {
    type: typeof CHANGE_PASSWORD,
    payload: LoginRequest
}

export interface ChangePasswordSuccessAction {
    type: typeof CHANGE_PASSWORD_SUCCESS
}

export interface ChangePasswordFailAction {
    type: typeof CHANGE_PASSWORD_FAIL
    payload: ErrorPayload;
}


export function loginUserRequest(payload: LoginRequest): LoginUserRequestAction {
    return {
        type: LOGIN_USER_REQUEST,
        payload
    }
};

export function authenticateUser(): AuthenticateUser {
    return {
        type: AUTHENTICATE_USER,
    }
};

export function loginUserSuccess(payload: LoginResponse): LoginUserSuccessAction {
    return {
        type: LOGIN_USER_SUCCESS,
        payload
    }
};

export function loginUserFail(payload: { message: string }): LoginUserFailAction {
    return {
        type: LOGIN_USER_FAIL,
        payload
    }
};

export function logOut(): LogoutUserAction {
    return {
        type: LOGOUT_USER
    }
};

export function updateLoginMessage(message: string, msgType = 'error'): UpdateLoginMessageAction {
    return {
        type: UPDATE_LOGIN_MESSAGE,
        message,
        msgType
    }
};

export function changePassword(payload: LoginRequest): ChangePasswordAction {
    return {
        type: CHANGE_PASSWORD,
        payload
    }
}

export function changePasswordSuccess(): ChangePasswordSuccessAction {
    return {
        type: CHANGE_PASSWORD_SUCCESS,
    }
}
export function changePasswordFail(payload: ErrorPayload): ChangePasswordFailAction {
    return {
        type: CHANGE_PASSWORD_FAIL,
        payload
    }
}

export function updateApplications(payload: ApplicationReport): UpdateApplicationsAction {
    return {
        type: UPDATE_APPLICATIONS,
        payload
    }
}

export function updateApplicationsSuccess(applications: string): UpdateApplicationsSuccessAction {
    return {
        type: UPDATE_APPLICATIONS_SUCCESS,
        applications
    }
}

export function updateApplicationsFail(payload: { message: string; }): UpdateApplicationsFailAction {
    return {
        type: UPDATE_APPLICATIONS_FAIL,
        payload
    }
}

export type authenticationActionTypes = LoginUserRequestAction |
    AuthenticateUser |
    LoginUserSuccessAction |
    LoginUserFailAction |
    LogoutUserAction |
    UpdateLoginMessageAction |
    ChangePasswordAction |
    ChangePasswordSuccessAction |
    ChangePasswordFailAction |
    UpdateApplicationsAction |
    UpdateApplicationsFailAction |
    UpdateApplicationsSuccessAction;
