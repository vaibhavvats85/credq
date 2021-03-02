import Logo from '../../atoms/logo';
import styles from './style.module.scss';
import credq from '../../../assets/credq_logo.png';
import linkedin from '../../../assets/linkedin-icon.svg';
import * as constants from '../../../utils/constants';
import Label from '../../atoms/labels';
import { Route } from 'react-router-dom';
import UnderContruction from '../../atoms/under-contruction';
const logoStyles = {
    width: '7rem',
    height: '2.5rem',
}
const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_logo}>
                <Logo dimension={logoStyles} logo={credq} />
            </div>
            <div className={styles.footer_support}>
                <h3>{constants.support}</h3>
                <Label className={styles.footer_label} isLink path={'contacts'}>{constants.contact}</Label>
                <Label className={styles.footer_label} isLink path={'privacy'}>{constants.privacy_policy}</Label>
                <Label className={styles.footer_label} isLink path={'terms'}>{constants.terms_conditions}</Label>
            </div>

            <div className={styles.footer_social}>
                <h3>{constants.social}</h3>
                <Logo dimension={{ height: '2.5rem' }} className={styles.footer_linkedin} logo={linkedin} />
            </div>
            <Route path={'/contacts'} component={UnderContruction} />
            <Route path={'/privacy'} component={UnderContruction} />
            <Route path={'/terms'} component={UnderContruction} />
        </div>
    )
}

export default Footer;