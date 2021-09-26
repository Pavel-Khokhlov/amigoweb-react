import "./Input.css";

const Input = ({
  labelName,
  inputName,
  type,
  onInput,
  value,
  errors,
  placeholder,
}) => {
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
        onInput={onInput}
        value={value}
        placeholder={placeholder}
      />
      <p className="input__error">{errors}</p>
    </div>
  );
};

export default Input;
