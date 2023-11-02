import React, { useState } from "react";
import { Drawer } from "antd";
import { BellOutlined } from "@ant-design/icons";

function Header(props) {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const border = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "4rem",
    borderBottom: "1px solid rgb(51, 68, 84)",
    padding: "0 1rem",
  };
  const heading = {
    flex: "1",
    textAlign: "center",
  };
  const notification = {
    flex: "0",
    fontSize: "20px",
  };

  return (
    <>
      <div style={border}>
        <h2 style={heading}>{props.title}</h2>
        <div style={notification} onClick={showDrawer}>
          <BellOutlined />
        </div>
      </div>
      <Drawer
        title="Notification"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <p>Some notifications...</p>
        <p>Some notifications...</p>
        <p>Some notifications...</p>
      </Drawer>
    </>
  );
}

export default Header;
