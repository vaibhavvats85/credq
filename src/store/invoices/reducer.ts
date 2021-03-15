import { InvoiceBackendRequest, InvoiceBackendResponse } from '../../models';
import * as fromActions from './actions';

export interface InvoicesState {
    request: InvoiceBackendRequest | null;
    response: InvoiceBackendResponse[];
    loading: boolean;
    hasError: boolean;
    errorCode: number;
}
export const InitialInvoicesStates: InvoicesState = {
    request: null,
    response: [],
    loading: false,
    hasError: false,
    errorCode: 0
}

export function invoicesReducer(state: InvoicesState = InitialInvoicesStates, action: fromActions.invoiceActionTypes) {
    switch (action.type) {
        case fromActions.LOAD_INVOICES:
            return {
                loading: true,
                request: action.payload,
                response: null,
                errorCode: 0,
                hasError: false
            }

        case fromActions.LOAD_INVOICES_SUCCESS:
            return {
                ...state,
                loading: false,
                hasError: false,
                response: [...action.payload],
            }

        case fromActions.LOAD_INVOICES_FAIL:
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