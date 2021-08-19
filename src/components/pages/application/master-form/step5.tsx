import React from "react";
import { useSelector } from "react-redux";
import { CredqState } from "../../../../store/rootReducer";
import { age } from "../../../../utils/preferences";
import Radio from "../../../atoms/radio";
import './styles.scss';
export interface Step5Props {
    currentStep: number;
    age: string;
    handleChange: (event: any) => void;
}
const Step5: React.FC<Step5Props> = (props) => {
    const locale = useSelector((state: CredqState) => state.preferences.language);
    if (props.currentStep !== 5) {
        return null
    }
    return (
        <div className="container">
            <label className="font-check">{age.title.english}</label>
            {locale !== 'english' && <p>{age.title[locale]}</p>}
            <Radio
                selected_value={props.age}
                handleChange={props.handleChange}
                group="age"
                values={['21-29', '30-35', '36-40', '41-45', '46-50', '51-59', '60+']}
                className="input age-radio" />
        </div>
    );
}
export default Step5;