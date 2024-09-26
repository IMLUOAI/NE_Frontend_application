import ModalWithForm from "./ModalWithForm";
import useForm from "../hooks/useForm";
import "../blocks/modal.css";

const SigninModal = ({
  isOpen,
  isLoading,
  handleCloseModal,
  handleSignin,
  handleOpenSignupModal,
}) => {
  console.log("is modal open:", isOpen);
  if (!isOpen) return null;

  const { values, handleChange, errors } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignin({
      email: values.email,
      password: values.password,
    });
  };

  return (
    <ModalWithForm
      title="Sign in"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Email{" "}
        <input
          id="email"
          required
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          className="modal__input"
          placeholder="Email"
          minLength="8"
          maxLength="40"
        />
        {errors.email && <span className="modal__error">{errors.email}</span>}
      </label>
      <label className="modal__label">
        Passsword{" "}
        <input
          id="password"
          required
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          className="modal__input"
          placeholder="Passwword"
          minLength="8"
          maxLength="40"
        />
        {errors.password && (
          <span className="modal__error">{errors.password}</span>
        )}
      </label>
      <div className="modal__submit-container">
        <button
          type="submit"
          className={`"modal__submit-button" ${isFormValid ? "active" : ""}`}
        >
          {isLoading ? "Sign in..." : "Sign in"}
        </button>
        <button
          type="button"
          className="modal__option-button"
          onClick={handleOpenSignupModal}
        >
          <span className="modal__or-text">or</span>
          <span className="modal__signin-text">Sign in</span>
        </button>
      </div>
    </ModalWithForm>
  );
};

export default SigninModal;
