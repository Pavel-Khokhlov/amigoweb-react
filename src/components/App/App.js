import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handlePopup } from "../../store/appSlice";
import { ESC_CODE } from "../../utils/config";
import FormRedux from "../FormRedux/FormRedux";
import Popup from "../Popup/Popup";

function App() {
  const dispatch = useDispatch();
  const { isPopupOpen } = useSelector((state) => state.app);
   // CLOSE POPUP BY ESC
   const handleEsc = (e) => {
    if (e.keyCode === ESC_CODE) {
      dispatch(handlePopup(false));
    }
  };

  isPopupOpen
    ? window.addEventListener("keydown", handleEsc)
    : window.removeEventListener("keydown", handleEsc);

  return (
    <div className="App">
      <FormRedux />
      <Popup />
    </div>
  );
}

export default App;
