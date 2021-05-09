import Logo from '../../atoms/logo';
import styles from './style.module.scss';
import credq from '../../../assets/credq_logo.png';
import linkedin from '../../../assets/linkedin-icon.svg';
import * as constants from '../../../utils/constants';
import Label from '../../atoms/labels';

const Footer = () => {
    const linkedInUrl = 'https://www.linkedin.com/company/credq/';
    const openWindow = (url: string) => {
        window.open(url);
    }
    return (
        <div className={styles.footer}>
            <div className={styles.footer_links}>
                <div className={styles.footer_support}>
                    <h3>{constants.support}</h3>
                    <Label className={styles.footer_label} isLink path={'contacts'}>{constants.contact}</Label>
                    <Label className={styles.footer_label} isLink path={'privacy'}>{constants.privacy_policy}</Label>
                    <Label className={styles.footer_label} isLink path={'terms'}>{constants.terms_conditions}</Label>
                </div>

                <div className={styles.footer_social}>
                    <h3 style={{ textAlign: 'center' }}>{constants.social}</h3>
                    <Logo dimension={{ height: '2.5rem' }} onClick={() => openWindow(linkedInUrl)} className={styles.footer_linkedin} logo={linkedin} />
                </div>
            </div>
            <div className={styles.footer_logo}>
                <Logo imageClass={styles.footer_logo_image} logo={credq} /><span>CredQ © COPYRIGHT 2021</span>
            </div>

        </div>
    )
}

export default Footer;