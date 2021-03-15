import { User } from '../../models';
import * as fromActions from './actions';
export interface AuthenticationState {
    token: string;
    errorCode: number;
    isLoggedIn: boolean;
    hasError: boolean;
    message: string;
    loading: boolean;
    user: User;
}
export const authenticationInitialState: AuthenticationState = {
    token: '',
    errorCode: 0,
    isLoggedIn: false,
    hasError: false,
    message: '',
    loading: false,
    user: {
        organization: '',
        username: '',
        phone: '',
        applications: '',
        billing_address: {
            line1: '',
            line2: '',
            zipcode: '',
            city: '',
            state: '',
        },
        email: '',
        plan: ''
    }
}

export function authenticationReducer(state: AuthenticationState = authenticationInitialState, action: fromActions.authenticationActionTypes) {
    switch (action.type) {
        case fromActions.LOGIN_USER_REQUEST:
            return {
                ...state,
                loading: true,
                message: '',
            }

        case fromActions.LOGIN_USER_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                isLoggedIn: true,
                message: action.payload.message,
                loading: false,
                hasError: false,
                user: action.payload.user
            }

        case fromActions.LOGIN_USER_FAIL:
            return {
                ...state,
                errorCode: action.payload,
                hasError: true,
                message: action.payload.message,
                loading: false
            }
        case fromActions.LOGOUT_USER:
            return authenticationInitialState;

        case fromActions.UPDATE_LOGIN_MESSAGE:
            return {
                ...state,
                message: action.payload,
            }
        default:
            return state;
    }
}