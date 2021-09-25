import { useState, useCallback } from "react";
import { useSelector } from "react-redux";

import { REG_EMAIL, REG_PHONE } from "../../utils/config";

export function useForm() {
  const [values, setValues] = useState({});

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setValues({ ...values, [name]: value });
  };
  return { values, handleChange, setValues };
}

export function useFormWithValidation() {
  const { currentUser } = useSelector(
    (state) => state.app
  );
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const validateMessage = (target) => {
    if (target.name === "name") {
      if (target.value.length === 0) {
        return "Необходимо ввести имя";
      }
      if (target.value.length < 2) {
        return "Имя должено быть больше 2 символов";
      }
      return "";
    }
    if (target.name === "email") {
      if (target.value.length === 0) {
        return "Необходимо ввести E-mail!";
      }
      if (!REG_EMAIL.test(target.value)) {
        return "Введите корректный E-mail!";
      }
      return "";
    }
    if (target.name === "phone") {
      if (target.value.length === 0) {
        return "Необходимо ввести номер телефона";
      }
      if (!REG_PHONE.test(target.value)) {
        return "Необходимо ввести цифры";
      }
      if (target.value.length < 10) {
        return "Номер телефона должен иметь мин 10 цифр";
      }
      return "";
    }
  };

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: validateMessage(target) });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  const resetFormCurrentUser = useCallback(
    (
      newValues = currentUser,
      newErrors = {},
      newIsValid = false
    ) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid, currentUser]
  );

  return {
    values,
    errors,
    isValid,
    handleChange,
    setValues,
    resetFormCurrentUser,
    resetForm,
  };
}
