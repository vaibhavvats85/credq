import { Redirect, Route } from "react-router-dom";
import { getCookie } from "../../../utils/cookies";
import * as constants from '../../../utils/constants';

export interface ProtectedRouteProps {
    Component: any;
    path: string;
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ Component, ...rest }) => {
    const token = getCookie(constants.jwt_token);
    return (
        <Route
            {...rest}
            render={() => {
                if (token) {
                    return (<Component />);
                } else {
                    return (<Redirect to={'/login'} />);
                }
            }}
        />
    );
};
export default ProtectedRoute;
