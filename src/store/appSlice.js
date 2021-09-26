import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    currentUser: {},
    isPopupOpen: false,
    status: null,
    errors: null,
  },
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
      state.status = true;
    },
    handlePopup(state, action) {
      state.isPopupOpen = action.payload;
    },
  },
});

export const {
  setCurrentUser,
  handlePopup,
} = appSlice.actions;

export default appSlice.reducer;
