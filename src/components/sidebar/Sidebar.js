import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./sidebar.module.css";
import { GrActions } from "react-icons/gr";
import { MdManageAccounts } from "react-icons/md";
import {
  UserAddOutlined,
  DashboardOutlined,
  SettingOutlined,
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
  getItem("Manage", "/manage", <MdManageAccounts />),
  getItem("Actions", "/actions", <GrActions className={styles.action__logo} />),
];
const bottomItems = [
  getItem("Settings", "/settings", <SettingOutlined />),
  getItem("Logout", "/logout", <UserAddOutlined />),
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
      className={styles.sidebar}
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className={styles.heading}>
        <h2>DigiSchool</h2>
      </div>
      <div className={styles.sidebar__items}>
    <React.Fragment>
      <Menu
        theme="dark"
        mode="inline"
        onClick={(item) => {
          handleMenuChange(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={items}
      />
    </React.Fragment>
    <div>
      <Menu
        style={{ marginBottom: "auto" }}
        theme="dark"
        mode="inline"
        onClick={(item) => {
          handleMenuChange(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={bottomItems} 
        selectable={false}
      />
      </div>
      </div>
    </Sider>
  );
}

export default Sidebar;
