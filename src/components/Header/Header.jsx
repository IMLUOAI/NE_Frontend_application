import "../Header/header.css";
import Navigation from "..//Navigation/Navigation";
import menuIcon from "../../images/menu.svg";

const Header = ({
  userName = "",
  isMenuOpen,
  isAuthorized,
  onLogout,
  onSigninModal,
  handleOpenMobileMenuModal,
}) => {
  return (
    <header className="header">
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
