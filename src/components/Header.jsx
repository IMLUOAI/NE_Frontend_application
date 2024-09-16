import { Link } from "create-react-dom";
import logoutIcon from "../images/Union.svg";

const Header = () => {
    return (
        <header className="header">
            <div className="header__bar">
            <h3 className="header__title">NewsExplorer</h3>
             <a href="/">Home</a>
            </div>
            <div className="header__userName-bar">
                {isAuthorized ? (
                    <>
                    <Link to="/profile" className="header__link" onClick="handleProfileClick">
                        <h3 className="header__userName">{userName}</h3>
                    </Link>
                    <img src={logoutIcon} className="header__logout-icon" alt="logout" />
                    </>
                ) : (
                    <nav className="header__signin-bar">
                    <button type="button" className="header__signin-link" onClick={onLoginModal}>
                        Sign in
                    </button>
                    </nav>
                )}
            </div>
        </header>
    )
};

export default Header;