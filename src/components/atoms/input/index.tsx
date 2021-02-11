import styles from './style.module.scss';
import classnames from 'classnames';

export interface Inputprops {
    placeholder?: string;
    label: string;
    onChange: () => void;
    type?: string;
    className?: string;
    dimension?: Object;
}

const Input: React.FC<Inputprops> = ({ label, placeholder, onChange, type, className, dimension }) => {
    const id = label.toLowerCase();
    const classProps = classnames(
        styles.input,
        className
    )
    return (
        <div className={classProps}>
            <label htmlFor={id}>{label}</label>
            <input style={dimension} id={id} type={type} placeholder={placeholder} onChange={onChange} />
        </div>
    )
}
export default Input;