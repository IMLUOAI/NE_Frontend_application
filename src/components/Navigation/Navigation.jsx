import { Link } from "react-router-dom";
import "../Navigation/nav.css";
import logoutIcon from "../../images/Union.svg";

const Navigation = ({
  isLoggedIn,
  isMenuOpen,
  setIsMenuOpen,
  userName,
  onLogout,
  onSigninModal,
  isSavedArticles,
}) => {
  const onMenuClick = () => {setIsMenuOpen(!isMenuOpen);};
  return (
    <nav className={`nav ${isSavedArticles ? "nav_theme_black" : ""}`}>
       <div cladssName="hamburger" onClick={onMenuClick}>
        <div></div>
        <div></div>
        <div></div>
      </div> 
       <div className={`nav__links ${isMenuOpen ? "nav__links_active" : ""}`} > 
        <Link to="/" className="nav__link nav__link_home">
          Home
        </Link>
      {isLoggedIn ? (
        <>
          <Link
            to="/saved-articles"
            className={`nav__link nav__link_saved-article ${
              isMenuOpen ? "nav__link_visible" : ""
            }`}
          >
            Saved Articles
          </Link>
          <div className="nav__user-bar">
            <span className="nav__user-name">{userName}</span>
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
      </div>
    </nav>
  );
};

export default Navigation;
