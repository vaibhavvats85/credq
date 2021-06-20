import Button from "../../atoms/button";
import './styles.scss';
import * as constants from '../../../utils/constants';
import { useSelector } from "react-redux";
import { CredqState } from "../../../store/rootReducer";
import { useHistory } from "react-router";
import UserOptions from "../../molecules/user-options";
import { useEffect } from "react";

const Application: React.FC = () => {
    const { applications } = useSelector((state: CredqState) => state.authentication.user);
    const applicationCount = 5;
    const history = useHistory();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <UserOptions fromApplicationPage menuClass="nav-applications" overlayClass="overlay-applications" />
            <div className="application">
                <div className="column">
                    <h1 className="header">Application <span>Tracker</span></h1>
                    {
                        applicationCount ?
                            (<>
                                <h1 className="count">{applicationCount}</h1>
                            </>) :
                            (
                                <>
                                    <p className="count_empty">{constants.no_applications_msg}</p>
                                    <h2>{constants.visit_planbilling}</h2>
                                </>
                            )

                    }
                </div>
                <div className="column">
                    {
                        applicationCount > 0 ?
                            (<>
                                <Button className="button" onClick={() => history.push('/application/start')}>
                                    {constants.start_application}
                                </Button>
                            </>) :
                            (
                                <h2 style={{fontSize: '1rem'}}>
                                    {constants.cant_proceed_msg}
                                </h2>
                            )
                    }

                </div>
            </div>
        </>
    );
};
export default Application;