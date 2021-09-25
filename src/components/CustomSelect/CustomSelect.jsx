import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentLanguage, toggleLanguageListOpen } from "../../store/appSlice";
import "./CustomSelect.css";

function CustomSelect({ labelName }) {
  const dispatch = useDispatch();
  const { languageList, currentLanguage, isLanguageListOpen } = useSelector(
    (state) => state.app
  );

  const handleSelect = () => {
    dispatch(toggleLanguageListOpen());
  };

  const handleSelecetItem = (e) => {
    dispatch(setCurrentLanguage(e.target.innerText));
  };

  const selectListClassName = `select__list ${isLanguageListOpen ? "select__list_active" : ""}`;

  return (
    <div className="select input">
      <label className="input__label">{labelName}</label>
      <div className="select__header">
        <input
          className="select__input input__field input__field_border"
          onFocus={handleSelect}
          onBlur={handleSelect}
          value={currentLanguage}
          readOnly
        />
        <div className="select__icon"></div>
        <ul className={selectListClassName}>
          {languageList.map((item) => {
            return (
              <li
                key={item}
                className="select__item"
                onClick={handleSelecetItem}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default CustomSelect;
