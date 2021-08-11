import { dont_understand } from '../../../utils/questions';
import './styles.scss';

export interface PictorialQuestionProps {
    question: any;
    options: any[];
    locale: string;
    questionNum: number;
    serial: number;
    measure: string;
    next: (score: number, measure: string,questionType:string,climate:string,question:string,option:string) => void;
}
const PictorialQuestions: React.FC<PictorialQuestionProps> = ({ question, options, locale, questionNum, serial, next, measure }) => {
    let shuffledOptions = options.map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);
    const alpha = ['A', 'B', 'C', 'D'];
    return (
        questionNum === serial ? <>
            <h3>{question.english}</h3>
            { locale !== 'english' && <h2>{question[locale]}</h2>}
            {
                question.question_img.map((img: string, idx: number) =>
                (
                    <div className="image_question" key={idx}>
                        <img src={`${process.env.PUBLIC_URL}/assets/${img}.png`} alt={img} />
                    </div>)
                )
            }
            <h3>Pick from below options</h3>
            {
                shuffledOptions.map((option, idx) =>
                (
                    <div className="image_option" key={idx}>
                        <h4>{alpha[idx]}</h4>
                        <img onClick={() => next(option.score, measure,option.climate,question.questionType,question.english,option.climate)} src={`${process.env.PUBLIC_URL}/assets/${option.url}.png`} alt={option.url} />
                    </div>)
                )
            }
            <div className="pict-option dont_understand" onClick={() => next(0, measure,dont_understand.climate,dont_understand.questionType," ","")}>
                <h3 className="en">{dont_understand.english}</h3>
                {locale !== 'english' && <h3 className="translation">{dont_understand[locale]}</h3>}
            </div>

        </> : null
    )
}
export default PictorialQuestions;