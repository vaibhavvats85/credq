import styles from './style.module.scss';
import classnames from 'classnames';

export interface Inputprops {
    placeholder?: string;
    label: string;
    onChange: (event: any) => void;
    type?: string;
    className?: string;
    dimension?: Object;
    inputClass?: string;
    value?: string | number;
    autocomplete?: string;
}

const Input: React.FC<Inputprops> = ({ value, label, placeholder, onChange, type, className, dimension, autocomplete, inputClass }) => {
    const id = label.toLowerCase();
    const classProps = classnames(
        styles.input,
        className
    )
    return (
        <div className={classProps}>
            <label htmlFor={id}>{label}</label>
            <input className={inputClass} autoComplete={autocomplete} value={value} style={dimension} id={id} type={type} placeholder={placeholder} onChange={onChange} />
        </div>
    )
}
export default Input;