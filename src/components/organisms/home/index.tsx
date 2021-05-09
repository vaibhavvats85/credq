import styles from './style.module.scss';
import React from 'react';
import * as constants from '../../../utils';
import Button, { ButtonSize, ButtonType } from '../../atoms/button';
import { scrollToView } from '../../../utils/service';

export interface Homeprops {

}

const Home: React.FC<Homeprops> = () => {
    const scrollToDemo = () => scrollToView('demo');
    return (
        <div className={styles.home}>
            <video autoPlay muted loop className={styles.myVideo}>
                <source src={`${process.env.PUBLIC_URL}/assets/background_clip.mp4`} type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>
            <div className={styles.bg}></div>
            <div className={styles.content}>
                <p>
                    {constants.home_paragraph}
                </p>
                <Button className={styles.home_button} size={ButtonSize.MEDIUM} type={ButtonType.BUTTON} onClick={scrollToDemo}>
                    {constants.schedule_demo}
                </Button>
            </div>
        </div>
    )
}
export default Home;