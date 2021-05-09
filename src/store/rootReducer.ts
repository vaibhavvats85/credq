import { combineReducers } from "redux";
import { Preferences, Score } from "../models";
import { authenticationReducer, AuthenticationState } from "./authentication";
import { invoicesReducer, InvoicesState } from "./invoices";
import { preferencesReducer } from "./preferences";
import { reportsReducer, ReportsState } from "./reports";
import { scoreReducer } from "./scores";

export interface CredqState {
    authentication: AuthenticationState;
    invoices: InvoicesState;
    preferences: Preferences;
    scores: Score;
    reports: ReportsState;
}
export const credqState = {
    authentication: authenticationReducer,
    invoices: invoicesReducer,
    preferences: preferencesReducer,
    scores: scoreReducer,
    reports: reportsReducer
};

export const rootReducer = combineReducers(credqState);
