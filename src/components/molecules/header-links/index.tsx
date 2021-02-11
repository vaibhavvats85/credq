import Label from '../../atoms/labels';
import styles from './style.module.scss';

const headerLinks = [
    { label: 'Home', path: 'home' },
    { label: 'What we do', path: 'about' },
    { label: 'How It Works', path: 'works' },
    { label: 'Products', path: 'products' }
];

const HeaderLinks: React.FC = () => {
    return (
        <div className={styles.header_links}>
            {headerLinks.map((link, idx) => <Label className={styles.header_links_link}
                size={'medium'} key={idx}
                path={link.path}
                isLink
                onClick={() => {
                    const elem = document.getElementById(`#${link.path}`);
                    elem?.scrollIntoView({ behavior: "smooth", block: 'center' });
                }}>
                {link.label}
            </Label>)}
        </div>
    );
}
export default HeaderLinks;
