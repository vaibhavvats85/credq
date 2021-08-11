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
    const [, setResult] = useState(null);

    const onChange = (event:any) => { 
        const { name, value } = event.target;

    setState({
      ...state,
      [name]: value
    });
    };
    const [isDialogOpen, setDialogOpen] = useState(false);

    const [state, setState] = useState({
        name: '',
        organization:'',
        email: '',
        phone:'',
        message: ''
      });

      const sendEmail = (event:any) => {
        event.preventDefault();
        axios
         .post('/send', { ...state })
         .then(response => {
           setResult(response.data);
           setState({ name: '', organization: '', email: '',phone: '', message: '' });
         })
         .catch(() => {
        //    return setResult({ success: false, message: 'Something went wrong. Try again later' });
       });
    }
    return (
        <form className={styles.demo_form} onSubmit={sendEmail}>
            <DialogModal type="success" isOpen={isDialogOpen} header={constants.scheduleDemoSubmitMsg} onClose={() => setDialogOpen(false)} />
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