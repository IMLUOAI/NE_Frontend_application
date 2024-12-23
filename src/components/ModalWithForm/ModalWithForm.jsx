import Modal from "../Modal/Modal";
import "../Modal/modal.css";

const ModalWithForm = ({
  name,
  title,
  children,
  isOpen,
  onClose,
  onSubmit,
}) => {
  if (!isOpen) {
    return null;
  }
  return (
    <Modal name={name} onClose={onClose}>
      <h1 className="modal__title">{title}</h1>
      <form className="modal__form" onSubmit={onSubmit}>
        {children}
      </form>
    </Modal>
  );
};

export default ModalWithForm;
