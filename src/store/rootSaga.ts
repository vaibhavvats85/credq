import { all } from 'redux-saga/effects';
import { watchAuthenticationLogin, watchAuthenticationLogout, watchChangePassword, watchUpdateApplications } from './authentication';
import { watchInvoices } from './invoices';
import { watchReports } from './reports';

export default function* rootSaga() {
    yield all([watchReports(),
    watchAuthenticationLogin(),
    watchAuthenticationLogout(),
    watchChangePassword(),
    watchInvoices(),
    watchUpdateApplications(),
    ]);
}