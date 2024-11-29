import "../Header/header.css";
import Navigation from "..//Navigation/Navigation";
import menuIcon from "../../images/menu.svg";
import { useEffect } from "react";
import headerImage from "../../images/Image.jpg";
const Header = ({
  userName,
  isMenuOpen,
  isSavedArticles,
  isAuthorized,
  onLogout,
  onSigninModal,
  handleOpenMobileMenuModal,
}) => {
  return (
    <header
      style={{ backgroundImage: `url(${headerImage})` }}
      className={`header ${isSavedArticles ? "header__saved-articles" : ""}`}
    >
      <div className="header__bar">
        <h1 className={`header__logo ${isMenuOpen ? "hidden" : ""}`}>
          NewsExplorer
        </h1>
        <button
          className={`header__menu-button ${isMenuOpen ? "hidden" : ""}`}
          type="button"
          onClick={handleOpenMobileMenuModal}
        >
          <img src={menuIcon} className="header__menu-icon" alt="menu-icon" />
        </button>
        <Navigation
          isLoggedIn={isAuthorized}
          isMenuOpen={isMenuOpen}
          userName={userName}
          onLogout={onLogout}
          onSigninModal={onSigninModal}
        />
      </div>
    </header>
  );
};

export default Header;
