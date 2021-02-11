import { ReactElement } from 'react';
import styles from './style.module.scss';
import classnames from 'classnames';
export interface Pointerprops {
    number: number;
    children: string | ReactElement;
    className?: string;
}
const Pointer: React.FC<Pointerprops> = ({ number, children, className }) => {
    const classProps = classnames(
        styles.pointer,
        className
    )
    return (
        <div className={classProps}>
            <div className={styles.pointer_number}>
                {number}
            </div>
            {children}
        </div>
    )
}

export default Pointer;