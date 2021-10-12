import { configureStore } from "@reduxjs/toolkit";
import appReduser from "./appSlice";
import formReduser from "./formSlice";
import userReduser from "./userSlice";

export default configureStore({
  reducer: {
    app: appReduser,
    form: formReduser,
    user: userReduser,
  },
});
