// Navbar.js
import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const Navbar = () => {
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
      <Menu.Item key="login">
        <Link to="/login">Login</Link>
      </Menu.Item>
      <Menu.Item key="signup" style={{marginLeft: "0.5rem"}}>
        <Link to="/signup">Signup</Link>
      </Menu.Item>
      </div>
    </Menu>
  );
};

export default Navbar;
