import "../blocks/header.css";
import Navigation from "./Navigation";

const Header = ({
  userName = "",
  isAuthorized,
  onLogout,
  onSigninModal
}) => {
  return (
    <header className="header">
      <div className="header__bar">
        <h1 className="header__logo" alt="logo">
          NewsExplorer
        </h1>
       <Navigation
       isLoggedIn={isAuthorized}
       userName={userName}
       onLogout={onLogout}
       onSigninModal={onSigninModal}
       />
      </div>
    </header>
  );
};

export default Header;
