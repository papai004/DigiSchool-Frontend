import React, { useState } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import AuthModal from "../modal/AuthModal";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [loginValue, setLoginValue] = useState("");

  const signupHandler = (e) => {
    e.preventDefault();
    setIsOpen(true);
    setLoginValue("signup");
  }

  const loginHandler = (e) => {
    e.preventDefault();
    setIsOpen(true);
    setLoginValue("login");
  }

  const onCancel = () => {
    setIsOpen(false);
  }
  return (
    <Menu mode="horizontal" style={{ height: "10vh", zIndex: "1" }}>
      <Menu.Item key="name">
        <h2>DigiSchool</h2>
      </Menu.Item>
      <div style={{margin: "auto"}}>
      <Menu.Item key="about" style={{marginRight: ".5rem"}}>
        <Link to="/">About</Link>
      </Menu.Item>
      <Menu.Item key="contact">
        <Link to="/">Contact</Link>
      </Menu.Item>
      </div>
      <div style={{marginTop: "auto",marginBottom: "auto", marginLeft: "auto"}}>
      {isOpen === true ? <AuthModal open={isOpen} onCancel={onCancel} loginValue={loginValue} /> : null}
      <Menu.Item key="login">
        <Link onClick={loginHandler}>Login</Link>
      </Menu.Item>
      <Menu.Item key="signup" style={{marginLeft: "0.5rem"}}>
        <Link onClick={signupHandler}>Signup</Link>
      </Menu.Item>
      </div>
    </Menu>
  );
};

export default Navbar;
