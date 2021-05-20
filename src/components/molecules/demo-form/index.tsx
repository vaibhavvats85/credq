import React, { useState } from 'react';
import Button, { ButtonSize, ButtonType } from '../../atoms/button';
import Input from '../../atoms/input';
import styles from './style.module.scss';
import * as constants from '../../../utils';
import DialogModal from '../../atoms/dialog';
export interface DemoformProps {
}
const inputMsgStyle = {
    paddingBottom: '5rem',
    paddingLeft: '1rem',
    borderRadius: '0',
}
const Demoform: React.FC<DemoformProps> = () => {

    const onChange = () => { };
    const [isDialogOpen, setDialogOpen] = useState(false);
    return (
        <form className={styles.demo_form}>
            <DialogModal type="success" isOpen={isDialogOpen} header={constants.scheduleDemoSubmitMsg} onClose={() => setDialogOpen(false)} />
            <div className={styles.row}>
                <Input className={styles.demo_form_input} label={constants.name_label} type="text" onChange={onChange} />
            </div>
            <div className={styles.row}>
                <Input className={styles.demo_form_input} label={constants.org_label} type="text" onChange={onChange} />
            </div>
            <div className={styles.row}>
                <Input className={styles.demo_form_input} label={constants.email_label} type="text" onChange={onChange} />
            </div>
            <div className={styles.row}>
                <Input className={styles.demo_form_input} label={constants.phone_label} type="text" onChange={onChange} />
            </div>
            <div className={styles.row}>
                <Input dimension={inputMsgStyle} className={styles.demo_form_input} label={constants.msg_label} type="text" onChange={onChange} placeholder={'Type your message here...'} />
            </div>
            <Button className={styles.demo_form_submit} onClick={() => setDialogOpen(true)} size={ButtonSize.LARGE} type={ButtonType.BUTTON}>
                {constants.submit_btn}
            </Button>
        </form>
    )
}

export default Demoform;