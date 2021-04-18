import { combineReducers } from "redux";
import { Preferences, Score } from "../models";
import { authenticationReducer, AuthenticationState } from "./authentication";
import { invoicesReducer, InvoicesState } from "./invoices";
import { preferencesReducer } from "./preferences";
import { scoreReducer } from "./scores";

export interface CredqState {
    authentication: AuthenticationState;
    invoices: InvoicesState;
    preferences: Preferences;
    scores: Score;
}
export const credqState = {
    authentication: authenticationReducer,
    invoices: invoicesReducer,
    preferences: preferencesReducer,
    scores: scoreReducer
};

export const rootReducer = combineReducers(credqState);
