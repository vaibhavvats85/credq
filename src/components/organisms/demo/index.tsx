import styles from './style.module.scss';
import React from 'react';
import * as constants from '../../../utils';
import Demoform from '../../molecules/demo-form';

export interface Demoprops {

}

const Demo: React.FC<Demoprops> = () => {
    return (
        <div className={styles.demo}>
            <h1>{constants.schedule_demo}</h1>
            <Demoform />
        </div>
    )
}
export default Demo;