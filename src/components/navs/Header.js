import React from "react";
import { BellOutlined } from '@ant-design/icons';
function Header(props) {
  const border = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "4rem",
    border: "1px solid rgb(51, 68, 84)",
    padding: "0 1rem",
  };

  const heading = {
    flex: "1",
    textAlign: "center",
  };

  const notification = {
    flex: "0",
  };

  return (
    <div style={border}>
      <h2 style={heading}>{props.title}</h2>
      <div style={notification}><BellOutlined /></div>
    </div>
  );
}

export default Header;
