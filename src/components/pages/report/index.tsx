import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { CredqState } from '../../../store/rootReducer';
import Button from '../../atoms/button';
import IndicatorBar from '../../atoms/indicator-bar';
import './styles.scss';
const Report: React.FC = () => {
    const [capabilityIndicate, setCapabilityIndicate] = useState('');
    const [willingnessIndicate, setWillingnessIndicate] = useState('');
    const [scale, setScale] = useState('');
    const { overall, capability, willingness } = useSelector((state: CredqState) => state.scores);
    const applicant = useSelector((state: CredqState) => state.preferences.name);
    const [indicate, setIndicate] = useState(0);
    const history = useHistory();
    useEffect(() => {
        if (overall >= 800) {
            setIndicate(1);
            setScale('high');
        } else if (overall >= 700) {
            setIndicate(2);
            setScale('high');
        } else if (overall >= 600) {
            setIndicate(3);
            setScale('average');
        } else {
            setIndicate(4);
            setScale('low');
        }

        if (capability >= 250) setCapabilityIndicate('100%');
        else if (capability >= 230) setCapabilityIndicate('>90%');
        else if (capability >= 150) setCapabilityIndicate('>85%');
        else setCapabilityIndicate('>80%');

        if (willingness >= 550) setWillingnessIndicate('100%');
        else if (willingness >= 500) setWillingnessIndicate('>90%');
        else if (willingness >= 450) setWillingnessIndicate('>80%');
        else setWillingnessIndicate('>70%');
    }, [capability, overall, willingness]);
    return (
        <div className="report">
            <h2>CredQ Score</h2>
            <div className="score">
                <h1>{overall}</h1>
                <IndicatorBar indicate={indicate} />
            </div>
            <h2>Borrower's Insights</h2>
            <h3 className="remark">{`${applicant} has a ${scale} score compared to other similar profiles.`}</h3>
            <div className="insights">
                <div className="details">
                    <h3>Repayment Capability</h3>
                    <div className="percentage">{capabilityIndicate}</div>
                </div>
                <div className="details">
                    <h3>Willingness to Repay</h3>
                    <div className="percentage">{willingnessIndicate}</div>
                </div>
            </div>
            <Button className="finish" onClick={() => {
                const leave = window.confirm("Are you sure you want to leave? If yes click 'OK'");
                if (leave) history.push('/application');
            }}>
                Finish
            </Button>
        </div>
    );
}
export default Report;