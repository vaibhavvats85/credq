import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CredqState } from "../../../store/rootReducer";
import './styles.scss';
import * as constants from '../../../utils/constants';
import { useHistory, useLocation } from "react-router-dom";
import { logOut } from "../../../store/authentication";
import Button from "../../atoms/button";
import { CloseOutlined, MenuOutlined, SearchOutlined } from "@ant-design/icons";
import { headerLinks } from '../header-links';
import { Link } from "../../../models";

export interface UserOptionsProps {
    menuClass?: string;
    overlayClass?: string;
    fromApplicationPage?: boolean;
}
const UserOptions: React.FC<UserOptionsProps> = ({ menuClass, overlayClass, fromApplicationPage }) => {
    const { organization } = useSelector((state: CredqState) => state.authentication.user);
    const { isLoggedIn } = useSelector((state: CredqState) => state.authentication);
    const [menuOpen, setMenuopen] = useState(false);
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();

    // Overlay Ref
    const container = useRef<HTMLHeadingElement>(null);

    // Get Initials of user
    const getInitials = (org: string) => {
        if (org) {
            const [fname, lname] = org.split(' ');
            return `${fname[0]}${lname[0]}`
        }
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

    const scrollView = (link: Link) => {
        if (link.path === 'products') history.push('/products');
        else history.push('/', { link: link.path })
        setMenuopen(false);
    }

    return (
        <>
            <div className={`nav ${menuClass}`} onClick={toggleMenu}>
                {isLoggedIn && <span className="initials">{getInitials(organization)}</span>}
                {!menuOpen && <span className="menu"><MenuOutlined /></span>}
            </div>
            { menuOpen &&
                <div className={`overlay ${overlayClass}`} ref={container}>
                    {menuOpen &&
                        <CloseOutlined className="close" onClick={() => setMenuopen(false)} style={{ fontSize: '1.5rem' }} />}
                    {isLoggedIn &&
                        <>
                            <div className="user">{organization}</div>
                            <Button className="start_application" onClick={() => redirectTo('/application')}>
                                {constants.start_application}
                            </Button>
                        </>
                    }
                    {isLoggedIn ?
                        <ul>
                            {(location.pathname !== '/' && !fromApplicationPage) && <li onClick={() => redirectTo('/')}>Home</li>}
                            <li onClick={() => redirectTo('/custprofile')}>{constants.cust_profile} <SearchOutlined /></li>
                            <li onClick={() => redirectTo('/planbilling')}>{constants.plan_billing}</li>
                            {(!fromApplicationPage && !isLoggedIn) && <li onClick={() => redirectTo('/products')}>Our Product</li>}
                            <li onClick={() => window.open('https://wa.me/918174970428')}>{constants.help_center}</li>
                            <li onClick={logout}>{constants.logout}</li>
                        </ul> :
                        <ul>
                            {
                                headerLinks.map((link) => <li onClick={() => scrollView(link)}>{link.label}</li>)
                            }
                        </ul>
                    }

                </div>
            }
        </>
    );
};

export default UserOptions;