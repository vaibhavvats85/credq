import { useEffect, useState } from "react";
import { questions } from "../../../utils/questions";
import Questions from "../../molecules/questions";
import './styles.scss';
import * as constants from '../../../utils/constants';
import { useDispatch, useSelector } from "react-redux";
import { customerInsights, loadCapabilityScore, loadScore, loadWillingnessScore } from "../../../store/scores";
import { CredqState } from "../../../store/rootReducer";
import { useHistory } from "react-router";
import PictorialQuestions from "../../molecules/pictorial-questions";
import { getCookie, setCookie } from "../../../utils/service";
export interface QuizProps {

}
const Quiz: React.FC<QuizProps> = () => {
    const [questionNum, setQuestionNum] = useState(1);
    const [checkImgQues] = useState(false);
    const [shuffledQuestions, setShuffledQuestions] = useState<any>([]);
    // const recipietnList=[{ questionType: '',
    //     status: '',
    //     color:[]}]
    const [, setcustomerInsightList] = useState<any>([]);
    const [questionSet, setQuestionSet] = useState<string>('Set_1');
    const dispatch = useDispatch();
    const history = useHistory();
    const [climate, setClimate] = useState("");
    const [questionType, setQuestionType] = useState("");

    const scores = useSelector((state: CredqState) => state.scores);
  
    useEffect(() => {
        console.log(questionNum)

        const extraHigh = [{ color: "DarkGreen" }, { color: "DarkGreen" }, { color: "DarkGreen" }, { color: "DarkGreen" }, { color: "DarkGreen" }, { color: "DarkGreen" }]
        const moderate = [{ color: 'Yellow' }, { color: 'Yellow' }, { color: 'Yellow' }, { color: 'Yellow' }, { color: '#e6e6e6' }, { color: '#e6e6e6' }]
        const low = [{ color: 'pink' }, { color: 'pink' }, { color: 'pink' }, { color: '#e6e6e6' }, { color: '#e6e6e6' }, { color: '#e6e6e6' }]
        const extraLow = [{ color: 'red' }, { color: 'red' }, { color: '#e6e6e6' }, { color: '#e6e6e6' }, { color: '#e6e6e6' }, { color: '#e6e6e6' }]
        const high = [{ color: 'LightGreen' }, { color: 'LightGreen' }, { color: 'LightGreen' }, { color: 'LightGreen' }, { color: 'LightGreen' }, { color: 'LightGreen' }]
        if (climate === "Moderate") {
            setcustomerInsightList((customerInsightList: any[]) => {
               const checkList= customerInsightList.concat({ questionType: questionType, status: climate, color: moderate }
               )
               dispatch(customerInsights(checkList)
                )
                return checkList;
            })
        }
        else if (climate === "Low") {
            setcustomerInsightList((customerInsightList: any[]) => {
                const checkList= customerInsightList.concat({ questionType: questionType, status: climate, color: low }
                )
                dispatch(customerInsights(checkList)
                 )
                 return checkList;
             })
        }

        else if (climate === "Extremely High") {
            setcustomerInsightList((customerInsightList: any[]) => {
                const checkList= customerInsightList.concat({ questionType: questionType, status: climate, color: extraHigh }
                )
                dispatch(customerInsights(checkList)
                 )
                 return checkList;
             })
        }
        else if (climate === "High") {
            setcustomerInsightList((customerInsightList: any[]) => {
                const checkList= customerInsightList.concat({ questionType: questionType, status: climate, color: high }
                )
                dispatch(customerInsights(checkList)
                 )
                 return checkList;
             })

        }
        else if (climate === "Extremely Low") {
            setcustomerInsightList((customerInsightList: any[]) => {
                const checkList= customerInsightList.concat({ questionType: questionType, status: climate, color: extraLow }
                )
                dispatch(customerInsights(checkList)
                 )
                 return checkList;
             })
        }

        if (questionNum === 8) {
            history.push({
                pathname: '/application/report',
                state: { updateApplications: true }
            });
        }
    }, [questionType, climate, questionNum, dispatch, history]);


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



    const _next = (score: number, measure: string,climate:string,questionType:string) => {
        setClimate(climate);
        setQuestionType(questionType);
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
                    <div key={idx}>
                        <Questions
                            question={question.question}
                            options={question.options}
                            locale={locale}
                            serial={idx + 1}
                            questionNum={questionNum}
                            next={_next}
                            measure={question.tag}
                            checkImg={checkImgQues}
                        />
                    </div>
                ))
            }
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
        </div>
    );
}
export default Quiz;
