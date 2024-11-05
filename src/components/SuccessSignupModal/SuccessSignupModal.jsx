import "../Modal/modal.css";
import Modal from "../Modal/Modal";

const SuccessSignupModal = ({
  isOpen,
  handleCloseModal,
  handleOpenSigninModal,
}) => {
  if (!isOpen) return null;

  return (
    <Modal onClose={handleCloseModal} isOpen={isOpen}>
      <div className="modal__successSignup-container">
        <h1 className="modal__successSignup-title">
          Registration successfully completed!
        </h1>
        <button
          type="button"
          className="modal__signin-button"
          onClick={handleOpenSigninModal}
        >
          Sign in
        </button>
      </div>
    </Modal>
  );
};

export default SuccessSignupModal;
