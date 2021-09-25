import { useState } from "react";

import "./Input.css";

const Input = ({
  labelName,
  inputName,
  type,
  onChange,
  value,
  errors,
  formDisabled,
  minLength,
  placeholder,
}) => {
  const [focus, setFocus] = useState(false);
  const handleFocus = (e) => {
    setFocus(true);
  };
  const handleBlur = (e) => {
    setFocus(false);
  };

  return (
    <div className="input">
      <label className="input__label">
        {labelName}
      </label>
      <input
        type={type}
        name={inputName}
        id={inputName}
        className="input__field input__field_border"
        onChange={onChange}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={formDisabled}
        minLength={minLength}
        placeholder={placeholder}
        required
      />
      <p className="input__error">{errors}</p>
    </div>
  );
};

export default Input;
