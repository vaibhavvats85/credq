import styles from './style.module.scss';
import classnames from 'classnames';

export interface Dropdownprops {
    values: string[];
    selected_value: string;
    group: string;
    label: string;
    dropdownClass?: string;
    className?: string;
    handleChange: (event: any) => void;
    sub_label?: string;
}

const Dropdown: React.FC<Dropdownprops> = ({ values, group, className, label, dropdownClass, selected_value, handleChange, sub_label }) => {
    const id = label.toLowerCase();
    const classProps = classnames(
        styles.dropdown,
        className
    )
    return (
        <div className={classProps}>
            <label htmlFor={id}>{label}</label>
            <p>{sub_label}</p>
            <select onChange={handleChange} value={selected_value} className={dropdownClass} name={group} id="dropdown">
                <option value=''>None</option>
                {values.map((value, idx) => <option key={idx} value={value}>{value}</option>)}
            </select>
        </div>
    )
}
export default Dropdown;
