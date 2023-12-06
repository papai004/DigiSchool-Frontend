import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Col, Form, Input, Row, notification } from "antd";
import networkRequest from "../lib/apis/networkRequest";
import ForgotPasswordModal from "./modal/ForgotPasswordModal";

const Login = ({valueFromLogin}) => {
  const [isOpen, setIsOpen] = useState(false);
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
    setIsOpen(true);
  };

  const onCancel = () => {
    setIsOpen(false);
  };

  const colseModalHandler = (value) => {
    setIsOpen(value);
  };

  const LoginHandler = (e) => {
    e.preventDefault();
    valueFromLogin("signup");
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
        <Form
          layout="vertical"
          id="LoginForm"
          name="LoginForm"
          style={{
            height: "385px",
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Row>
            <Col offset={4} span={20} style={{ margin: "auto" }}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "The input is not a valid Email!",
                  },
                ]}
              >
                <Input placeholder="type email"/>
              </Form.Item>
            </Col>
          </Row>

          <Row className="mt-minus-1">
            <Col offset={4} span={20} style={{ margin: "auto" }}>
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
                <Input.Password placeholder="type password"/>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Button
              style={{ margin: "auto auto 10px auto" }}
              loading={isLoading}
              type="primary"
              htmlType="submit"
            >
              Login
            </Button>
          </Row>
          <div style={{ margin: "auto auto 10px auto" }}>
              <Link onClick={LoginHandler}>Create Account</Link>
            </div>
          {isOpen === true ? (
            <ForgotPasswordModal
              open={isOpen}
              onCancel={onCancel}
              colseModal={colseModalHandler}
            />
          ) : null}
          
          <Form.Item
            name="forgot password">
            <Link onClick={onClick}>forgot password?</Link>
          </Form.Item>
        </Form>
      </div>
    </React.Fragment>
  );
};

export default Login;
