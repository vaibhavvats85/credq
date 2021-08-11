import { call, takeLatest, put } from "redux-saga/effects";
import * as fromActions from './actions';
import axios from "axios";
import { trackPromise } from "react-promise-tracker";
import { AppData } from "../../models/AppData";

axios.defaults.withCredentials = true;


function getUpdatedApplications(payload: AppData) {
    return trackPromise(
        axios.post(`${process.env.REACT_APP_BASE_URL}/report/updateExcelData`,
            payload, { withCredentials: true }));
}

function* updateExcelData(action: any) {
    try {
        const { data: { applications } } = yield call(getUpdatedApplications, action.payload)
      
    }
    catch (err) {
      
    }
}

export function* watchExcelData() {
    yield takeLatest(fromActions.APP_DATA, updateExcelData)
}
