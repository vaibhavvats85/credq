import { useEffect, useState } from "react";
import Button, { ButtonSize, ButtonType } from "../../atoms/button";
import Input from "../../atoms/input";
import Logo from "../../atoms/logo";
import Modal from "../../atoms/modal";
import styles from './styles.module.scss';
import * as constants from '../../../utils/constants';
import credq from '../../../assets/credq_logo.png';
import { loginUserRequest, updateLoginMessage } from "../../../store/authentication";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { CredqState } from "../../../store/rootReducer";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { store } from "../../../store/store";

export interface PartnerLoginProps {
    modalOpen: boolean;
    hideModal: () => void;
}

const inputDimension = { height: '2rem', width: '60%' };

const logoDimension = { height: '4rem' };

const PartnerLogin: React.FC<PartnerLoginProps> = () => {
    // Store hooks
    const dispatch = useDispatch();
    const { message, isLoggedIn } = useSelector((state: CredqState) => state.authentication);
    // Authentication values
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const authenticateUser = () => {
        dispatch(updateLoginMessage(''))
        const req = {
            username: username,
            password: password
        };
        if (username && password) {
            dispatch(loginUserRequest(req));
        } else {
            if (!username && !password) dispatch(updateLoginMessage('Please enter your crendentials to continue!'));
            else if (!password) dispatch(updateLoginMessage('Please enter your password to continue!'));
            else dispatch(updateLoginMessage('Please enter username to continue!'))
        }
    };

    const [modalOpen, setModalOpen] = useState(true);
    const history = useHistory();
    const hideModal = () => {
        setModalOpen(false);
        history.push('/');
    }

    useEffect(() => {
        if (isLoggedIn) {
            history.push('/startapplication');
        }
    }, [isLoggedIn]);

    return (
        <Modal show={modalOpen} close={hideModal}>
            <div className={styles.login}>
                <Logo dimension={logoDimension} className={styles.login_head} logo={credq} />
                <div className={styles.login_box}>
                    <h1>{constants.enter_username}</h1>
                    <Input dimension={inputDimension} value={username} className={styles.login_box_input} label={`${constants.user_label}:`} type="text" onChange={(e) => setUsername(e.target.value)} />
                    <Input dimension={inputDimension} value={password} className={styles.login_box_input} label={`${constants.password_label}:`} type="password" onChange={(e) => setPassword(e.target.value)} />
                    <Button className={styles.login_box_submit} size={ButtonSize.LARGE} type={ButtonType.BUTTON} onClick={authenticateUser}>
                        {constants.login_btn}
                    </Button>
                </div>
                <div className={styles.error}>
                    <p className={styles.message}>

                        {message && <><ExclamationCircleFilled /> {message}</>}
                    </p>
                </div>
            </div>
        </Modal>)
};

export default PartnerLogin;