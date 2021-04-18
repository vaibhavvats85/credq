import React from "react";
import { language } from "../../../../utils/preferences";
import Radio from "../../../atoms/radio";
export interface Step1Props {
    currentStep: number;
    language: string;
    handleChange: (event: any) => void;
}
const Step1: React.FC<Step1Props> = (props) => {
    if (props.currentStep !== 1) {
        return null
    }
    return (
        <div className="container">
            <label htmlFor="language">
                <h1>Choose Language</h1>
            </label>
            <Radio selected_value={props.language} handleChange={props.handleChange}
                sub_values={language.english} values={language.native} group="language" />
        </div>
    );
}
export default Step1;