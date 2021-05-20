import React from "react";
import './styles.scss';
import { useSelector } from "react-redux";
import { CredqState } from "../../../../store/rootReducer";
import { LocationFinder } from "../../../atoms/location-finder";
import { SearchOutlined } from "@ant-design/icons";

export interface Step2Props {
    currentStep: number;
    location: string;
    handleChange: (name: string, value: string) => void;
}
const Step2: React.FC<Step2Props> = (props) => {
    const locale = useSelector((state: CredqState) => state.preferences.language);
    if (props.currentStep !== 2) {
        return null
    }
    return (
        <div className="container">
            <LocationFinder locale={locale} {...props} />
        </div>
    );
}
export default Step2;