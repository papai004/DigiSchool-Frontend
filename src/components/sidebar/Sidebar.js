import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  UserAddOutlined,
  TeamOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import { Menu, Layout } from "antd";

const { Sider } = Layout;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Dashboard", "/", <DashboardOutlined />),
  getItem("Students", "/students", <TeamOutlined />),
  getItem("Admission", "/admission", <UserAddOutlined />),
];

function Sidebar() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState();

  useEffect(() => {
    if (selectedKeys !== location.pathname) setSelectedKeys(location.pathname);
  }, [location.pathname, selectedKeys]);

  const handleMenuChange = (newPath) => {
    console.log("New Path - ", newPath);
    setSelectedKeys(newPath);
    navigate(newPath);
  };

  const navigate = useNavigate();

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        onClick={(item) => {
          handleMenuChange(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={items}
      />
    </Sider>
  );
}

export default Sidebar;
