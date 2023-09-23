import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
  const [selectedKeys, setSelectedKeys] = useState();

  useEffect(() => {
    if(selectedKeys !== location.pathname)
      setSelectedKeys(location.pathname);
  }, [location.pathname, selectedKeys]);

  const handleMenuChange = (newPath) => {
    console.log("New Path - ", newPath);
    setSelectedKeys(newPath);
    navigate(newPath);
  }

  const navigate = useNavigate();

  return (
      <Menu
        className='sidemenu'
        onClick={(item) => {
          handleMenuChange(item.key)          
        }}
        style={{height: '75vh'}}
        selectedKeys={[selectedKeys]}
        mode="inline"
        items={items}
      />
  );
}

export default Sidebar;