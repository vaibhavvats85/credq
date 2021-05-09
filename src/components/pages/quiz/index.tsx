import { useEffect, useState } from "react";
import { questions } from "../../../utils/questions";
import Questions from "../../molecules/questions";
import './styles.scss';
import * as constants from '../../../utils/constants';
import { useDispatch, useSelector } from "react-redux";
import { loadCapabilityScore, loadScore, loadWillingnessScore, resetScore } from "../../../store/scores";
import { CredqState } from "../../../store/rootReducer";
import { useHistory } from "react-router";
import PictorialQuestions from "../../molecules/pictorial-questions";
import { getCookie, setCookie } from "../../../utils/service";
export interface QuizProps {

}
const Quiz: React.FC<QuizProps> = () => {
    const [questionNum, setQuestionNum] = useState(1);
    const [shuffledQuestions, setShuffledQuestions] = useState<any>([]);
    const [questionSet, setQuestionSet] = useState<string>('Set_1');
    const dispatch = useDispatch();
    const history = useHistory();
    const scores = useSelector((state: CredqState) => state.scores);
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
        dispatch(resetScore());
    }, [dispatch]);
    useEffect(() => {
        const shuffledQuestions = questions[questionSet].slice(0, 4).map((a: any) => ({ sort: Math.random(), value: a }))
            .sort((a: any, b: any) => a.sort - b.sort)
            .map((a: any) => a.value);
        setShuffledQuestions(shuffledQuestions);
    }, [questionSet]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [questionNum]);

    const _next = (score: number, measure: string) => {
        if (questionNum === 5) {
            history.push({
                pathname: '/application/report',
                state: { updateApplications: true }
            });
        } else {
            setQuestionNum((num) => num >= 4 ? 5 : num + 1);
        }
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
                        />
                    </div>
                ))
            }
            <PictorialQuestions
                question={questions[questionSet][4].question}
                options={questions[questionSet][4].options}
                locale={locale}
                serial={5}
                questionNum={questionNum}
                next={_next}
                measure={questions[questionSet][4].tag}
            />

        </div>
    );
}
export default Quiz;