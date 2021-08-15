import { CheckCircleFilled, ExclamationCircleFilled, WarningFilled } from "@ant-design/icons";
import './style.scss';
import Loader from 'react-loader-spinner';

export interface DialogModalProps {
    header: string;
    body?: string;
    onClose: () => void;
    isOpen: boolean;
    type?: string;
}

const DialogModal: React.FC<DialogModalProps> = (props) => {

    return (
        <div className="modal-bg" style={!props.isOpen ? { display: 'none' } : { display: 'block' }}>
            <div className="dialog" >
                {renderIcon(props.type)}
                <span>{props.header}</span>
                <div className="actions">
                    <button className="close" onClick={props.onClose}>OK</button>
                    {/* <button className="close" onClick={props.onClose}>Cancel</button> */}
                </div>
            </div>
        </div>
    );
}

const renderIcon = (type: string | undefined) => {
    switch (type) {
        case 'success':
            return <CheckCircleFilled className="success" />;
        case 'warning':
            return <WarningFilled className="warning" />
        case 'fail':
            return <ExclamationCircleFilled className="fail" />
        case 'loading':
            return <Loader type="ThreeDots" color="#0071bc" height="100" width="100" />    
        default:
            return null;
    }
}
export default DialogModal;