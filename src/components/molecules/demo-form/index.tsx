import React, { useState } from 'react';
import Button, { ButtonSize } from '../../atoms/button';
import Input from '../../atoms/input';
import styles from './style.module.scss';
import * as constants from '../../../utils';
import DialogModal from '../../atoms/dialog';
import axios from 'axios';

export interface DemoformProps {
}
const inputMsgStyle = {
    paddingBottom: '5rem',
    paddingLeft: '1rem',
    borderRadius: '0',
}
const Demoform = () => {
    const [formStatus, setFormStatus] = useState({ message: '', status: '' });
    const onChange = (event: any) => {
        const { id: name, value } = event.target;
        setState({
            ...state,
            [name]: value
        });
    };
    const [isDialogOpen, setDialogOpen] = useState(false);

    const [state, setState] = useState({
        name: '',
        organization: '',
        email: '',
        phone: '',
        message: ''
    });

    const sendEmail = (event: any) => {
        event.preventDefault();

        if (state.name === '' || state.organization === '' || state.email === '' || state.phone === '' || state.message === '') {
            setFormStatus({ message: 'Make sure you have provided information in each field', status: 'warning' });
        } else {
            setFormStatus({ message: 'Please wait while we are trying to capture your information....', status: 'loading' })
            axios.post(process.env.REACT_APP_BASE_URL + '/email', state).then(data => {
                setFormStatus({ message: constants.scheduleDemoSubmitMsg, status: 'success' });
                setState({ name: '', organization: '', email: '', phone: '', message: '' });
            }).catch(err => {
                setFormStatus({ message: constants.scheduleDemoFormFail, status: 'fail' });
            });
        }

    }
    return (
        <form className={styles.demo_form} onSubmit={sendEmail}>
            <DialogModal type={formStatus.status} isOpen={isDialogOpen} header={formStatus.message} onClose={() => setDialogOpen(false)} />
            <div className={styles.row}>
                <Input className={styles.demo_form_input} label={constants.name_label} type="text" value={state.name} onChange={onChange} />
            </div>
            <div className={styles.row}>
                <Input className={styles.demo_form_input} label={constants.org_label} type="text" value={state.organization} onChange={onChange} />
            </div>
            <div className={styles.row}>
                <Input className={styles.demo_form_input} label={constants.email_label} type="text" value={state.email} onChange={onChange} />
            </div>
            <div className={styles.row}>
                <Input className={styles.demo_form_input} label={constants.phone_label} type="text" value={state.phone} onChange={onChange} />
            </div>
            <div className={styles.row}>
                <Input dimension={inputMsgStyle} className={styles.demo_form_input} label={constants.msg_label} type="text" value={state.message} onChange={onChange} placeholder={'Type your message here...'} />
            </div>
            <Button className={styles.demo_form_submit} onClick={() => setDialogOpen(true)} size={ButtonSize.LARGE} type="submit">
                {constants.submit_btn}
            </Button>


        </form>

    )
}

export default Demoform;