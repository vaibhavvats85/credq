import styles from './style.module.scss';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
import { ReactElement } from 'react';

export interface LabelProps {
    children: string | ReactElement;
    size?: string;
    isLink?: boolean;
    className?: string;
    path?: string;
    onClick?: () => void;
}
const Label: React.FC<LabelProps> = (props) => {
    const { children, size, isLink, className, onClick, path } = props;
    const classProps = classnames(
        styles.label,
        size && styles[size],
        isLink && styles.label_link,
        className
    )

    if (!isLink) {
        return (
            <a onClick={onClick} className={classProps}>{children}</a>
        )
    } else {
        return <NavLink
            onClick={onClick}
            className={classProps}
            to={`/${path}`}
            activeClassName={styles['active-class']}>
            {children}
        </NavLink>
    }

}

export default Label;