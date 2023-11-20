import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input, notification } from "antd";
import ContactImg from "../assets/images/contact.svg";
import "../styles/login.css";
import networkRequest from "../lib/apis/networkRequest";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const onFinish = async (values) => {
    const reqBody = {
      email: values?.email,
      password: values?.password,
    };
    setIsLoading(true);
    try {
      const { isOk, message, data } = await networkRequest(
        "/auth/login",
        "POST",
        reqBody
      );

      if (isOk) {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        notification.success({
          message,
        });
        setIsLoading(false);
        navigate("/dashboard");
      } else {
        notification.error({
          message: message || "something went wrong :(",
        });
        setIsLoading(false);
      }
    } catch (err) {
      console.log("Error =", err);
      setIsLoading(false);
    }
  };
  
  const onClick = (e) => {
    e.preventDefault();
    navigate("/sendEmail");
  }

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      navigate("/dashboard");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <React.Fragment>
      <div className="login">
        <div
          className="leftSide"
          style={{ backgroundImage: `url(${ContactImg})` }}
        ></div>
        <div className="rightSide">
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <h2 style={{ textAlign: "center" }}> Login to your account</h2>
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
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="forgot password"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Link style={{ color: "red" }} onClick={onClick}>
                forgot password?
              </Link>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button loading={isLoading} type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
