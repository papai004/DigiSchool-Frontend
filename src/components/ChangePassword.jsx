import React, { useState } from "react";
import { Button, Form, Input, notification } from "antd";
import StyledCard from "./card/StyledCard";
import { useForm } from "antd/es/form/Form";
import networkRequest from "../lib/apis/networkRequest";

const validatePassword = (rule, value) => {
  if (value.length < 6) {
    return Promise.reject("Password must be at least 6 characters long");
  }
  if (!/[a-zA-Z]/.test(value) || !/\d/.test(value) || !/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
    return Promise.reject(
      "Password must contain at least one letter, one digit, and one special character"
    );
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
    <StyledCard>
      <Form
        form={form}
        name="ChangePasswordForm"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{ marginTop: "2rem" }}
        onFinish={onFinish}
        autoComplete="off"
      >
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
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please set your password!",
            },
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
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button loading={isLoading} type="primary" htmlType="submit">
            Reset Password
          </Button>
        </Form.Item>
      </Form>
    </StyledCard>
  );
};

export default ChangePassword;
