import React from 'react';
import './styles.scss';

export interface QuestionProps {
    question: any;
    options: any[];
    locale: string;
    questionNum: number;
    serial: number;
    measure: string;
    checkImg: boolean;
    questionSet: string;
    next: (score: number, measure: string, questionType: string, climate: string, questionFor: string, option: string) => void;
}



const Questions: React.FC<QuestionProps> = ({ question, options, locale, questionNum, serial, next, measure, checkImg, questionSet }) => {
    if (measure === "social_engagement") {
        checkImg = true;
    }
    else if (measure === "Ambition") {
        checkImg = true;
    } else if (question.questionType === 'Risk Perception' && (questionSet === 'Set_1' || questionSet === 'Set_3')) {
        checkImg = true;
    } else if (question.questionType === 'Perfectionism' && questionSet === 'Set_2') {
        checkImg = true;
    }
    else {
        checkImg = false;
    }
    let shuffledOptions = options.map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);
    const alpha = ['A', 'B', 'C'];


    return (
        questionNum === serial ? <>
            <p>{question[locale]}</p>
            {/* {locale !== 'english' && <p className="translation">{question[locale]}</p>} */}
            {
                shuffledOptions.map((option, idx) =>

                    <>{checkImg === false ?
                        <div key={idx}>
                            {option.img && <img src={`${process.env.PUBLIC_URL}/assets/${option.img}.png`} alt={option.img} />}
                            <div className="option" onClick={() => next(option.score, measure, option.climate, question.questionType, question.english, option.english)}>

                                <h3 className="en">{question.prefix && `${question.prefix[locale]} ${idx + 1}: `} {option[locale]}</h3>
                            </div>
                        </div>
                        : <div className="image_options" key={idx}>
                            <h4>{alpha[idx]}</h4>
                            <img onClick={() => next(option.score, measure, option.climate, question.questionType, question.english, option.english)} src={`${process.env.PUBLIC_URL}/assets/${option.url}.png`} alt={option.url} />
                        </div>}</>


                )}
        </> : null
    )
}
export default Questions;