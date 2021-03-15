import classNames from 'classnames';
import { Link } from '../../../models/Link';
import { scrollToView } from '../../../utils/service';
import Label from '../../atoms/labels';
import styles from './style.module.scss';


const headerLinks: Link[] = [
    { label: 'Home', path: 'home' },
    { label: 'What we do', path: 'about' },
    { label: 'How It Works', path: 'works' },
    { label: 'Products', path: 'products' }
];

export interface HeaderLinksProps {
    className?: string;
}

const HeaderLinks: React.FC<HeaderLinksProps> = ({ className }) => {
    const classProps = classNames(
        styles.header_links,
        className
    )
    return (
        <div className={classProps}>
            {headerLinks.map((link, idx) => <Label className={styles.header_links_link}
                size={'medium'} key={idx}
                path={link.path}
                isLink
                onClick={() => scrollToView(link.path)}
            >
                {link.label}
            </Label>)}
        </div>
    );
}
export default HeaderLinks;
