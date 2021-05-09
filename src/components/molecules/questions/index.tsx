import React from 'react';
import './styles.scss';

export interface QuestionProps {
    question: any;
    options: any[];
    locale: string;
    questionNum: number;
    serial: number;
    measure: string;
    next: (score: number, measure: string) => void;
}
const Questions: React.FC<QuestionProps> = ({ question, options, locale, questionNum, serial, next, measure }) => {
    let shuffledOptions = options.map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);
    return (
        questionNum === serial ? <>
            <p>{question.english}</p>
            {locale !== 'english' && <p className="translation">{question[locale]}</p>}
            {
                shuffledOptions.map((option, idx) =>
                    <React.Fragment key={idx}>
                        {option.img && <img src={`${process.env.PUBLIC_URL}/assets/${option.img}.png`} alt={option.img} />}
                        <div className="option" onClick={() => next(option.score, measure)}>

                            <h3 className="en">{question.prefix && `${question.prefix.english} ${idx + 1}: `} {option.english}</h3>
                            {locale !== 'english' && <h3 className="translation">{question.prefix && `${question.prefix[locale]} ${idx + 1}: `} {option[locale]}</h3>}
                        </div>
                    </React.Fragment>)
            }
        </> : null
    )
}
export default Questions;