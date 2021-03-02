import img from '../../../assets/under-contruction.png';
import { useState } from "react";
import './style.scss';
import { useHistory } from "react-router-dom";

export interface UnderContructionProps {
    header: string;
    body?: string;
}

const UnderContruction: React.FC<UnderContructionProps> = (props) => {
    const [modalOpen, setModalOpen] = useState(true);
    const history = useHistory();
    const hideModal = () => {
        setModalOpen(false);
        history.push('/');
    }
    return (
        <div className="modal-bg" style={!modalOpen ? { display: 'none' } : { display: 'block' }}>
            <div className="under-construction" >
                <button className="close" onClick={hideModal}>{'×'}</button>
                <img alt="under-construction" src={img} />
            </div>
        </div>
    );
}
export default UnderContruction;