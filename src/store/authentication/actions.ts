import { LoginRequest, LoginResponse } from "../../models";
import { deleteCookie } from "../../utils/cookies";
import * as constants from '../../utils/constants';
export const LOGIN_USER_REQUEST = '[LOGIN USER REQUEST] Login user Request';
export const LOGIN_USER_SUCCESS = '[LOGIN USER SUCCESS] Login User Success';
export const LOGIN_USER_FAIL = '[LOGIN USER FAIL] Login User Fail';
export const LOGOUT_USER = '[LOGOUT USER] Logout User';
export const AUTHENTICATE_USER = '[AUTHENTICATE USER] Authenticate user';
export const UPDATE_LOGIN_MESSAGE = '[UPDATE LOGIN MESSAGE] Login message';

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
    payload: string;
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
    deleteCookie(constants.jwt_token);
    return {
        type: LOGOUT_USER
    }
};

export function updateLoginMessage(payload: string): UpdateLoginMessageAction {
    return {
        type: UPDATE_LOGIN_MESSAGE,
        payload
    }
};


export type authenticationActionTypes = LoginUserRequestAction |
    AuthenticateUser |
    LoginUserSuccessAction |
    LoginUserFailAction |
    LogoutUserAction |
    UpdateLoginMessageAction;
