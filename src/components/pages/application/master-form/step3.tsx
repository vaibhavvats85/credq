import React from "react";
import { useSelector } from "react-redux";
import { CredqState } from "../../../../store/rootReducer";
import { loan_amount } from "../../../../utils/preferences";
import Input from "../../../atoms/input";

export interface Step3Props {
    currentStep: number;
    amount: string;
    handleChange: (event: any) => void;
}
const Step3: React.FC<Step3Props> = (props) => {
    const locale = useSelector((state: CredqState) => state.preferences.language);
    if (props.currentStep !== 3) {
        return null
    }
    return (
        <div className="container">
            <Input name="amount"
                format
                value={props.amount}
                placeholder="₹ 10, XXXX"
                label={loan_amount.title.english}
                sub_label={locale !== 'english' && loan_amount.title[locale]}
                onChange={props.handleChange}
                inputClass="container-input"
                className="input" />
        </div>
    );
}
export default Step3;