import React from 'react';
import './styles.scss';

export interface QuestionProps {
    question: any;
    options: any[];
    locale: string;
    questionNum: number;
    serial: number;
    measure: string;
    checkImg:boolean;
    next: (score: number, measure: string,questionType:string,climate:string) => void;
}



const Questions: React.FC<QuestionProps> = ({ question, options, locale, questionNum, serial, next, measure,checkImg}) => {
    
    if(measure==="social_engagement"){
        checkImg=true;
    }
    else if(measure==="Ambition"){
        checkImg=true;
    }
    else{
        checkImg=false;
    }
    let shuffledOptions = options.map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);
        console.log(shuffledOptions);
        const alpha = ['A', 'B', 'C'];


    return (
        questionNum === serial ? <>
            <p>{question.english}</p>
            {locale !== 'english' && <p className="translation">{question[locale]}</p>}
            {
                shuffledOptions.map((option, idx) =>
                  
                <>{checkImg===false?
                 <div key={idx}>
                    {option.img && <img src={`${process.env.PUBLIC_URL}/assets/${option.img}.png`} alt={option.img} />}
                    <div className="option" onClick={() => next(option.score, measure,option.climate,question.questionType)}>

                        <h3 className="en">{question.prefix && `${question.prefix.english} ${idx + 1}: `} {option.english}</h3>
                        {locale !== 'english' && <h3 className="translation">{question.prefix && `${question.prefix[locale]} ${idx + 1}: `} {option[locale]}</h3>}
                    </div>
                </div> 
            :<div className="image_options" key={idx}>
            <h4>{alpha[idx]}</h4>
            <img onClick={() => next(option.score, measure,option.climate,question.questionType)} src={`${process.env.PUBLIC_URL}/assets/${option.url}.png`} alt={option.url} />
        </div>}</>
                 
                   
                )}
        </> : null
    )
}
export default Questions;