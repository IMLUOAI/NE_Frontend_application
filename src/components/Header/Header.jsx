import "../Header/header.css";
import Navigation from "..//Navigation/Navigation";
import { useState } from "react";
import menuIcon from "../../images/menu.svg";
import crossIcon from "../../images/back.svg";

const Header = ({ userName = "", isAuthorized, onLogout, onSigninModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__bar">
        <h1 className="header__logo" alt="logo">
          NewsExplorer
        </h1>
        <button
          className="header__menu-button"
          type="button"
          onClick={toggleMenu}
        >
          <img src={menuIcon} className="header__menu-icon" alt="menu-icon" />
        </button>
        <Navigation
          isLoggedIn={isAuthorized}
          userName={userName}
          onLogout={onLogout}
          onSigninModal={onSigninModal}
          handleCloseMenu={toggleMenu}
        />
        {isMenuOpen && (
          <div className="header__mobile-menu" onClick={toggleMenu}>
            <button className="header__close-icon">
              <img src={crossIcon} alt="close" />
            </button>
            <a href="/">Home</a>
            <button onClick={onSigninModal}>Sign in</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
