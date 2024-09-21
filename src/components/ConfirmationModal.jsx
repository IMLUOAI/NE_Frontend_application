import "../blocks/ConfirmationModal.css"

const ConfirmationModal = ({ confirmation, onClose, hanldeOpenSigninModal}) => {

    return (
        <div className={`modal modal_type_${confirmation}`}>
        <div className="modal__confirmationModal-container">
            <button className="modal__close-button" type="button" onClick={onClose}></button>
            <h3 className="modal__confirmationModal-title">Registration successfully completed!</h3>
            <button type="button" className="modal__option-button" onClick={hanldeOpenSigninModal}>Sign in</button>
        </div>
        </div>
    )
}

export default ConfirmationModal;