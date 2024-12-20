import React from "react";
import closeButton from "../../images/close.svg";
import "../MobileMenuModal/mobileMenuModal.css";

const MobileMenuModal = ({ isOpen, onClose, handleOpenSigninModal }) => {
  if (!isOpen) return null;

  return (
    <div className="mobile-menu">
      <div className="mobile__content">
        <div className="mobile-menu__header">
          <h1 className="mobile-menu__logo">NewsExplorer</h1>
          <button
            className="mobile-menu__close-button"
            type="button"
            onClick={onClose}
          >
            <img
              src={closeButton}
              alt="close-icon"
              className="mobile-menu__close-icon"
            />
          </button>
        </div>
        <nav className="mobile-menu__nav">
          <a href="/" className="mobile-menu__link">
            Home
          </a>
          <button
            type="button"
            className="mobile-menu__signin-button"
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
