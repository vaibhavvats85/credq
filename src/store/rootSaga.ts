import { all } from 'redux-saga/effects';
import { watchAuthenticationLogin, watchAuthenticationLogout } from './authentication';
import { watchInvoices } from './invoices';

export default function* rootSaga() {
    yield all([watchAuthenticationLogin(), watchAuthenticationLogout(), watchInvoices()]);
}