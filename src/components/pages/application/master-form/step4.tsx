import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadScore } from "../../../../store/scores";
import { personal_details } from "../../../../utils/preferences";
import Dropdown from "../../../atoms/dropdown";
import Input from "../../../atoms/input";
import './styles.scss';
export interface Step4Props {
    currentStep: number;
    name: string;
    gender: string;
    marital_status: string;
    handleChange: (event: any) => void;
}
const Step4: React.FC<Step4Props> = (props) => {
    const dispatch = useDispatch();
    const locale = 'tamil';
    useEffect(() => {
        switch (props.gender) {
            case 'Male': dispatch(loadScore(45));
                break;
            case 'Female': dispatch(loadScore(50));
                break;
            default:
                break;
        }
    }, [props.gender, dispatch]);

    if (props.currentStep !== 4) {
        return null
    }
    return (
        <div className="container">
            <Input
                name="name"
                value={props.name}
                placeholder="Enter Name"
                label={personal_details.applicant_name.title.english}
                sub_label={personal_details.applicant_name.title[locale]}
                onChange={props.handleChange}
                className="location"
                inputClass="container-input" />
            <Dropdown
                handleChange={props.handleChange}
                selected_value={props.gender}
                values={personal_details.gender.options.english}
                label={personal_details.gender.title.english}
                sub_label={personal_details.gender.title[locale]}
                group="gender"
                dropdownClass="container-input" />
            <Dropdown
                handleChange={props.handleChange}
                selected_value={props.marital_status}
                values={personal_details.marital_status.options.english}
                label={personal_details.marital_status.title.english}
                sub_label={personal_details.marital_status.title[locale]}
                group="marital_status"
                dropdownClass="container-input" />
        </div>
    );
}
export default Step4;