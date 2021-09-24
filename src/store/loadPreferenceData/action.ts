import axios from "axios";
import { trackPromise } from "react-promise-tracker";
import { AppData } from "../../models/AppData";
import { PreferenceModel } from "../../models/PreferenceModel";
import { question_mapping } from "../../utils";

export const LOAD_PREFERENCE_DATA = '[LOAD PREFERENCE DATA] Load preferences data';

interface LoadPreferenceData {
    type: typeof LOAD_PREFERENCE_DATA,
    payload: AppData,
    data: PreferenceModel
}

export function loadPreferenceData(payload: AppData): LoadPreferenceData {
    console.log(payload);
    const { username,
        applicant,
        score,
        capability,
        willingness,
        customerInsights,
        loanAmount,
        questionSet,
        surveyQuestion,
        member_id, language, age, name, amount, date, duration, gender, location, marital_status, questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionOneOption,
        questionTwoOption, questionThreeOption, questionFourOption, questionFiveOption, questionSixOption, questionSevenOption } = payload;
    const questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven];
    const answers = [questionOneOption, questionTwoOption, questionThreeOption, questionFourOption, questionFiveOption, questionSixOption, questionSevenOption];
    const getQuestionId = () => {
        let response = {};
        questions.forEach((ques, idx) => {
            const id = question_mapping.filter(item => item["actual _question"] === ques)[0]?.question_id || `Unidentified_question_${idx + 1}`;
            const mapped_response = { [id]: answers[idx] };
            response = { ...response, ...mapped_response }
        });
        return response;
    }
    const data: PreferenceModel = {
        username,
        applicant,
        score,
        capability,
        willingness,
        customerInsights,
        loanAmount,
        language,
        age,
        name,
        date: new Date(date),
        duration,
        location,
        marital_status,
        gender,
        amount,
        questionSet,
        surveyQuestion
    }
    trackPromise(axios.post(`${process.env.REACT_APP_BASE_URL}/reports/preferences`, data, { withCredentials: true }));
    return {
        type: LOAD_PREFERENCE_DATA,
        payload,
        data
    }
};


export type loadPreferenceActionType =
    LoadPreferenceData;
