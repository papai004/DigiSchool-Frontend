import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './sidebar.css';
import {
  UserAddOutlined,
  TeamOutlined,
  DashboardOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
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
  getItem('Dashboard', '/', <DashboardOutlined />),
  getItem('Students', '/students', <TeamOutlined />),
  getItem('Admission', '/admission', <UserAddOutlined />),
];


function Sidebar() {

  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();

  return (
      <Menu
        className='sidemenu'
        onClick={(item) => {
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        mode="inline"
        items={items}
      />
  );
}

export default Sidebar;
