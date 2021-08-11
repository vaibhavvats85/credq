import { AppData } from '../../models/AppData';
import * as fromActions from './actions';

export const AppDataInititalState: AppData = {
    language: '',
    location: '',
    amount: '',
    name: '',
    gender: '',
    marital_status: '',
    age: '',
    date: Date.now(),
    questionOne:'',
    questionTwo:'',
    questionThree:'',
    questionFour:'',
    questionFive:'',
    questionSix:'',
    questionSeven:'',
    questionOneOption:'',
    questionTwoOption:'',
    questionThreeOption:'',
    questionFourOption:'',
    questionFiveOption:'',
    questionSixOption:'',
    questionSevenOption:'',
    duration:''

}

export function AppDataReducer(state: AppData = AppDataInititalState, action: fromActions.AppDataActionTypes) {
    switch (action.type) {
        case fromActions.APP_DATA:
            return {
                ...action.payload,
            };
        default:
            return state;
    }
}