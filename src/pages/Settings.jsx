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
