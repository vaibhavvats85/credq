import React, { useEffect } from 'react';
import './styles.scss';
import * as constants from '../../../utils/constants';
import Header from '../../organisms/header';
import Button, { ButtonSize, ButtonType } from '../../atoms/button';
import { useHistory } from 'react-router';
import Footer from '../../organisms/footer';

const Products: React.FC<{ open: boolean }> = () => {
    const features = [
        { text: 'Average completion time ', suffix: '< 5 minutes' },
        { text: 'Accuracy rate', suffix: ' > 90%' },
        { text: 'Multi-Lingual' },
        { text: 'Faking Resistant' },
        { text: 'Customize Profile Tracker' },
        { text: 'Monthly Lead Generation' },
        { text: 'Seamless', suffix: ' API Integration' },
        { prefix: '24 X 7', text: ' Help & Support' }
    ];
    const history = useHistory();
    useEffect(() => {
        window.scroll(0, 0);
    }, []);
    return (
        <div className="our-product">
            <Header />
            <div className="product">
                <div className="row">
                    <div className="description">
                        <p>Our <span className="highlight">Technology</span></p>
                        <p>CredQ’s proprietary financial technology leverages an alternative data source – credit bureau data,
                        utility bills, demographic, geolocation, government reports coupled with psychometric data to
                    assess the creditworthiness and reliability of each applicant.</p>
                        <div className="image-0">
                            <img alt="product_1" src={`${process.env.PUBLIC_URL}/assets/product_1.png`} />
                        </div>
                        <p>Our AI risk scoring algorithm crunches over these data to discover
                        highly predictive delinquent behavioral and financial patterns and then translates
                        it into accurate personality score. With risk scoring taking mere seconds,
                        CredQ is the fastest and most accurate alternative risk scoring provider today.</p>
                        <Button size={ButtonSize.LARGE} className="demo" type={ButtonType.BUTTON} onClick={() => history.push('/', { link: 'demo' })}>
                            {constants.schedule_demo}
                        </Button>
                    </div>
                    <div className="image-1">
                        <img alt="product_1" src={`${process.env.PUBLIC_URL}/assets/product_1.png`} />
                    </div>
                </div>
                <div className="row">
                    <div className="image-2">
                        <img alt="product_2" src={`${process.env.PUBLIC_URL}/assets/product_2.png`} />
                    </div>
                    <div className="description">
                        <ul>
                            {
                                features.map(feature => <li>
                                    <span className="green">{feature.prefix}</span>
                                    {feature.text}
                                    <span className="green">{feature.suffix}</span></li>)
                            }
                        </ul>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Products;
