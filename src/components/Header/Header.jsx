import "../Header/header.css";
import Navigation from "..//Navigation/Navigation";
import { useState } from "react";
import menuIcon from "../../images/menu.svg";
import closeButton from "../../images/close.svg";
import MobileMenuModal from "../MobileMenuModal/MobileMenuModal";

const Header = ({ userName = "", isAuthorized, onLogout, onSigninModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <header className="header">
      <div className="header__bar">
        <h1 className={`header__logo ${isMenuOpen ? "hidden" : ""}`}>
          NewsExplorer
        </h1>
        <button
          className={`header__menu-button ${isMenuOpen ? "hidden" : ""}`}
          type="button"
          onClick={toggleMenu}
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
        {isMenuOpen && (
          <MobileMenuModal
            isOpen={isMenuOpen}
            handleCloseModal={closeMenu}
            handleOpenSigninModal={onSigninModal}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
