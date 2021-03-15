import classnames from 'classnames';
import styles from './style.module.scss';

export interface LogoProps {
    logo: string;
    className?: string;
    dimension?: Object;
    imageClass?: string;
    onClick?: () => any;
}

const Logo: React.FC<LogoProps> = ({ logo, className, children, dimension, imageClass, onClick }) => {
    const classProps = classnames(
        styles.logo,
        onClick && styles.clickable,
        className
    )
    return (
        <div onClick={onClick} className={classProps}>
            <img alt="logo" src={logo} style={dimension} className={imageClass} />
            {children}
        </div>
    )
}
export default Logo;
