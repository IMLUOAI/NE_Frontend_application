import "../Header/header.css";
import Navigation from "..//Navigation/Navigation";
import menuIcon from "../../images/menu.svg";
import { useEffect } from "react";
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
      className={`header ${isSavedArticles ? "header__saved-articles" : ""}`}
    >
      <div className="header__bar">
        <h1
          className={`header__logo ${isMenuOpen ? "header__logo_hidden" : ""}`}
        >
          NewsExplorer
        </h1>
        <button
          className={`header__menu-button ${
            isMenuOpen ? "header__menu-button_hidden" : ""
          }`}
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
          isSavedArticles={isSavedArticles}
        />
      </div>
    </header>
  );
};

export default Header;
