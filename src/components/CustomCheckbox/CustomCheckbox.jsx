import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";
import { toggleCheckboxReg, validateForm } from "../../store/formSlice";

const CustomCheckbox = () => {
  const dispatch = useDispatch();
  const { checkboxReg } = useSelector((state) => state.form);

  function handleClickCheckbox(e) {
    dispatch(toggleCheckboxReg());
    dispatch(validateForm());
  }

  const checkboxClassName = `button__checkbox ${
    checkboxReg ? "button__checkbox_active" : ""
  }`;

  return (
    <div className="form__text form__text_checkbox">
      <Button
        type="button"
        className={checkboxClassName}
        onClick={handleClickCheckbox}
      />
      <p className="form__paragraph">принимаю</p>
      <NavLink to={"/conditions"} className="button button__word">
        условия
      </NavLink>
      <p className="form__paragraph">использования</p>
    </div>
  );
};

export default CustomCheckbox;
