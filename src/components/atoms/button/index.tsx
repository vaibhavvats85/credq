import React from 'react';
import classnames from 'classnames';
import styles from './style.module.scss';

export const ButtonType = {
    BUTTON: 'button',
    RESET: 'reset',
    SUBMIT: 'submit',
}

export const ButtonTheme = {
    DEFAULT: 'default',
    ROUNDED: 'rounded',
}

export const ButtonSize = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large',
}

export interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    type?: any;
    size?: string;
    theme?: string;
    disabled?: boolean;
    onClick: (event?: any) => void;
}

const Button: React.FC<ButtonProps> = (props) => {
    const { type, onClick, children, theme, size, className, disabled } = props;
    const classProps: string = classnames(
        styles.button,
        theme && styles[theme],
        size && styles[size],
        {
            [styles.disabled]: disabled,
        },
        className
    )
    return (
        <button type={type} onClick={onClick} disabled={disabled} className={classProps}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    type: ButtonType.BUTTON,
    theme: ButtonTheme.DEFAULT,
    size: ButtonSize.MEDIUM,
    onClick: () => { },
    className: '',
    disabled: false,
}

export default Button;
