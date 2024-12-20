import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useForm from "../../hooks/useForm";
import "../Modal/modal.css";

const SignUpModal = ({
  isOpen,
  isLoading,
  handleSignup,
  handleCloseModal,
  handleOpenSigninModal,
  handleOpenSuccessSignupModal,
}) => {
  const { values, handleChange, errors, isFormValid } = useForm({
    email: "",
    password: "",
    username: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup({
      email: values.email,
      password: values.password,
      username: values.username,
    })
      .then(() => {
        handleOpenSuccessSignupModal();
      })
      .catch((err) => {
        console.log("Signup failed:", err);
      });
  };

  return (
    <ModalWithForm
      title="Sign up"
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
          placeholder="Enter email"
          minLength="8"
          maxLength="40"
          aria-invalid={!!errors.email}
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
          placeholder="enter password"
          minLength="8"
          maxLength="40"
          aria-invalid={!!errors.password}
        />
        {errors.password && (
          <span className="modal__error">{errors.password}</span>
        )}
      </label>
      <label className="modal__label">
        Username{" "}
        <input
          id="username"
          required
          name="username"
          type="username"
          value={values.username}
          onChange={handleChange}
          className="modal__input"
          placeholder="enter your username"
          minLength="2"
          maxLength="40"
          aria-invalid={!!errors.username}
        />
        {errors.username && (
          <span className="modal__error">{errors.username}</span>
        )}
      </label>
      <div className="modal__submit-container">
        <button
          type="submit"
          className={`modal__submit-button ${
            isFormValid
              ? "modal__submit-button_enabled"
              : "modal__submit-button_disabled"
          } `}
          disabled={!isFormValid}
        >
          {isLoading ? "Sign up..." : "Sign up"}
        </button>
        <button
          type="button"
          className="modal__option-button"
          onClick={handleOpenSigninModal}
        >
          <span className="modal__or-text">or</span>
          <span className="modal__span-text">Sign in</span>
        </button>
      </div>
    </ModalWithForm>
  );
};

export default SignUpModal;
