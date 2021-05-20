import React from 'react';
import './style.scss';

const Modal: React.FC<any> = ({ show, children, close, className }) => {

    return (
        <div className={`modal ${className}`} style={!show ? { display: 'none' } : { display: 'block' }}>
            <button className="close" onClick={close}>{'×'}</button>
            {children}
        </div>
    )
}
export default Modal;