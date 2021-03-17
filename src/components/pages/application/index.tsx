import Button from "../../atoms/button";
import './styles.scss';
import * as constants from '../../../utils/constants';
import { useSelector } from "react-redux";
import { CredqState } from "../../../store/rootReducer";

const Application: React.FC = () => {
    const { applications } = useSelector((state: CredqState) => state.authentication.user);
    const applicationCount = parseInt(applications);
    return (
        <div className="application">
            <div className="column">
                <h1 className="header">{constants.applications_left}</h1>
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
                <h1 className="header">{constants.new_application}</h1>
                {
                    applicationCount ?
                        (<>
                            <p>{constants.start_application_msg}</p>
                            <Button className="button" onClick={() => window.confirm(constants.start_application_confirm)}>
                                {constants.start_application}
                            </Button>
                        </>) :
                        (
                            <h2>
                                {constants.cant_proceed_msg}
                            </h2>
                        )
                }

            </div>
        </div>
    );
};
export default Application;