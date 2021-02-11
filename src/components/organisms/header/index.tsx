import Button, { ButtonSize, ButtonType } from "../../atoms/button"
import Logo from "../../atoms/logo";
import HeaderLinks from "../../molecules/header-links"
import logo from '../../../assets/credq_logo.png';
import styles from './style.module.scss';
import * as constants from '../../../utils';
import { useState } from "react";
import Modal from "../../atoms/modal";
import credq from '../../../assets/credq_logo.png';
import Input from "../../atoms/input";
import { Route } from "react-router-dom";
import Products from "../products";

const logoStyles = {
    width: '9rem',
    height: '3rem'
}
const Header: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const showModal = () => {
        setModalOpen(true);
    }
    const hideModal = () => {
        setModalOpen(false);
    }
    return (
        <>
            <div className={styles.header}>
                <Logo logo={logo} className={styles.header_logo} dimension={logoStyles} />
                <HeaderLinks />
                <Button className={styles.header_login} size={ButtonSize.LARGE} onClick={showModal}>
                    {constants.partner_login}
                </Button>
            </div>
            <Modal show={modalOpen} close={hideModal}>
                <div className={styles.login}>
                    <Logo dimension={{ height: '4rem' }} className={styles.login_head} logo={credq} />
                    <div className={styles.login_box}>
                        <h1>{constants.enter_username}</h1>
                        <Input dimension={{ height: '2rem' }} className={styles.login_box_input} label={`${constants.user_label}:`} type="text" onChange={() => { }} />
                        <Input dimension={{ height: '2rem' }} className={styles.login_box_input} label={`${constants.password_label}:`} type="text" onChange={() => { }} />
                        <Button className={styles.login_box_submit} size={ButtonSize.LARGE} type={ButtonType.BUTTON} onClick={() => alert('Partner Login')}>
                            {constants.login_btn}
                        </Button>
                    </div>
                </div>
            </Modal>
            <Route path={'/products'} component={Products} />
        </>
    )
}
export default Header;
