import React from "react";
import { Tabs } from "antd";
import AppLayout from "../layout/AppLayout";
import ChangePassword from "../components/ChangePassword";

const Settings = () => {

  const onchange = (key) => {
    console.log(key);
  }

  const tabsData = [
    {
      label: "Change Password",
      key: "1",
      children: <ChangePassword />,
    },
    {
      label: "Tab 2",
      key: "2",
      children: "This is content for Tab 2",
    },
    {
      label: "Tab 3",
      key: "3",
      children: "This is content for Tab 3",
    },
  ];

  return (
    <React.Fragment>
      <AppLayout>
        <Tabs defaultActiveKey="1" type="card" onChange={(key) => onchange(key)} items={tabsData} style={{margin: "10px"}}>
        </Tabs>
      </AppLayout>
    </React.Fragment>
  );
};

export default Settings;
