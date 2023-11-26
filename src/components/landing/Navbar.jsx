import React, { useState } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import AuthModal from "../modal/AuthModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const signupHandler = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const onCancel = () => {
    setIsOpen(false);
  };
  return (
    <Menu id="navmenu" mode="horizontal" style={{ height: "10vh" }}>
      <Menu.Item key="heading">
        <h2>DigiSchool</h2>
      </Menu.Item>
      <div id="authdiv"
        style={{ marginTop: "auto", marginBottom: "auto", marginLeft: "auto" }}
      >
        {isOpen === true ? (
          <AuthModal
            open={isOpen}
            onCancel={onCancel}
          />
        ) : null}
        <Menu.Item key="signup">
          <Link onClick={signupHandler}>Signup/Login</Link>
        </Menu.Item>
      </div>
    </Menu>
  );
};

export default Navbar;
