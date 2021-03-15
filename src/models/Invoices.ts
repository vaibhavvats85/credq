
export interface InvoiceBackendRequest {
    user: string;
}

export interface InvoiceBackendResponse {
    created_at: number;
    description: string;
    invoice_number: string;
    amount_due: number;
}
