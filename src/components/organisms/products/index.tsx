import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from '../../atoms/modal';
import styles from './style.module.scss';
import * as constants from '../../../utils/constants';
import Button, { ButtonSize, ButtonType } from '../../atoms/button';

const Products: React.FC<{ open: boolean }> = () => {
    const [modalOpen, setModalOpen] = useState(true);
    const history = useHistory();
    const hideModal = () => {
        setModalOpen(false);
        history.push('/');
    }
    return (
        <Modal show={modalOpen} close={hideModal}>
            <div className={styles.pricing}>
                <div className={styles.card}>
                    <div className={styles.card_essential}>
                        <h1>Essentials</h1>
                        <p>
                            Performs Risk Assessment for
                            unsecured and secured income generating loans
                        </p>
                    </div>
                    <span className={styles.arrow_essential}>↓</span>
                    <ul className={styles.features_essentials}>
                        {
                            constants.essential_features
                                .map(feature => <li>{feature}</li>)
                        }
                    </ul>
                    <Button className={styles.submit_essentials} size={ButtonSize.LARGE} type={ButtonType.BUTTON} onClick={() => alert('Partner Login')}>
                        {constants.schedule_demo}
                    </Button>
                </div>
                <div className={styles.card}>
                    <div className={styles.card_premium}>
                        <h1>Premium</h1>
                        <p>
                            Performs risk assessment for all types of
                            loans i.e. education, home, agricultural,
                            two-wheeler, personal and small business
                            loans
                        </p>

                    </div>
                    <span className={styles.arrow_premium}>↓</span>
                    <ul className={styles.features_premium}>
                        {
                            constants.premium_features
                                .map(feature => <li>{feature}</li>)
                        }
                    </ul>
                    <Button className={styles.submit_premium} size={ButtonSize.LARGE} type={ButtonType.BUTTON} onClick={() => alert('Partner Login')}>
                        {constants.schedule_demo}
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
export default Products;
