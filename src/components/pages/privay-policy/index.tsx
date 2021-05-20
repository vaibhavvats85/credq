import BgVideo from "../../molecules/bg-video"
import Header from "../../organisms/header";
import './styles.scss';
import * as constants from '../../../utils/constants';
import Info from "../../organisms/info";
import { useEffect } from "react";
import Footer from "../../organisms/footer";

const PrivacyPolicy = () => {
    useEffect(() => window.scroll(0, 0), []);
    return (
        <div className="privacy">
            <Header />
            <BgVideo className="bg-video-privacy">
                <h1>Privacy Policy</h1>
                <h2>We treat your data if it was our own</h2>
            </BgVideo>
            <div className="sub-title">
                <div className="box">
                    <h2 className="head">
                        Trust is key
                </h2>
                    <h3 className="para">
                        We ensure utmost confidentiality regarding practices and policies of all lenders and insurers that we partner with.
                </h3>
                </div>
                <div className="box">
                    <h2 className="head">
                        Anonymity
                </h2>
                    <h3 className="para">
                        All identities and details of an individual remain private and secured
                </h3>
                </div>
            </div>
            <div className="guideline">
                <p>CredQ is compliant with Central Bank (RBI & IRBDT Guidelines) and Information Technology Act 2000 (Data Privacy).</p>
                <p>
                    At CredQ, We give utmost importance to the privacy of our customers that helps us to build trust and make you
                    comfortable while using our services. Please take a moment to go through our Privacy Policy and understand our process of data collection and sharing and its storage.
                </p>
            </div>
            <div className="questions">
                <Info data={constants.privacy_policy_questions} />
            </div>
            <Footer />
        </div>
    );
}
export default PrivacyPolicy;