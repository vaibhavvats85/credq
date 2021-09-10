import { useCallback, useEffect, useState } from "react";
import { questions, surveyQuestion } from "../../../utils/questions";
import Questions from "../../molecules/questions";
import './styles.scss';
import * as constants from '../../../utils/constants';
import { useDispatch, useSelector } from "react-redux";
import { customerInsights, loadCapabilityScore, loadScore, loadWillingnessScore } from "../../../store/scores";
import { CredqState } from "../../../store/rootReducer";
import { useHistory } from "react-router";
import PictorialQuestions from "../../molecules/pictorial-questions";
import { getCookie, setCookie } from "../../../utils/service";
import { AppData } from "../../../models/AppData";
import { loadAppData } from "../../../store/appdata";
export interface QuizProps {

}
const Quiz: React.FC<QuizProps> = () => {
    const [questionNum, setQuestionNum] = useState(1);
    const [question, setQuestion] = useState("");
    const [option, setOption] = useState("");
    const [checkImgQues] = useState(false);
    const [shuffledQuestions, setShuffledQuestions] = useState<any>([]);
    const [, setcustomerInsightList] = useState<any>([]);
    const [questionSet, setQuestionSet] = useState<string>('Set_1');
    const dispatch = useDispatch();
    const history = useHistory();
    const [climate, setClimate] = useState("");
    const [questionType, setQuestionType] = useState("");
    const scores = useSelector((state: CredqState) => state.scores);
    const [bool, setBool] = useState(false);
    const [startTime, setStartTime] = useState(Number);
    const [endTime, setEndTime] = useState(Number);
    const { amount, age, gender, language, location, marital_status, name, } = useSelector((state: CredqState) => state.preferences);




    const [, setFormValues] = useState<AppData>({
        language: '',
        location: '',
        amount: '',
        name: '',
        gender: '',
        marital_status: '',
        age: '',
        date: Date.now(),
        questionOne: '',
        questionTwo: '',
        questionThree: '',
        questionFour: '',
        questionFive: '',
        questionSix: '',
        questionSeven: '',
        questionOneOption: '',
        questionTwoOption: '',
        questionThreeOption: '',
        questionFourOption: '',
        questionFiveOption: '',
        questionSixOption: '',
        questionSevenOption: '',
        duration: '',
    });


    useEffect(() => {
        let checkList: any[]
        const extraHigh = [{ color: "DarkGreen" }, { color: "DarkGreen" }, { color: "DarkGreen" }, { color: "DarkGreen" }, { color: "DarkGreen" }, { color: "DarkGreen" }]
        const moderate = [{ color: 'Yellow' }, { color: 'Yellow' }, { color: 'Yellow' }, { color: 'Yellow' }, { color: '#e6e6e6' }, { color: '#e6e6e6' }]
        const low = [{ color: 'pink' }, { color: 'pink' }, { color: 'pink' }, { color: '#e6e6e6' }, { color: '#e6e6e6' }, { color: '#e6e6e6' }]
        const extraLow = [{ color: 'red' }, { color: 'red' }, { color: '#e6e6e6' }, { color: '#e6e6e6' }, { color: '#e6e6e6' }, { color: '#e6e6e6' }]
        const high = [{ color: 'LightGreen' }, { color: 'LightGreen' }, { color: 'LightGreen' }, { color: 'LightGreen' }, { color: 'LightGreen' }, { color: '#e6e6e6' }]
        if (climate === "Moderate") {
            setcustomerInsightList((customerInsightList: any[]) => {
                checkList = customerInsightList.concat({ questionType: questionType, status: climate, color: moderate }
                )
                dispatch(customerInsights(checkList)
                )
                return checkList;
            })

        }
        else if (climate === "Low") {
            setcustomerInsightList((customerInsightList: any[]) => {
                checkList = customerInsightList.concat({ questionType: questionType, status: climate, color: low }
                )
                dispatch(customerInsights(checkList)
                )
                return checkList;
            })

        }

        else if (climate === "Extremely High") {
            setcustomerInsightList((customerInsightList: any[]) => {
                checkList = customerInsightList.concat({ questionType: questionType, status: climate, color: extraHigh }
                )
                dispatch(customerInsights(checkList)
                )
                return checkList;
            })

        }
        else if (climate === "High") {
            setcustomerInsightList((customerInsightList: any[]) => {
                checkList = customerInsightList.concat({ questionType: questionType, status: climate, color: high }
                )
                dispatch(customerInsights(checkList)
                )
                return checkList;
            })


        }
        else if (climate === "Extremely Low") {
            setcustomerInsightList((customerInsightList: any[]) => {
                checkList = customerInsightList.concat({ questionType: questionType, status: climate, color: extraLow }
                )
                dispatch(customerInsights(checkList)
                )
                return checkList;
            })

        }
        if (questionNum === 8) {
            setBool(true);
        }

        if (bool) {
            history.push({
                pathname: '/application/report',
                state: { updateApplications: true }
            });
        }


    }, [questionType, climate, questionNum, dispatch, bool, history]);





    useEffect(() => {
        switch (getCookie(constants.question_set)) {
            case '': setQuestionSet(() => 'Set_1');
                setCookie(constants.question_set, 'Set_1', 5);
                break;
            case 'Set_1': setQuestionSet('Set_2');
                setCookie(constants.question_set, 'Set_2', 5);
                break;
            case 'Set_2': setQuestionSet('Set_3');
                setCookie(constants.question_set, 'Set_3', 5);
                break;
            case 'Set_3': setQuestionSet('Set_1');
                setCookie(constants.question_set, 'Set_1', 5);
                break;
            default:
                break;
        }
    }, [dispatch]);
    useEffect(() => {
        const shuffledQuestions = questions[questionSet].slice(0, 6).map((a: any) => ({ sort: Math.random(), value: a }))
            .sort((a: any, b: any) => a.sort - b.sort)
            .map((a: any) => a.value);
        setShuffledQuestions(shuffledQuestions);
    }, [questionSet]);

    useEffect(() => {
        window.scrollTo(0, 0);

    }, [questionNum]);



    const storePreferencetState = useCallback((name: string, value: string) => {
        setFormValues((form: any) => {
            const updatedForm = {
                ...form,
                [name]: value,

            };
            dispatch(loadAppData(updatedForm));

            return updatedForm;
        });
    }, [dispatch])

    useEffect(() => {
        if (questionSet === 'Set_2') {
            const questionSeries = [...shuffledQuestions, questions[questionSet][6], surveyQuestion];
            setShuffledQuestions(questionSeries);
        }
        if (questionNum === 2) {
            storePreferencetState("questionOne", question);
            storePreferencetState("questionOneOption", option)
            storePreferencetState("amount", amount);
            storePreferencetState("gender", gender);
            storePreferencetState("age", age);
            storePreferencetState("marital_status", marital_status);
            storePreferencetState("language", language);
            storePreferencetState("location", location);
            storePreferencetState("name", name);

        }
        else if (questionNum === 3) {
            storePreferencetState("questionTwo", question)
            storePreferencetState("questionTwoOption", option)

        }
        else if (questionNum === 4) {
            storePreferencetState("questionThree", question)
            storePreferencetState("questionThreeOption", option)

        }
        else if (questionNum === 5) {
            storePreferencetState("questionFour", question)
            storePreferencetState("questionFourOption", option)

        }
        else if (questionNum === 6) {
            storePreferencetState("questionFive", question)
            storePreferencetState("questionFiveOption", option)

        }
        else if (questionNum === 7) {
            storePreferencetState("questionSix", question)
            storePreferencetState("questionSixOption", option)

        }
        else if (questionNum === 8) {
            storePreferencetState("questionSeven", question)
            storePreferencetState("questionSevenOption", option)

        }

        const duration = endTime - startTime;
        var date = new Date(duration * 1000);
        // Minutes part from the timestamp
        var minutes = "0" + date.getMinutes();
        storePreferencetState("duration", minutes)
    }, [questionSet, shuffledQuestions, questionNum, question, option, endTime, startTime, age, amount, gender, language, location, marital_status, name, storePreferencetState]);


    const _next = (score: number, measure: string, climate: string, questionType: string, question: string, option: string) => {
        setClimate(climate);
        setQuestionType(questionType);
        setQuestion(question);
        if (questionNum === 1) {
            setStartTime(Date.now());
        }
        else if (questionNum === 7) {
            setEndTime(Date.now());

        }
        if (questionType === "Fluid Intelligence" || questionType === "Ambition" || questionType === "Social Engagement") {
            setOption(climate);
        }
        else {
            setOption(option);

        }
        setQuestionNum((num) => num + 1);

        switch (measure) {
            case constants.repayment_capability: dispatch(loadCapabilityScore(scores.capability + score));
                break;
            case constants.repayment_willingness: dispatch(loadWillingnessScore(scores.willingness + score));
                break;
            default:
                break;
        }
        dispatch(loadScore(scores.overall + score));

    }
    const locale = useSelector((state: CredqState) => state.preferences.language);

    return (
        <div className="question">
            {
                shuffledQuestions.map((question: any, idx: number) =>
                (
                    <div key={idx}
                        style={(question.question.questionType === 'Risk Aversion' ||
                            (questionSet === 'Set_1' && question.question.questionType === 'Perfectionism') ||
                            (questionSet === 'Set_2' && question.question.questionType === 'Perfectionism') ||
                            question.question.questionType === 'Risk Perception') &&
                            questionNum === idx + 1 ? { marginTop: '7rem' } : { marginTop: '0' }}>
                        <Questions
                            question={question.question}
                            options={question.options}
                            locale={locale}
                            serial={idx + 1}
                            questionNum={questionNum}
                            next={_next}
                            measure={question.tag}
                            checkImg={checkImgQues}
                            questionSet={questionSet}
                        />
                    </div>
                ))
            }
            {
                questionSet !== 'Set_2' &&
                <div className="pictorial">
                    <PictorialQuestions
                        question={questions[questionSet][6].question}
                        options={questions[questionSet][6].options}
                        locale={locale}
                        serial={7}
                        questionNum={questionNum}
                        next={_next}
                        measure={questions[questionSet][6].tag}
                    />
                </div>
            }
        </div >
    );
}
export default Quiz;
