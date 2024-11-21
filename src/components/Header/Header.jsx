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
  // useEffect(() => {
  //   const headerElement = document.querySelector(".header");
  //   if (isSavedArticles) {
  //     console.log("Adding saved articles class");
  //     headerElement.classList.add("header__saved-articles");
  //   } else {
  //     console.log("Removing saved articles class");
  //     headerElement.classList.remove("header__saved-articles");
  //   }
  //   return () => {
  //     headerElement.classList.remove("header__saved-articles");
  //   };
  // }, [isSavedArticles]);

  return (
    <header
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
