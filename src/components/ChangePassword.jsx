import React from "react";
import { Button, Form, Input } from "antd";
import StyledCard from "./card/StyledCard";
import { useForm } from "antd/es/form/Form";

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

const ChangePassword = ({payload, resetFormFields=false}) => {
  const [form] = useForm();

  const onFinish = (values) => {
    payload(values);
    if(resetFormFields === true){
      form.resetFields();
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
