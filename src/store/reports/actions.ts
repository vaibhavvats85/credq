import { ReportBackendResponse, ErrorPayload } from "../../models";
export const LOAD_REPORTS = '[LOAD REPORTS] Load reports';
export const LOAD_REPORTS_SUCCESS = '[LOAD REPORTS SUCCESS] Load reports success';
export const LOAD_REPORTS_FAIL = '[LOAD REPORTS FAIL] Load reports fail';

interface LoadReports {
    type: typeof LOAD_REPORTS,
    user: string;
}

interface LoadReportsSuccess {
    type: typeof LOAD_REPORTS_SUCCESS,
    payload: ReportBackendResponse[]
}

interface LoadReportsFail {
    type: typeof LOAD_REPORTS_FAIL,
    payload: ErrorPayload
}


export function loadReports(user: string): LoadReports {
    return {
        type: LOAD_REPORTS,
        user
    }
};

export function loadReportsSuccess(payload: ReportBackendResponse[]): LoadReportsSuccess {
    return {
        type: LOAD_REPORTS_SUCCESS,
        payload
    }
};

export function loadReportsFail(payload: ErrorPayload): LoadReportsFail {
    return {
        type: LOAD_REPORTS_FAIL,
        payload
    }
};


export type reportActionTypes = LoadReports |
    LoadReportsSuccess |
    LoadReportsFail;
