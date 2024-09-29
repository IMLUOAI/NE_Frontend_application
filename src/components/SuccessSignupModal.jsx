import "../blocks/modal.css";
import Modal from "./Modal";


const SuccessSignupModal = ({ isOpen, handleCloseModal, handleSignin }) => {
  if (!isOpen) return null;

  return (
    <Modal name="successSignup" onClose={handleCloseModal}>
      <div className="modal__successSignup-container"> 
        <h3 className="modal__successSignup-title">
          Registration successfully completed!
        </h3>
        <button
          type="button"
          className="modal__option-button"
          onClick={handleSignin}
        >
          <h3 className="modal__signin-text">Sign in</h3>
        </button>
      </div>
    </Modal>
  );
};

export default SuccessSignupModal;
