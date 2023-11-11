import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, Layout } from "antd";
import { MdManageAccounts } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import {
  DashboardOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import styles from "./sidebar.module.css";

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
  getItem("Dashboard", "/dashboard", <DashboardOutlined />),
  getItem("Manage Student", "/manage_student", <MdManageAccounts />),
  getItem("Manage Standard", "/manage_standard", <SiGoogleclassroom />),
];
const bottomItems = [
  getItem("Settings", "/settings", <SettingOutlined />),
  getItem("Logout", "/", <LogoutOutlined />),
];

function Sidebar() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState();

  useEffect(() => {
    if (selectedKeys !== location.pathname) setSelectedKeys(location.pathname);
  }, [location.pathname, selectedKeys]);

  const handleMenuChange = async (newPath) => {
    setSelectedKeys(newPath);
    navigate(newPath);
    if (newPath === "/") {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    }
  };

  const navigate = useNavigate();

  return (
    <Sider
      className={styles.sidebar}
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {}}
      onCollapse={(collapsed, type) => {}}
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
