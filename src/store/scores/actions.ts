export const LOAD_SCORE = '[LOAD SCORE] Load score';
export const LOAD_CAPABILITY_SCORE = '[LOAD SCORE] Load Capability score';
export const LOAD_WILLINGNESS_SCORE = '[LOAD SCORE] Load Willingness score';
export const RESET_SCORE = '[RESET SCORE] Reset score';
export const CUSTOMER_INSIGHTS = '[CUSTOMER INSIGHTS] Customer Insights';
export const VIEW_REPORTS = '[VIEW REPORTS] View Reports';
export const RESET_VIEW_REPORTS = '[RESET VIEW REPORTS] Reset View Reports';
export const LOAD_LATE_PAYMENT_SCORE = '[LOAD LATE PAYMENT SCORE] Late PAyment Score'

interface LoadScore {
    type: typeof LOAD_SCORE,
    payload: number
}

export function loadScore(payload: number): LoadScore {
    return {
        type: LOAD_SCORE,
        payload
    }
};

interface LoadLatePaymentDetectionScore {
    type: typeof LOAD_LATE_PAYMENT_SCORE,
    payload: number
}

export function loadLatePaymentDetectionScore(payload: number): LoadLatePaymentDetectionScore {
    return {
        type: LOAD_LATE_PAYMENT_SCORE,
        payload
    }
};

interface LoadCapabilityScore {
    type: typeof LOAD_CAPABILITY_SCORE,
    payload: number
}

export function loadCapabilityScore(payload: number): LoadCapabilityScore {
    return {
        type: LOAD_CAPABILITY_SCORE,
        payload
    }
};

interface LoadWillingnessScore {
    type: typeof LOAD_WILLINGNESS_SCORE,
    payload: number
}

export function loadWillingnessScore(payload: number): LoadWillingnessScore {
    return {
        type: LOAD_WILLINGNESS_SCORE,
        payload
    }
};

interface ResetScore {
    type: typeof RESET_SCORE,
}

export function resetScore(): ResetScore {
    return {
        type: RESET_SCORE
    }
};


interface CustomerInsights {
    type: typeof CUSTOMER_INSIGHTS,
    payload: any
}

export function customerInsights(payload: any): CustomerInsights {
    return {
        type: CUSTOMER_INSIGHTS,
        payload
    }
};

interface ViewReport {
    type: typeof VIEW_REPORTS,
}

export function getViewReport(): ViewReport {
    return {
        type: VIEW_REPORTS,
    }
};


interface ResetViewReport {
    type: typeof RESET_VIEW_REPORTS,
}

export function resetViewReport(): ResetViewReport {
    return {
        type: RESET_VIEW_REPORTS,
    }
};

export type scoreActionTypes = LoadCapabilityScore |
    LoadWillingnessScore |
    LoadScore |
    ResetScore |
    CustomerInsights |
    ViewReport |
    ResetViewReport | LoadLatePaymentDetectionScore;
