import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { CredqState } from "../../../store/rootReducer";

export interface ProtectedRouteProps {
    Component: any;
    path: string;
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ Component, ...rest }) => {
    const { isLoggedIn } = useSelector((state: CredqState) => state.authentication);
    return (
        <Route
            {...rest}
            render={() => {
                if (isLoggedIn) {
                    return (<Component />);
                } else {
                    return (<Redirect to={'/login'} />);
                }
            }}
        />
    );
};
export default ProtectedRoute;
