import { combineReducers } from "redux";
import { authenticationReducer, AuthenticationState } from "./authentication";
import { invoicesReducer, InvoicesState } from "./invoices";

export interface CredqState {
    authentication: AuthenticationState;
    invoices: InvoicesState;
}
export const credqState = {
    authentication: authenticationReducer,
    invoices: invoicesReducer
};

export const rootReducer = combineReducers(credqState);
