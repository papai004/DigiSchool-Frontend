import React from "react";
import { Modal, Tabs } from "antd";
import Login from "../Login";
import Signup from "../Signup";

const items = [
  {
    key: "1",
    label: "SignUp",
    children: <Signup />,
  },
  {
    key: "2",
    label: "Login",
    children: <Login />,
  },
];

const AuthModal = ({ open, onCancel, loginValue }) => {
  const onChange = (key) => {
    console.log(key);
  };

  let defaultKey;
  loginValue === "login" ? (defaultKey = "2") : (defaultKey = "1");

  return (
    <Modal open={open} onCancel={onCancel} footer={null}>
      <Tabs defaultActiveKey={defaultKey} items={items} onChange={onChange} />
    </Modal>
  );
};

export default AuthModal;
