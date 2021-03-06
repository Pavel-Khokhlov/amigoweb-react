import { useDispatch, useSelector } from "react-redux";

import Input from "../Input/Input";
import Button from "../Button/Button";

import "./FormRedux.css";
import { NavLink } from "react-router-dom";
import { handleValuesChange, resetForm, validateForm, validateMessage } from "../../store/formSlice.js";
import CustomSelect from "../CustomSelect/CustomSelect";
import { handlePopup } from "../../store/appSlice";
import { setCurrentUser } from "../../store/userSlice";
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";

const FormRedux = () => {
  const dispatch = useDispatch();
  const { values, currentLanguage, errors, isFormValid } = useSelector((state) => state.form);

  const submitButtonClassName = `button__submit ${
    isFormValid ? "button__submit_valid" : "button__submit_invalid"
  }`;

  const handleChange = (e) => {
    dispatch(
      handleValuesChange({ name: e.target.name, value: e.target.value })
    );
    dispatch(validateMessage(e.target.name));
    dispatch(validateForm());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      setCurrentUser({
        phone: values.phone,
        name: values.name,
        email: values.email,
        language: currentLanguage,
      })
    );
    dispatch(resetForm());
    dispatch(handlePopup(true));
  };

  return (
    <section className="form">
      <div className="form__container">
        <h2 className="form__title">Регистрация</h2>
        <div className="form__text form__text_redirect">
          <p className="form__paragraph">Уже есть аккаунт?</p>
          <NavLink to={"/signin"} className="button button__word">
            Войти
          </NavLink>
        </div>
        <form onSubmit={handleSubmit} className="form__body">
          <Input
            type="text"
            inputName="name"
            labelName="Имя"
            value={values.name || ""}
            onInput={handleChange}
            errors={errors.name}
            placeholder="Введите Ваше имя"
          />
          <Input
            type="email"
            inputName="email"
            labelName="Email"
            value={values.email || ""}
            onInput={handleChange}
            errors={errors.email}
            placeholder="Введите ваш email"
          />
          <Input
            type="tel"
            inputName="phone"
            labelName="Номер телефона"
            value={values.phone || ""}
            onInput={handleChange}
            errors={errors.phone}
            placeholder="Введите номер телефона"
          />
          <CustomSelect labelName="Язык" />
          <CustomCheckbox />
          <Button
            type="button"
            className={submitButtonClassName}
            onClick={handleSubmit}
          >
            Зарегистрироваться
          </Button>
        </form>
      </div>
    </section>
  );
};

export default FormRedux;
