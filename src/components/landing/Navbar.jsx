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
        <h2>DigiSchool</h2>
      <div id="authdiv"
        style={{ marginTop: "auto", marginBottom: "auto", marginLeft: "auto" }}
      >
        {isOpen === true ? (
          <AuthModal
            open={isOpen}
            onCancel={onCancel}
          />
        ) : null}
          <Link style={{color: "black", paddingRight: "1rem"}} onClick={signupHandler}>Signup/Login</Link>
      </div>
    </Menu>
  );
};

export default Navbar;
