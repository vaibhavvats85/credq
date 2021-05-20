import BgVideo from "../../molecules/bg-video"
import Header from "../../organisms/header";
import './styles.scss';
import * as constants from '../../../utils/constants';
import Info from "../../organisms/info";
import { useEffect } from "react";
import Footer from "../../organisms/footer";

const TermsConditions = () => {
    useEffect(() => window.scroll(0, 0), []);
    return (
        <div className="terms">
            <Header />
            <BgVideo className="bg-video-terms">
                <h1>Terms & Conditions</h1>
            </BgVideo>
            <div className="questions">
                <Info data={constants.terms_conditions_questions} />
            </div>
            <Footer />
        </div>
    );
}
export default TermsConditions;