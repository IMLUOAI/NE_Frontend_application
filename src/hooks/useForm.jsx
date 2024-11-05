import { useState, useEffect } from "react";
import {
  validateEmail,
  validatePassword,
  validateUserName,
} from "../utils/validation";

export default function useForm(inputValues) {
  const [values, setValues] = useState(inputValues);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const validateField = (name, value) => {
    let error = null;
    switch (name) {
      case "email":
        if (!validateEmail(value)) {
          error = "Invalid email format";
        }
        break;
      case "password":
        if (!validatePassword(value)) {
          error = "Password must be at least 8 characters long";
        }
        break;
      case "username":
        if (!validateUserName(value)) {
          error = "Name must be at least 2 characters long";
        }

        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
    // Validation logic for email
    const error = validateField(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  useEffect(() => {
    const hasErrors = Object.values(errors).some((error) => error);
    const allFieldsFilled = Object.values(values).every(
      (val) => val.trim() !== ""
    );
    setIsFormValid(!hasErrors && allFieldsFilled);
  }, [errors, values]);

  return { values, handleChange, setValues, errors, isFormValid };
}
