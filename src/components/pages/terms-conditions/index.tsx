import BgVideo from "../../molecules/bg-video"
import Header from "../../organisms/header";
import './styles.scss';
import * as constants from '../../../utils/constants';
import Info from "../../organisms/info";
import { useEffect } from "react";

const TermsConditions = () => {
    useEffect(() => window.scroll(0, 0), []);
    return (
        <>
            <Header />
            <BgVideo className="bg-video-children">
                <h1>Terms & Conditions</h1>
            </BgVideo>
            <div className="questions">
                <Info data={constants.terms_conditions_questions} />
            </div>
        </>
    );
}
export default TermsConditions;