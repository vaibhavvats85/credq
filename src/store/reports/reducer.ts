import { ReportBackendResponse } from '../../models';
import * as fromActions from './actions';

export interface ReportsState {
    request: string | null;
    response: ReportBackendResponse[];
    loading: boolean;
    hasError: boolean;
    errorCode: number;
}
export const InitialReportsStates: ReportsState = {
    request: null,
    response: [],
    loading: false,
    hasError: false,
    errorCode: 0
}

export function reportsReducer(state: ReportsState = InitialReportsStates, action: fromActions.reportActionTypes) {
    switch (action.type) {
        case fromActions.LOAD_REPORTS:
            return {
                loading: true,
                request: action.user,
                response: null,
                errorCode: 0,
                hasError: false
            }

        case fromActions.LOAD_REPORTS_SUCCESS:
            return {
                ...state,
                loading: false,
                hasError: false,
                response: [...action.payload],
            }

        case fromActions.LOAD_REPORTS_FAIL:
            return {
                ...state,
                loading: false,
                hasError: true,
                errorCode: action.payload.status
            }
        default:
            return state;
    }
}