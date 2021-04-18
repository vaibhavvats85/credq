import React from "react";
import { loan_amount } from "../../../../utils/preferences";
import Input from "../../../atoms/input";

export interface Step3Props {
    currentStep: number;
    amount: string;
    handleChange: (event: any) => void;
}
const Step3: React.FC<Step3Props> = (props) => {
    if (props.currentStep !== 3) {
        return null
    }
    const locale = 'tamil';
    return (
        <div className="container">
            <Input name="amount" 
            type="number"
            value={props.amount} 
            placeholder="₹ 10, XXXX" 
            label={loan_amount.title.english}
            sub_label={loan_amount.title[locale]} 
            onChange={props.handleChange} 
            inputClass="container-input" />
        </div>
    );
}
export default Step3;