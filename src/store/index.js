import { configureStore } from "@reduxjs/toolkit";
import appReduser from "./appSlice";
import formReduser from "./formSlice";

export default configureStore({
  reducer: {
    app: appReduser,
    form: formReduser,
  },
});
