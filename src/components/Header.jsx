import "../blocks/header.css";
import { Link } from "react-router-dom";
import logoutIcon from "../images/Union.png";

const Header = ({
  userName = "",
  isAuthorized,
  onSigninModal,
  onLogout,
}) => {
  return (
    <header className="header">
      <div className="header__bar">
        <h1 className="header__logo" alt="logo">
          NewsExplorer
        </h1>
        <a href="/" className="header__home-page">
          Home
        </a>
      </div>
      <div className="header__signin-bar">
        {isAuthorized ? (
          <>
            <a href="/" className="header__savedarticle-page">
              Saved articles
            </a>
            <div className="header__user-bar">
                <h3 className="header__username">{userName}</h3>
              <button
                type="button"
                onClick={onLogout}
                className="header__logout-button"
              >
                <img
                  src={logoutIcon}
                  className="header__logout-icon"
                  alt="logout"
                />
              </button>
            </div>
          </>
        ) : (
          <button
            type="button"
            className="header__signin-button"
            onClick={onSigninModal}
          >
            Sign in
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
