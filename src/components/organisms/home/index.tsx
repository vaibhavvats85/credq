import styles from './style.module.scss';
import React from 'react';
import * as constants from '../../../utils';
import Button, { ButtonSize, ButtonType } from '../../atoms/button';
import { scrollToView } from '../../../utils/service';

export interface Homeprops {

}

const Home: React.FC<Homeprops> = () => {
    return (
        <div className={styles.home}>
            <p>
                {constants.home_paragraph}
            </p>
            <Button className={styles.home_button} size={ButtonSize.MEDIUM} type={ButtonType.BUTTON} onClick={() => scrollToView('demo')}>
                {constants.schedule_demo}
            </Button>
        </div>
    )
}
export default Home;