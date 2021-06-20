import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CredqState } from "../../../../store/rootReducer";
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
    handleChangeApplicantName: (event: any) => void;

}
const Step4: React.FC<Step4Props> = (props) => {
    const dispatch = useDispatch();
    const locale = useSelector((state: CredqState) => state.preferences.language);
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
                sub_label={locale !== 'english' && personal_details.applicant_name.title[locale]}
                onChange={props.handleChangeApplicantName}
                className="location input"
                inputClass="container-input"
            />
            <Dropdown
                handleChange={props.handleChange}
                selected_value={props.gender}
                values={personal_details.gender.options.english}
                label={personal_details.gender.title.english}
                sub_label={locale !== 'english' && personal_details.gender.title[locale]}
                group="gender"
                dropdownClass="container-input"
                className="input" />
            <Dropdown
                handleChange={props.handleChange}
                selected_value={props.marital_status}
                values={personal_details.marital_status.options.english}
                label={personal_details.marital_status.title.english}
                sub_label={locale !== 'english' && personal_details.marital_status.title[locale]}
                group="marital_status"
                dropdownClass="container-input"
                className="input" />
        </div>
    );
}
export default Step4;