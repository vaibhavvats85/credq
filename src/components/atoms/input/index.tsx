import styles from './style.module.scss';
import classnames from 'classnames';

export interface Inputprops {
    placeholder?: string;
    label: string;
    name?: string;
    onChange: (event: any) => void;
    type?: string;
    className?: string;
    dimension?: Object;
    inputClass?: string;
    value?: string | number;
    autocomplete?: string;
    sub_label? : string;
}

const Input: React.FC<Inputprops> = ({ name, value, label, placeholder, onChange, type, className, dimension, autocomplete, inputClass, sub_label }) => {
    const id = label.toLowerCase();
    const classProps = classnames(
        styles.input,
        className
    )
    return (
        <div className={classProps}>
            <label htmlFor={id}>{label}</label>
            <p>{sub_label}</p>
            <input name={name} className={inputClass} autoComplete={autocomplete} value={value} style={dimension} id={id} type={type} placeholder={placeholder} onChange={onChange} />
        </div>
    )
}
export default Input;