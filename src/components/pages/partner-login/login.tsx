import { LockFilled } from "@ant-design/icons";
import Button, { ButtonSize, ButtonType } from "../../atoms/button";
import Input from "../../atoms/input";
import styles from './styles.module.scss';
import * as constants from '../../../utils/constants';
import React from "react";
import { useHistory } from "react-router";

export interface LoginProps {
    username: string;
    password: string;
    handleUserChange: (e: any) => void;
    handlePasswordChange: (e: any) => void;
    authenticateUser: (e: any) => void;
}

const Login: React.FC<LoginProps> = ({ username, password, handlePasswordChange, handleUserChange, authenticateUser }) => {
    const inputDimension = { height: '2.5rem' };
    const history = useHistory();
    return (

        <>
            <h1>Enter Cred<span className={styles.highlight}>Q </span> Credentials</h1>
            <Input dimension={inputDimension} placeholder={constants.user_label} value={username} className={styles.login_box_input} type="text" onChange={handleUserChange} />
            <Input dimension={inputDimension} placeholder={constants.password_label} value={password} className={styles.login_box_input} type="password" onChange={handlePasswordChange} />
            <Button className={styles.login_box_submit} size={ButtonSize.LARGE} type={ButtonType.BUTTON} onClick={authenticateUser}>
                <LockFilled /> {constants.login_btn}
            </Button>
            <p className={styles.note}>
                By proceeding, you agree to our
                    <span onClick={() => history.push('/terms')} className={styles.highlight}> Terms & Conditions</span> &
                    <span onClick={() => history.push('/privacy')} className={styles.highlight}> Privacy Policy</span>
            </p>
            <h2 style={{ marginBottom: '0', cursor: 'pointer' }} onClick={() => window.open('https://wa.me/918174970428')}>Need <span className={styles.highlight}>Help?</span></h2>
        </>
    );
}
export default Login;