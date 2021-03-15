import styles from './style.module.scss';
import React from 'react';
import * as constants from '../../../utils';
import Logo from '../../atoms/logo';
import credq1 from '../../../assets/CredoLend Icons-07.webp';
import credq2 from '../../../assets/CredoLend Icons-09.webp';
import credq3 from '../../../assets/CredoLend Icons-06.webp';

export interface Aboutprops {

}

const About: React.FC<Aboutprops> = () => {
    return (
        <div className={styles.about}>
            <h1>{constants.what_we_do}</h1>
            <p>
                {constants.about_paragraph}
            </p>
            <div className={styles.about_logo_col}>
                <Logo logo={credq1} className={styles.about_logo} imageClass={styles.about_logo_image}>
                    <p>{constants.alt_data_source}</p>
                </Logo>
                <Logo logo={credq2} className={styles.about_logo} imageClass={styles.about_logo_image}>
                    <p>{constants.psych_test}</p>
                </Logo>
                <Logo logo={credq3} className={styles.about_logo} imageClass={styles.about_logo_image}>
                    <p>{constants.intel_ai_engine}</p>
                </Logo>
            </div>
        </div>
    )
}
export default About;