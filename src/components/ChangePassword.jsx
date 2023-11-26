import React, { useState } from "react";
import { Button, Form, Input, notification } from "antd";
import { FcInfo } from "react-icons/fc";
import { useForm } from "antd/es/form/Form";
import networkRequest from "../lib/apis/networkRequest";

const validatePassword = (rule, value) => {
  const strongPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;

  if (!strongPasswordRegex.test(value)) {
    return Promise.reject("Please provide correct Password type.");
  }

  return Promise.resolve();
};


const ChangePassword = () => {
  const [form] = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onFinish = async (values) => {
    const reqBody = {
      old_Password: values.old_Password,
      new_Password: values.new_Password,
      confirm_Password: values.confirm_Password,
    };
    setIsLoading(true);
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
        form.resetFields();
        setIsLoading(false);
      } else {
        notification.error({
          message: message || "Something went wrong",
        });
        setIsLoading(false);
      }
    } catch (err) {
      notification.error({
        message: "Something went wrong",
      });
      console.log("Error =", err);
      setIsLoading(false);
    }
  };

  return (
    <div style={{backgroundColor: "white", margin: "auto"}}>
      <Form
        form={form}
        name="ChangePasswordForm"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 10,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <h2 style={{textAlign:"center", paddingTop: "1rem"}}>Kindly Give The Details:</h2>
        <Form.Item
          label="Old password"
          name="old_Password"
          rules={[
            {
              required: true,
              message: "Please input your old password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="new_Password"
          label="New password"
          dependencies={["old_Password"]}
          tooltip={{
            title:
              "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.",
            icon: <FcInfo />,
          }}
          hasFeedback
          rules={[
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("old_Password") !== value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error(
                    "The new password that you entered is same as before!"
                  )
                );
              },
            }),
            {
              required: true,
              validator: validatePassword,
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="confirm_Password"
          label="Confirm password"
          dependencies={["new_Password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("new_Password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The new password that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <div style={{display: "flex", paddingBottom: "2rem"}}>
          <Button style={{margin: "auto"}} loading={isLoading} type="primary" htmlType="submit">
            Reset Password
          </Button>
          </div>
      </Form>
      </div>
  );
};

export default ChangePassword;
