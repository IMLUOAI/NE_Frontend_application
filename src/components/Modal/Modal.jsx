import { useEffect } from "react";
import "../Modal/modal.css";
import closeButton from "../../images/close.svg";
const Modal = ({ name, onClose, children }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={`modal modal_type_${name}`} onClick={handleOverlayClick}>
      <div className="modal__content">
        <button className="modal__close-button" type="button" onClick={onClose}>
          <img
            src={closeButton}
            alt="close-icon"
            className="modal__close-icon"
          />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
