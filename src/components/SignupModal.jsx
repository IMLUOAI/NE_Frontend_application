import  ModalWithForm  from "./ModalWithForm"
import useForm from "../hooks/useForm";
import "../blocks/modal.css";

 const SignUpModal = ({
    isOpen,
    isLoading,
    handleCloseModal,
    handleSignUp,
    handleOpenSigninModal
}) => {

    const { values, handleChange, errors } = useForm({
       email: "",
       password: "",
       username: ""
    })

     const handleSubmit = (e) => {
        e.preventDefault();
        handleSignUp({
            email: values.email,
            password: values.password,
            username: values.username
        })
     }


    return (
        <ModalWithForm title="Sign up" onClose={handleCloseModal} isOpen={isOpen} onSubmit={handleSubmit}>
          <label className="modal__label">
            Email <input id="email" required name="email" type="email" value={values.email} onChange={handleChange} className="modal__input" placeholder="Enter email" minLength="8" maxLength="40" />
          {errors.email && <span className="modal__error">{errors.email}</span>}
          </label>
          <label className="modal__label">
          Passsword <input id="password" required name="password" type="password" value={values.password} onChange={handleChange} className="modal__input" placeholder="enter password" minLength="8" maxLength="40" />
          {errors.password && <span className="modal__error">{errors.password}</span>}
          </label>
          <label className="modal__label">
            Username <input id="username" required name="username" type="username" value={values.username} onChange={handleChange} className="modal__input" placeholder="Enter your username" minLength="8" maxLength="40" />
          {errors.username && <span className="modal__error">{errors.username}</span>}
          </label>
          <div className="modal__submit-container">
            <button type="submit" className="modal__submit-button">
                {isLoading ? "Sign up..." : "Sign up"}
            </button>
            <button type="button" className="modal__option-button" onClick={handleOpenSigninModal}>
                or Sign in
            </button>
          </div>

        </ModalWithForm>
    )
}

export default SignUpModal;