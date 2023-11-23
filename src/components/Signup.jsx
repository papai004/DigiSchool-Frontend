import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, notification } from "antd";
import networkRequest from "../lib/apis/networkRequest";
import { useForm } from "antd/es/form/Form";

const validatePassword = (rule, value) => {
  if (value.length < 6) {
    return Promise.reject("Password must be at least 6 characters long");
  }
  if (
    !/[a-zA-Z]/.test(value) ||
    !/\d/.test(value) ||
    !/[!@#$%^&*(),.?":{}|<>]/.test(value)
  ) {
    return Promise.reject(
      "Password must contain at least one letter, one digit, and one special character"
    );
  }
  return Promise.resolve();
};

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [form] = useForm();

  const onFinish = async (values) => {
    const reqBody = {
      email: values?.email,
      schoolName: values?.schoolName,
      password: values?.password,
      confirm_Password: values?.confirm_Password,
    };
    setIsLoading(true);
    try {
      const { isOk, message } = await networkRequest(
        "/school/create_school",
        "POST",
        reqBody
      );

      if (isOk) {
        notification.success({
          message,
        });
        setIsLoading(false);
        form.resetFields();
        navigate("/");
      } else {
        notification.error({
          message: message || "something went wrong",
        });
        setIsLoading(false);
      }
    } catch (err) {
      console.log("Error =", err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      navigate("/dashboard");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <React.Fragment>
      <Form
      form={form}
      labelCol={{
        span: 7,
      }}
      wrapperCol={{
        span: 17,
      }}
        name="Sign up Form"
        style={{
          maxWidth: 600,
          height: "320px"
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <h2 style={{ textAlign: "center" }}> Signup to DigiSchool </h2>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "The input is not valid Email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="SchoolName"
          name="schoolName"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="Give your organisation's name" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
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
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
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
            offset: 10,
            span: 14,
          }}
        >
          <Button loading={isLoading} type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </React.Fragment>
  );
};

export default Login;
