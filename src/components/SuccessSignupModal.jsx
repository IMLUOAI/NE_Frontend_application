import "../blocks/modal.css";

const SuccessSignupModal = ({ isOpen, handleCloseModal, handleSignin }) => {
  if (!isOpen) return null;
  return (
    <div className={`modal modal_type_${SuccessSignup}`}>
      <div className="modal__successSignup-container">
        <button
          className="modal__close-button"
          type="button"
          onClick={handleCloseModal}
        ></button>
        <h3 className="modal__successSignup-title">
          Registration successfully completed!
        </h3>
        <button
          type="button"
          className="modal__option-button"
          onClick={handleSignin}
        >
          <span className="modal__signin-text">Sign in</span>
        </button>
      </div>
    </div>
  );
};

export default SuccessSignupModal;
