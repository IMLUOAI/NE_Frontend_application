import Modal from "./Modal";
import "../blocks/modal.css";

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
      <h2 className="modal__title">{title}</h2>
      <form className="modal__form" onSubmit={onSubmit}>
        {children}
      </form>
    </Modal>
  );
};

export default ModalWithForm;
