import { useEffect, useState } from "react";
import Modal from "../../atoms/modal";
import styles from './styles.module.scss';
import { changePassword, loginUserRequest, updateLoginMessage } from "../../../store/authentication";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { CredqState } from "../../../store/rootReducer";
import { CheckCircleOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import Login from "./login";
import NewPassword from "./newpassword";

export interface PartnerLoginProps {
    modalOpen: boolean;
    hideModal: () => void;
}

const PartnerLogin: React.FC<PartnerLoginProps> = () => {
    // Store hooks
    const dispatch = useDispatch();
    const { message, msgType, isLoggedIn, user: { first_login } } = useSelector((state: CredqState) => state.authentication);
    // Authentication values
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [showNewPassword, setShowNewPassword] = useState(false);

    const handleUserChange = (e: any) => setUsername(e.target.value);
    const handlePasswordChange = (e: any) => setPassword(e.target.value);

    const newPasswordChange = (e: any) => {
        dispatch(updateLoginMessage(''));
        setNewPassword(e.target.value);
    }
    const confirmPasswordChange = (e: any) => {
        if (!newPassword) dispatch(updateLoginMessage('Please enter new password'));
        else {
            dispatch(updateLoginMessage('Passwords do not match'));
            if (newPassword === e.target.value) dispatch(updateLoginMessage('Passwords Match', 'success'));
            setConfirmPassword(e.target.value);
        }
    }

    const changeUserPassword = () => {
        const req = {
            username: username,
            password: newPassword
        };
        dispatch(changePassword(req))
    }

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
        if (isLoggedIn && !first_login) {
            history.push('/application');
        } else if (isLoggedIn && first_login) {
            setShowNewPassword(true);
        }
    }, [isLoggedIn, history, showNewPassword, first_login]);

    return (
        <Modal show={modalOpen} close={hideModal}>
            <div className={styles.login}>
                <div className={styles.login_box}>
                    {!showNewPassword ? <Login
                        username={username}
                        password={password}
                        handleUserChange={handleUserChange}
                        handlePasswordChange={handlePasswordChange}
                        authenticateUser={authenticateUser} /> :
                        <NewPassword
                            newPassword={newPassword}
                            confirmPassword={confirmPassword}
                            confirmPasswordChange={confirmPasswordChange}
                            newPasswordChange={newPasswordChange}
                            changePassword={changeUserPassword}
                        />
                    }
                </div>
                <div className={styles.error}>
                    {
                        msgType === 'error' ?
                            <p className={styles.message_error}>
                                {message && <>
                                    <ExclamationCircleOutlined /> {message}
                                </>}
                            </p> :
                            <p className={styles.message_success}>
                                {message && <>
                                    <CheckCircleOutlined /> {message}
                                </>}
                            </p>
                    }
                </div>
                <p className={styles.note}>
                    By proceeding, you agree to our
                    <span className={styles.highlight}> Terms & Conditions</span> &
                    <span className={styles.highlight}> Privacy Policy</span>
                </p>
            </div>
        </Modal>
    )
};

export default PartnerLogin;