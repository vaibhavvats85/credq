import { Score } from '../../models';
import * as fromActions from './actions';

export const ScoreInitialState: Score = {
    overall: 0,
    capability: 0,
    willingness: 0
}

export function scoreReducer(state: Score = ScoreInitialState, action: fromActions.scoreActionTypes) {
    switch (action.type) {
        case fromActions.LOAD_SCORE:
            return {
                ...state,
                overall: action.payload
            }
        case fromActions.LOAD_CAPABILITY_SCORE:
            return {
                ...state,
                capability: action.payload
            }
        case fromActions.LOAD_WILLINGNESS_SCORE:
            return {
                ...state,
                willingness: action.payload
            }
        case fromActions.RESET_SCORE:
            return {
                overall: 0,
                capability: 0,
                willingness: 0
            }
        default:
            return state;
    }
}