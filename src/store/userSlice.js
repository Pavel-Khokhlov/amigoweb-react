import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    currentUser: {},
  },
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
      state.status = true;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

export default userSlice.reducer;
