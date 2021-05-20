import styles from './style.module.scss';
import classnames from 'classnames';
import NumberFormat from 'react-number-format';

export interface Inputprops {
    placeholder?: string;
    label?: string;
    name?: string;
    onChange: (event: any) => void;
    type?: string;
    className?: string;
    dimension?: Object;
    inputClass?: string;
    value?: string | number;
    autocomplete?: string;
    sub_label?: string;
    format?: boolean;
    logo?: any;
}

const Input: React.FC<Inputprops> = ({ name, value, label, placeholder, onChange, type, className, dimension, autocomplete, inputClass, sub_label, format, logo }) => {
    const id = label?.toLowerCase();
    const classProps = classnames(
        styles.input,
        className
    )
    return (
        <div className={classProps}>
            {label && <label htmlFor={id}>{label}{logo}</label>}
            {sub_label && <p>{sub_label}</p>}
            {!format ? <input name={name}
                className={inputClass}
                autoComplete={autocomplete}
                value={value}
                style={dimension}
                id={id}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
            /> :
                <NumberFormat
                    value={value}
                    thousandSeparator={true}
                    prefix={'₹'}
                    className={inputClass}
                    autoComplete={autocomplete}
                    style={dimension}
                    id={id}
                    placeholder={placeholder}
                    onValueChange={onChange}
                />}
        </div>
    )
}
export default Input;