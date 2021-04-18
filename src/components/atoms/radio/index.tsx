import React from "react";
import './styles.scss';
export interface RadioProps {
    values: string[];
    sub_values?: string[];
    group: string;
    selected_value?: string;
    handleChange: (event: any) => void;
}
const Radio: React.FC<RadioProps> = ({ values, sub_values = [], group, handleChange, selected_value }) => {
    return (
        <div className="radio-group">
            {values.map((value, idx) => {
                const id = value.toLowerCase();
                return (
                    <div key={idx} className="radio-btn">
                        <div>
                            <h4>{value}</h4>
                            <label htmlFor={id}>{sub_values[idx]}</label>
                        </div>
                        <input checked={value === selected_value} onChange={handleChange} type="radio" id={id} name={group} value={value} />
                    </div>)
            })}
        </div>

    );
}
export default Radio;