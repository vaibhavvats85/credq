import { call, takeLatest, put } from "redux-saga/effects";
import * as fromActions from './action';
import axios from "axios";
import { trackPromise } from "react-promise-tracker";
import { PreferenceModel } from "../../models/PreferenceModel";

axios.defaults.withCredentials = true;

// Fetch Reports
function loadPreference(payload: PreferenceModel) {
    return trackPromise(axios.post(`${process.env.REACT_APP_BASE_URL}/reports/preferences`, payload, { withCredentials: true }));
}

function* getPreferenceData(action: any): any {
    try {
        const { data } = yield call<any>(loadPreference, action.data);
        yield put(fromActions.loadPreferenceData(data));
    } catch (err) {
        console.log('Not able to store your preferences')
    }
}

export function* watchPreferenceData() {
    yield takeLatest(fromActions.LOAD_PREFERENCE_DATA, getPreferenceData);

}
