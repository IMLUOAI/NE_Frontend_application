import { Link } from "react-router-dom";
import "../Navigation/nav.css";
import logoutIcon from "../../images/Union.svg";

const Navigation = ({
  isLoggedIn,
  isMenuOpen,
  userName,
  onLogout,
  onSigninModal,
}) => {
  return (
    <nav className="nav__section">
      {!isMenuOpen && (
        <a href="/" className="nav__link-home">
          Home
        </a>
      )}
      {isLoggedIn ? (
        <>
          <Link to="/saved-articles" className="nav__link-savedArticles">
            Saved Articles
          </Link>
          <div className="nav__user-bar">
            <h3 className="nav__username">{userName}</h3>
            <button
              type="button"
              onClick={onLogout}
              className="nav__logout-button"
            >
              <img src={logoutIcon} className="nav__logout-icon" alt="logout" />
            </button>
          </div>
        </>
      ) : (
        <div className="nav__signin-bar">
          <button
            type="button"
            className="nav__signin-button"
            onClick={onSigninModal}
          >
            Sign in
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
