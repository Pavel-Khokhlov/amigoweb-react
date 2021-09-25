import { useDispatch, useSelector } from "react-redux";
import { useFormWithValidation } from "../Hooks/useForm.jsx";

import Input from "../Input/Input";
import Button from "../Button/Button";

import "./Form.css";
import { NavLink } from "react-router-dom";
import CustomSelect from "../CustomSelect/CustomSelect.jsx";
import { clearForm, setCurrentUser, toggleCheckboxReg } from "../../store/appSlice.js";
import { PATTERN_EMAIL, PATTERN_PHONE } from "../../utils/config.js";

const Form = () => {
  const dispatch = useDispatch();
  const { values, errors, isValid, handleChange, resetForm } =
    useFormWithValidation();
  const { currentLanguage, checkboxReg } = useSelector((state) => state.app);

  function handleClickCheckbox(e) {
    dispatch(toggleCheckboxReg());
  }

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
    resetForm();
    dispatch(clearForm());
  };

  const checkboxClassName = `form__checkbox ${
    checkboxReg ? "checkbox_active" : ""
  }`;

  const submitButtonClassName = `button__submit ${
    isValid && checkboxReg && currentLanguage !== "Язык"
      ? "button__submit_valid"
      : "button__submit_invalid"
  }`;

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
        <form onSubmit={handleSubmit} className="form__body" noValidate>
          <Input
            type="text"
            inputName="name"
            labelName="Имя"
            value={values.name || ""}
            onChange={handleChange}
            errors={errors.name}
            placeholder="Введите Ваше имя"
            minLength='2'
          />
          <Input
            type="email"
            inputName="email"
            labelName="Email"
            value={values.email || ""}
            onChange={handleChange}
            errors={errors.email}
            pattern={PATTERN_EMAIL}
            placeholder="Введите ваш email"
          />
          <Input
            type="text"
            inputName="phone"
            labelName="Номер телефона"
            value={values.phone || ""}
            onChange={handleChange}
            errors={errors.phone}
            pattern={PATTERN_PHONE}
            placeholder="Введите номер телефона"
            minLength='10'
          />
          <CustomSelect labelName="Язык" />
          <div className="form__text form__text_checkbox">
            <div className={checkboxClassName} onClick={handleClickCheckbox}>
              <input type="checkbox" name="checkbox" defaultChecked={checkboxReg} />
            </div>
            <p className="form__paragraph">принимаю</p>
            <NavLink to={"/signin"} className="button button__word">
              условия
            </NavLink>
            <p className="form__paragraph">использования</p>
          </div>
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

export default Form;
