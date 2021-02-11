import React from 'react';
import './style.scss';

const Modal: React.FC<any> = ({ show, children, close }) => {

    return (
        <div className="modal" style={!show ? { display: 'none' } : { display: 'block' }}>
            <button className="close" onClick={close}>{'×'}</button>
            {children}
        </div>
    )
}
export default Modal;