import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isPopupOpen: false,
    status: null,
    errors: null,
  },
  reducers: {
    handlePopup(state, action) {
      state.isPopupOpen = action.payload;
    },
  },
});

export const {
  handlePopup,
} = appSlice.actions;

export default appSlice.reducer;
