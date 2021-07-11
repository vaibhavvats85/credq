import { Preferences } from '../../models';
import { language } from '../../utils/preferences';
import * as fromActions from './actions';

export const PreferenceInitialState: Preferences = {
    language: '',
    location: '',
    amount: '',
    name: '',
    gender: '',
    marital_status: '',
    age: '',
    date: Date.now(),
    member_id:'',
}

export function preferencesReducer(state: Preferences = PreferenceInitialState, action: fromActions.preferenceActionTypes) {
    switch (action.type) {
        case fromActions.LOAD_PREFERENCES:
            return {
                ...action.payload,
                language: language.nativeMapping(action.payload.language)
            };
        default:
            return state;
    }
}