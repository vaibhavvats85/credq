import { call, takeLatest, put } from "redux-saga/effects";
import * as fromActions from './actions';
import axios from "axios";
import { trackPromise } from "react-promise-tracker";

axios.defaults.withCredentials = true;

// Fetch Reports
function fetchReports(user: string) {
    return trackPromise(axios.post(`${process.env.REACT_APP_BASE_URL}/reports`, user, { withCredentials: true }));
}

function* getReports(action: any): any {
    try {
        const { data } = yield call<any>(fetchReports, action.user);
        yield put(fromActions.loadReportsSuccess(data));
    } catch (err) {
        yield put(fromActions.loadReportsFail(err.response.data))
    }
}

export function* watchReports() {
    yield takeLatest(fromActions.LOAD_REPORTS, getReports);

}
