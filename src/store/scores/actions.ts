export const LOAD_SCORE = '[LOAD SCORE] Load score';
export const LOAD_CAPABILITY_SCORE = '[LOAD SCORE] Load Capability score';
export const LOAD_WILLINGNESS_SCORE = '[LOAD SCORE] Load Willingness score';

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

export type scoreActionTypes = LoadCapabilityScore |
    LoadWillingnessScore |
    LoadScore;
