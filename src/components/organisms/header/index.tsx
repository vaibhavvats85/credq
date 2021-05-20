import Button, { ButtonSize } from "../../atoms/button"
import Logo from "../../atoms/logo";
import HeaderLinks from "../../molecules/header-links"
import logo from '../../../assets/credq_logo.png';
import styles from './style.module.scss';
import * as constants from '../../../utils';
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { CredqState } from "../../../store/rootReducer";
import UserOptions from "../../molecules/user-options";

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
                        <>
                            <UserOptions />
                            <Button className={styles.header_login_btn} size={ButtonSize.LARGE} onClick={() => redirectTo('/login')}>
                                {constants.partner_login}
                            </Button>
                        </>
                    }
                </div>
                {/* <NavBar /> */}
            </div>

        </>
    )
}
export default Header;
