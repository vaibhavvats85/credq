import { call, takeLatest, put } from "redux-saga/effects";
import * as fromActions from './actions';
import * as constants from '../../utils/constants';
import axios from "axios";
import { trackPromise } from "react-promise-tracker";
import { InvoiceBackendRequest } from "../../models";

axios.defaults.withCredentials = true;

// Fetch Invoices
function fetchInvoices(payload: InvoiceBackendRequest) {
    return trackPromise(axios.post(`${constants.BASE_URL}/invoices`, payload, { withCredentials: true }));
}

function* getInvoices(action: fromActions.invoiceActionTypes): any {
    try {
        const { data } = yield call<any>(fetchInvoices, action.payload);
        yield put(fromActions.loadInvoicesSuccess(data));
    } catch (err) {
        yield put(fromActions.loadInvoicesFail(err.response.data))
    }
}

export function* watchInvoices() {
    yield takeLatest(fromActions.LOAD_INVOICES, getInvoices);

}
