import Button, { ButtonSize } from "../../atoms/button"
import Logo from "../../atoms/logo";
import HeaderLinks from "../../molecules/header-links"
import logo from '../../../assets/credq_logo.png';
import styles from './style.module.scss';
import * as constants from '../../../utils';
import { Route, useHistory } from "react-router-dom";
import Products from "../../pages/products";
import PartnerLogin from "../../pages/partner-login";
import { useSelector } from "react-redux";
import { CredqState } from "../../../store/rootReducer";
import UserOptions from "../../molecules/user-options";
import NavBar from "../nav";

const logoStyles = {
    width: '9rem',
    height: '3rem'
}
const Header: React.FC = () => {
    const history = useHistory();
    const { isLoggedIn } = useSelector((state: CredqState) => state.authentication);
    const redirectTo = (path: string) => history.push(path);

    return (
        <>
            <div className={styles.header}>
                <Logo onClick={() => redirectTo('/')} logo={logo} className={styles.header_logo} imageClass={styles.header_logo_image} />
                <HeaderLinks className={styles.header_links} />
                <div className={styles.header_login}>
                    {isLoggedIn ?
                        <UserOptions />
                        :
                        <Button className={styles.header_login_btn} size={ButtonSize.LARGE} onClick={() => redirectTo('/login')}>
                            {constants.partner_login}
                        </Button>
                    }
                </div>
                {/* <NavBar /> */}
            </div>
            <Route path={'/products'} component={Products} />
            <Route path={'/login'} component={PartnerLogin} />
        </>
    )
}
export default Header;
