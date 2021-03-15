import { InvoiceBackendRequest, InvoiceBackendResponse, ErrorPayload } from "../../models";
export const LOAD_INVOICES = '[LOAD INVOICES] Load invoices';
export const LOAD_INVOICES_SUCCESS = '[LOAD INVOICES SUCCESS] Load invoices success';
export const LOAD_INVOICES_FAIL = '[LOAD INVOICES FAIL] Load invoices fail';

interface LoadInvoices {
    type: typeof LOAD_INVOICES,
    payload: InvoiceBackendRequest
}

interface LoadInvoicesSuccess {
    type: typeof LOAD_INVOICES_SUCCESS,
    payload: InvoiceBackendResponse[]
}

interface LoadInvoicesFail {
    type: typeof LOAD_INVOICES_FAIL,
    payload: ErrorPayload
}


export function loadInvoices(payload: InvoiceBackendRequest): LoadInvoices {
    return {
        type: LOAD_INVOICES,
        payload
    }
};

export function loadInvoicesSuccess(payload: InvoiceBackendResponse[]): LoadInvoicesSuccess {
    return {
        type: LOAD_INVOICES_SUCCESS,
        payload
    }
};

export function loadInvoicesFail(payload: ErrorPayload): LoadInvoicesFail {
    return {
        type: LOAD_INVOICES_FAIL,
        payload
    }
};


export type invoiceActionTypes = LoadInvoices |
    LoadInvoicesSuccess |
    LoadInvoicesFail;
