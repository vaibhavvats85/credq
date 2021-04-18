import React from "react";
import Input from "../../../atoms/input";
import './styles.scss';
import { location } from '../../../../utils/preferences';
export interface Step2Props {
    currentStep: number;
    location: string;
    handleChange: (event: any) => void;
}
const Step2: React.FC<Step2Props> = (props) => {
    if (props.currentStep !== 2) {
        return null
    }
    const locale = 'tamil';
    return (
        <div className="container">
            <Input value={props.location} name="location" placeholder="Enter City Name/Pincode"
                label={location.title.english} sub_label={location.title[locale]}
                onChange={props.handleChange} inputClass="container-input" />
        </div>
    );
}
export default Step2;