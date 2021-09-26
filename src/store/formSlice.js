import { createSlice } from "@reduxjs/toolkit";
import { REG_EMAIL, REG_MANE, REG_PHONE } from "../utils/config";

const formSlice = createSlice({
  name: "form",
  initialState: {
    currentLanguage: "Язык",
    languageList: ["Русский", "Английский", "Китайский", "Испанский"],
    isLanguageListOpen: false,
    values: { name: "", email: "", phone: "" },
    errors: { name: false, email: false, phone: false },
    selectLang: false,
    checkboxReg: false,
    isFormValid: false,
  },
  reducers: {
    handleValuesChange(state, action) {
      state.values = {
        ...state.values,
        [action.payload.name]: action.payload.value,
      };
    },
    validateMessage(state, action) {
      if (action.payload === `name`) {
        if (state.values.name.length === 0) {
          state.errors = {
            ...state.errors,
            [action.payload]: "Необходимо ввести имя",
          };
          return;
        }
        if (!REG_MANE.test(state.values.name)) {
          state.errors = {
            ...state.errors,
            [action.payload]: "Имя должно содержать буквы, тире или пробел",
          };
          return;
        }
        state.errors = { ...state.errors, [action.payload]: true };
        return;
      }
      if (action.payload === `email`) {
        if (state.values.email.length === 0) {
          state.errors = {
            ...state.errors,
            [action.payload]: "Необходимо ввести E-mail",
          };
          return;
        }
        if (!REG_EMAIL.test(state.values.email)) {
          state.errors = {
            ...state.errors,
            [action.payload]: "Введите корректный E-mail!",
          };
          return;
        }
        state.errors = { ...state.errors, [action.payload]: true };
        return;
      }
      if (action.payload === "phone") {
        if (state.values.phone.length === 0) {
          state.errors = {
            ...state.errors,
            [action.payload]: "Необходимо ввести номер телефона",
          };
          return;
        }
        if (!REG_PHONE.test(state.values.phone)) {
          state.errors = {
            ...state.errors,
            [action.payload]: "Номер может содержать только цифры, - / + / () и пробелы",
          };
          return;
        }
        if (state.values.phone.length < 10) {
          state.errors = {
            ...state.errors,
            [action.payload]: "Номер должен содержать больше 10 цифр",
          };
          return;
        }
        state.errors = { ...state.errors, [action.payload]: true };
        return;
      }
    },
    toggleLanguageListOpen(state, action) {
      state.isLanguageListOpen = !state.isLanguageListOpen;
    },
    setCurrentLanguage(state, action) {
      state.currentLanguage = action.payload;
      state.selectLang = true;
    },
    toggleCheckboxReg(state, action) {
      state.checkboxReg = !state.checkboxReg;
    },
    validateForm(state) {
      state.isFormValid =
        state.errors.name === true &&
        state.errors.email === true &&
        state.errors.phone === true &&
        state.selectLang === true &&
        state.checkboxReg === true
          ? true
          : false;
    },
    resetForm(state) {
      state.isFormValid = false;
      state.values = { name: "", email: "", phone: "" };
      state.errors = { name: false, email: false, phone: false };
      state.currentLanguage = "Язык";
      state.selectLang = false;
      state.checkboxReg = false;
    },
  },
});

export const {
  handleValuesChange,
  toggleLanguageListOpen,
  setCurrentLanguage,
  toggleCheckboxReg,
  validateMessage,
  validateForm,
  resetForm,
} = formSlice.actions;

export default formSlice.reducer;
