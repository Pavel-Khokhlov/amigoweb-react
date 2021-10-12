import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import { handlePopup } from "../../store/appSlice";

import "./Popup.css";

const Popup = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { isPopupOpen } = useSelector((state) => state.app);

  const handleClosePopup = () => {
    dispatch(handlePopup(false));
  };

  const popupClassName = `popup ${
    isPopupOpen ? "popup_opened" : "popup_closed"
  }`;

  const popupContainerClassName = `popup__container ${
    isPopupOpen ? "popup__container_opened" : "popup__container_closed"
  }`;

  return (
    <section className={popupClassName} onClick={handleClosePopup}>
      <div
        className={popupContainerClassName}
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          type="button"
          className="button button__close-popup"
          onClick={handleClosePopup}
        />
        <h2>Current User</h2>
        <p>{currentUser.name}</p>
        <p>{currentUser.email}</p>
        <p>{currentUser.phone}</p>
        <p>{currentUser.language}</p>
      </div>
    </section>
  );
};

export default Popup;
