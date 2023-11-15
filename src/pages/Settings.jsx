import React, { useEffect, useState } from "react";
import { Tabs, notification } from "antd";
import AppLayout from "../layout/AppLayout";
import ChangePassword from "../components/ChangePassword";
import networkRequest from "../lib/apis/networkRequest";

const Settings = () => {

  const [fields, setFields] = useState(false);

  const onchange = (key) => {
    console.log(key);
  }

  const resetPassword = async(values) => {
    const reqBody = {
      old_Password: values.old_Password,
      new_Password: values.new_Password,
      confirm_Password: values.confirm_Password,
    };
    try {
      const { isOk, message } = await networkRequest(
        "/school/change_password",
        "POST",
        reqBody,
        true
      );
      if (isOk) {
        notification.success({
          message: message || "Password updated Successfully",
        });
        setFields(true);
      } else {
        notification.error({
          message: message || "Something went wrong :(",
        });
      }
    } catch (err) {
      notification.error({
        message: "Something went wrong",
      });
      console.log("Error =", err);
    }
  }

  useEffect(() => {
  }, [fields]);

  const tabsData = [
    {
      label: "Change Password",
      key: "1",
      children: <ChangePassword payload={resetPassword} resetFormFields={fields} />,
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
