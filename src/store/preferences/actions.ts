import { Preferences } from "../../models";

export const LOAD_PREFERENCES = '[LOAD PREFERENCES] Load preferences';

interface LoadPreferences {
    type: typeof LOAD_PREFERENCES,
    payload: Preferences
}

export function loadPreferences(payload: Preferences): LoadPreferences {
    return {
        type: LOAD_PREFERENCES,
        payload
    }
};


export type preferenceActionTypes =
    LoadPreferences;
