import styles from './style.module.scss';
import React from 'react';
import * as constants from '../../../utils';
import Pointer from '../../atoms/pointer';

export interface Worksprops {

}

const Works: React.FC<Worksprops> = () => {
    return (
        <div className={styles.works}>
            <h1>{constants.how_it_works}</h1>
            <div className={styles.works_cols}>
                <div>
                    {
                        Object.keys(constants.working_steps).slice(0, 3).map((point, idx) => (
                            <Pointer key={idx} number={idx + 1} className={styles.works_pointer}>
                                <p>{constants.working_steps[point]}</p>
                            </Pointer>
                        ))
                    }
                </div>
                <div>
                    {
                        Object.keys(constants.working_steps).slice(3, 6).map((point, idx) => (
                            <Pointer key={idx} number={idx + 4} className={styles.works_pointer}>
                                <p>{constants.working_steps[point]}</p>
                            </Pointer>
                        ))
                    }
                </div>
            </div>
        </div >
    )
}
export default Works;