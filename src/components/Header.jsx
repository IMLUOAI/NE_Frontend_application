import "../blocks/header.css";
import { Link } from "react-router-dom";
import logoutIcon from "../images/Union.png";
import headerLogo from "../images/NewsExplorer.png";


const Header = ({ username= "", isAuthorized, handleProfileClick, onLoginModal}) => {
    return (
        <header className="header">
               <div className="header__bar">
               <img src={headerLogo}className="header__logo" alt="logo" />
                <a href="/" className="header__home-page">Home</a>
               </div>
            <div className="header__signin-bar">
                {isAuthorized ? (
                   < >
                     <a href="/" className="header__savedarticle-page">Saved articles</a>
                    <div className="header__user-bar">
                    <Link to="/profile" className="header__link" onClick={handleProfileClick}>
                        <h3 className="header__username">{username}</h3>
                    </Link>
                    <img src={logoutIcon} className="header__logout-icon" alt="logout" />
                    </div>
                    </ >
                ) : (
                    <button type="button" className="header__signin-button" onClick={onLoginModal}>
                        Sign in
                    </button>
                )}
            </div>
        </header>
    )
};

export default Header;