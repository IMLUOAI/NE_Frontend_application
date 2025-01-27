import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import closeButton from "../../images/close.svg";
import "../MobileMenuModal/mobileMenuModal.css";
import "../Navigation/nav.css";
const MobileMenuModal = ({
  isOpen,
  onClose,
  isMenuOpen,
  handleOpenSigninModal,
}) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 425 && isOpen) {
        onClose();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen, onClose]);
  if (!isOpen) return null;

  return (
    <div className="mobile">
      <div className="mobile__content">
        <div className="mobile__header">
          <h1 className="mobile__logo">NewsExplorer</h1>
          <button
            className="mobile__close-button"
            type="button"
            onClick={onClose}
          >
            <img
              src={closeButton}
              alt="close-icon"
              className="mobile__close-button-icon"
            />
          </button>
        </div>
        <nav className="mobile__nav">
          <Link to="/" className="nav__link mobile__nav-link_home">
            Home
          </Link>
          <Link
            to="/saved-articles"
            className={`nav__link mobile__nav-link_saved-article ${
              isMenuOpen ? "nav__link_visible" : ""
            }`}
          >
            Saved Articles
          </Link>
          <button
            type="button"
            className="mobile__nav-signin-button"
            onClick={() => {
              handleOpenSigninModal();
              onClose();
            }}
          >
            Sign in
          </button>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenuModal;
