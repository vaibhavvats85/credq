import { LockFilled } from "@ant-design/icons";
import Button, { ButtonSize, ButtonType } from "../../atoms/button";
import Input from "../../atoms/input";
import styles from './styles.module.scss';
import * as constants from '../../../utils/constants';
import React from "react";

export interface NewPasswordProps {
    newPassword: string;
    confirmPassword: string;
    newPasswordChange: (e: any) => void;
    confirmPasswordChange: (e: any) => void;
    changePassword: (e: any) => void;
}

const NewPassword: React.FC<NewPasswordProps> = ({ newPassword, confirmPassword, newPasswordChange, confirmPasswordChange, changePassword }) => {
    const inputDimension = { height: '3rem' };
    return (
        <>
            <h1>Change <span className={styles.highlight}>Password</span></h1>
            <Input dimension={inputDimension} placeholder={constants.new_password} value={newPassword} className={styles.login_box_input} type="password" onChange={newPasswordChange} />
            <Input dimension={inputDimension} placeholder={constants.confirm_password} value={confirmPassword} className={styles.login_box_input} type="password" onChange={confirmPasswordChange} />
            <Button className={styles.login_box_submit} size={ButtonSize.LARGE} type={ButtonType.BUTTON} onClick={changePassword}>
                <LockFilled /> {constants.login_btn}
            </Button>
        </>
    );
}
export default NewPassword;