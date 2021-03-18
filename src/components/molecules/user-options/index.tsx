import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CredqState } from "../../../store/rootReducer";
import './styles.scss';
import * as constants from '../../../utils/constants';
import { useHistory } from "react-router-dom";
import { logOut } from "../../../store/authentication";
import Button from "../../atoms/button";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";

const UserOptions: React.FC = () => {
    const { organization, plan } = useSelector((state: CredqState) => state.authentication.user);
    const [menuOpen, setMenuopen] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();

    // Overlay Ref
    const container = useRef<HTMLHeadingElement>(null);

    // Get Initials of user
    const getInitials = (org: string) => {
        const [fname, lname] = org.split(' ');
        return `${fname[0]}${lname[0]}`
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    const toggleMenu = () => setMenuopen(state => !state);

    const redirectTo = (path: string) => {
        history.push(path);
        setMenuopen(false);
    };

    const logout = () => {
        history.push('/login');
        dispatch(logOut());
        setMenuopen(false);
    };

    const handleClickOutside = (event: any) => {
        if (container.current && !container.current?.contains(event.target)) {
            setMenuopen(false);
        }
    };

    return (
        <>
            <div className="nav" onClick={toggleMenu}>
                <span className="initials">{getInitials(organization)}</span>
                {!menuOpen ? <span className="menu"><MenuOutlined /></span> :
                    <CloseOutlined className="close" onClick={() => setMenuopen(false)} />}
            </div>
            { menuOpen &&
                <div className="overlay" ref={container}>
                    {/* <button className="close" onClick={() => setMenuopen(false)}><CloseOutlined /></button> */}
                    <div className="user">{organization}</div>
                    <Button className="start_application" onClick={() => redirectTo('/startapplication')}>
                        {constants.new_application}
                    </Button>
                    <ul>
                        {plan === 'Premium' && <li onClick={() => redirectTo('/loantracker')}>{constants.loan_tracker}</li>}
                        <li onClick={() => redirectTo('/planbilling')}>{constants.plan_billing}</li>
                        <li onClick={() => window.open('https://wa.me/13218060588')}>{constants.help_center}</li>
                        <li onClick={logout}>{constants.logout}</li>
                    </ul>
                </div>
            }
        </>
    );
};

export default UserOptions;