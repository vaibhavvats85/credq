import React from "react";
import './styles.scss';
import classnames from 'classnames';

export interface RadioProps {
    values: string[];
    sub_values?: string[];
    group: string;
    selected_value?: string;
    className?: string;
    handleChange: (event: any) => void;
    disabled?: boolean[];
}
const Radio: React.FC<RadioProps> = ({ values, sub_values = [], group, handleChange, selected_value, className, disabled = [] }) => {
    const classProps = classnames(
        'radio-group',
        className
    )
    return (
        <div className={classProps}>
            {values.map((value, idx) => {
                const id = value.toLowerCase();
                return (
                    <div key={idx} className="radio-btn">
                        <div>
                            <h4>{value}</h4>
                            <label htmlFor={id}>{sub_values[idx]}</label>
                            {disabled[idx] && <p className="coming-soon">Coming Soon</p>}
                        </div>
                        <input disabled={disabled[idx]} checked={value === selected_value} onChange={handleChange} type="radio" id={id} name={group} value={value} />
                    </div>)
            })}
        </div>

    );
}
export default Radio;