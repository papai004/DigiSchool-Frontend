import React from "react";
import { Button, Form, Input, notification } from "antd";
import StyledCard from "./card/StyledCard";
import { useForm } from "antd/es/form/Form";
import networkRequest from "../lib/apis/networkRequest";

const validatePassword = (rule, value) => {
  if (value.length < 6) {
    return Promise.reject("Password must be at least 6 characters long");
  }
  if (!/[a-zA-Z]/.test(value) || !/\d/.test(value)) {
    return Promise.reject(
      "Password must contain at least one letter and one digit"
    );
  }
  return Promise.resolve();
};

const ChangePassword = () => {
  const [form] = useForm();

  const onFinish = async(values) => {

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
        form.resetFields();
      } else {
        notification.error({
          message: message || "Something went wrong",
        });
      }
    } catch (err) {
      notification.error({
        message: "Something went wrong",
      });
      console.log("Error =", err);
    }
  };

  return (
    <StyledCard>
      <Form
        form={form}
        name="basic"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{marginTop: "2rem"}}
        onFinish={onFinish}
        autoComplete="off"
      >
        {/* <div style={{textAlign: "center"}}><h3 color="green">Reset Password</h3></div> */}

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
          <Button type="primary" htmlType="submit">
            Reset Password
          </Button>
        </Form.Item>
      </Form>
    </StyledCard>
  );
};

export default ChangePassword;
