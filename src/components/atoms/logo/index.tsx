import classnames from 'classnames';
import { useEffect } from 'react';
import styles from './style.module.scss';

export interface LogoProps {
    logo: string;
    className?: string;
    dimension?: Object;
}

const Logo: React.FC<LogoProps> = ({ logo, className, children, dimension }) => {
    const classProps = classnames(
        styles.logo,
        className
    )
    return (
        <div className={classProps}>
            <img src={logo} style={dimension} />
            {children}
        </div>
    )
}
export default Logo;
