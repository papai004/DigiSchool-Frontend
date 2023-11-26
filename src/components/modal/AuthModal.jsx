import React, { useState } from "react";
import { Modal } from "antd";
import Signup from "../Signup";
import Login from "../Login";

const AuthModal = ({ open, onCancel }) => {
  const [modalValue, setModalValue] = useState("");

  const singnupHandler = (value) => {
    setModalValue(value);
  };

  const loginHandler = (value) => {
    setModalValue(value);
  };

  return (
    <Modal
      style={{ textAlign: "center" }}
      title={modalValue === "" || modalValue === "signup" ? "Please Sign Up" : "Welcome back, Please login"}
      open={open}
      onCancel={onCancel}
      footer={null}
    >
      {modalValue === "" || modalValue === "signup" ? (
        <Signup valueFromSignup={singnupHandler} />
      ) : (
        <Login valueFromLogin={loginHandler}/>
      )}
    </Modal>
  );
};

export default AuthModal;
