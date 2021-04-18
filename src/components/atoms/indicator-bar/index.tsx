import { useEffect } from 'react';
import './styles.scss';

export interface IndicatorBarProps {
    indicate: number;
}
const IndicatorBar: React.FC<IndicatorBarProps> = ({ indicate }) => {
    const indicators = [{
        color: '#00B050',
        tag: 'Excellent'
    },
    {
        color: '#91CF50',
        tag: 'Good'
    },
    {
        color: '#FFFF00',
        tag: 'Average'
    },
    {
        color: '#FE9292',
        tag: 'Poor'
    },
    {
        color: '#FF0000',
        tag: 'Very Poor'
    }];
    useEffect(() => {

    }, []);
    return (
        <div className="bar">
            {
                indicators.map((indicator, idx) => (
                    <div key={idx} className="division" style={{ backgroundColor: indicator.color }}>
                        <span className="tag">{indicator.tag}</span>
                        {idx + 1 === indicate && <div className="indicator" />}
                    </div>
                ))
            }
        </div>
    )
}
export default IndicatorBar;