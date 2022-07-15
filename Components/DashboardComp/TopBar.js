import { FiMenu } from "react-icons/fi";
import { BiChevronDown } from "react-icons/bi";
import { GrNotification, GrClose } from "react-icons/gr";
import styles from "../../styles/Dashboard.module.css";
import { Button } from "@mui/material";
import { useState } from "react";
import { useStateContext } from "../../contexts/contextProvider";

export default function TopBar() {
  const [userPanel, setUserPanel] = useState(false);
  const [notifyPanel, setNotifyPanel] = useState(false);

  const { setSidebarIsOpened } = useStateContext();

  return (
    <div
      className="d-flex justify-content-between align-items-center py-2 px-4"
      style={{ " zIndex": "99999" }}
    >
      <div>
        <button
          className={`my-2 px-2 mx-2 h5  ${styles.buttonEffects}`}
          onClick={() => {
            setSidebarIsOpened(true);
          }}
        >
          <FiMenu />
        </button>
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <div className="position-relative">
          <button
            className={`position-relative my-2 px-2 mx-2 h5  ${styles.buttonEffects}`}
            onClick={() => {
              setUserPanel(false);
              setNotifyPanel(true);
            }}
          >
            <GrNotification />
            <span
              className={`position-absolute ${styles.notificationSpan}`}
            ></span>
          </button>
          {notifyPanel && <NotifiPanel setNotifyPanel={setNotifyPanel} />}
        </div>

        <div className="position-relative">
          <button
            className={`my-2 px-2 mx-2  ${styles.buttonEffects}`}
            onClick={() => {
              setNotifyPanel(false);
              setUserPanel(true);
            }}
          >
            <span className="fw-bold">Hi, </span>User <BiChevronDown />
          </button>
          {userPanel && <UserProfilePanel setUserPanel={setUserPanel} />}
        </div>
      </div>
    </div>
  );
}

const NotifiPanel = ({ setNotifyPanel }) => {
  return (
    <div className={`${styles.dropDownBox} position-absolute`}>
      <div
        className="d-flex justify-content-between align-items-center w-100"
        style={{ width: "200px" }}
      >
        <p className="fw-bold my-2">Notifications</p>
        <button
          className={`my-2 px-2 mx-2  ${styles.buttonEffects}`}
          onClick={() => {
            setNotifyPanel(false);
          }}
        >
          <GrClose />
        </button>
      </div>

      <div className="d-flex justify-content-center align-items-center flex-column">
        <p className="fw-bold my-1 mx-2 w-100">Name</p>
        <p className="fw-light my-1 mx-2 w-100">Message</p>
        <p
          className="fw-lighter lh-sm my-1 mx-2 align-self-end"
          style={{ color: "#E71B1E" }}
        >
          13:02 PM
        </p>
      </div>
    </div>
  );
};

export const UserProfilePanel = ({ setUserPanel }) => {
  return (
    <div className={`position-absolute ${styles.dropDownBox}`}>
      <div className="d-flex justify-content-between align-items-center w-100">
        <p className="fw-bold my-2">User Profile</p>
        <button
          className={`my-2 px-2 mx-2  ${styles.buttonEffects}`}
          onClick={() => {
            setUserPanel(false);
          }}
        >
          <GrClose />
        </button>
      </div>
      <div>
        <p className="my-2 h5">Name</p>
        <p className="my-1 fw-light" style={{ color: "#E71B1E" }}>
          email@info.com
        </p>
      </div>
      <div>
        <Button variant="contained" className={`materialUiButton my-4 w-100`}>
          Log Out
        </Button>
      </div>
    </div>
  );
};
