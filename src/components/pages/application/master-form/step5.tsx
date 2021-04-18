import React from "react";
import { age } from "../../../../utils/preferences";
import Radio from "../../../atoms/radio";
import './styles.scss';
export interface Step5Props {
    currentStep: number;
    age: string;
    handleChange: (event: any) => void;
}
const Step5: React.FC<Step5Props> = (props) => {
    if (props.currentStep !== 5) {
        return null
    }
    const locale = 'tamil';
    return (
        <div className="container">
            <h1>{age.title.english}</h1>
            <p>{age.title[locale]}</p>
            <Radio selected_value={props.age} handleChange={props.handleChange} group="age" values={['21-29', '30-35', '36-40', '41-45', '46-50', '51-59', '60+']} />
        </div>
    );
}
export default Step5;