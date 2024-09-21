import { Children } from "react"
import Modal from "./Modal";

 const ModalWithForm = ({
    name, title, Children, isOpen, onClose, onSubmit
}) => {

    if (!isOpen) {
        return null;
    }
    return(
       <Modal name={name} onClose={onClose}>
        <h2 className="modal__title">{title}</h2>
        <form className="modal__form" onSubmit={onSubmit}>{Children}</form>
        </Modal>
    )
}

export default ModalWithForm;