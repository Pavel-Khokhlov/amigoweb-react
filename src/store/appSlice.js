import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    languageList: ["Русский", "Английский", "Китайский", "Испанский"],
    currentLanguage: "Язык",
    checkboxReg: false,
    currentUser: {},
    isLanguageListOpen: false,
    status: null,
    errors: null,
  },
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
      state.status = true;
    },
    toggleLanguageListOpen(state, action) {
      state.isLanguageListOpen = !state.isLanguageListOpen;
    },
    setCurrentLanguage(state, action) {
      state.currentLanguage = action.payload;
    },
    toggleCheckboxReg(state, action) {
      state.checkboxReg = !state.checkboxReg;
    },
    clearForm(state, action) {
      state.checkboxReg = false;
      state.currentLanguage = "Язык";
    },
  },
});

export const {
  setCurrentUser,
  toggleLanguageListOpen,
  setCurrentLanguage,
  toggleCheckboxReg,
  clearForm,
} = appSlice.actions;

export default appSlice.reducer;
