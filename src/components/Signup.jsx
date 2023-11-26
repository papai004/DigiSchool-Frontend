import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Col, Form, Input, Row, notification } from "antd";
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

const Signup = ({ valueFromSignup }) => {
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
        valueFromSignup("login");
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

  const LoginHandler = (e) => {
    e.preventDefault();
    valueFromSignup("login");
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
        // style={{ height: "360px" }}
        layout="vertical"
        name="SignUpForm"
        onFinish={onFinish}
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
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row className="mt-minus-1">
          <Col offset={4} span={20} style={{ margin: "auto" }}>
            <Form.Item
              label="SchoolName"
              name="schoolName"
              rules={[
                {
                  required: true,
                  message: "Please Give a name!",
                },
              ]}
            >
              <Input placeholder="Give your organization's name" />
            </Form.Item>
          </Col>
        </Row>
        <Row className="mt-minus-1">
          <Col offset={4} span={20} style={{ margin: "auto" }}>
            <Form.Item
              label="Password"
              name="password"
              tooltip={{
                title:
                  "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.",
                icon: <FcInfo />,
              }}
              rules={[
                {
                  required: true,
                  validator: validatePassword,
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col offset={4} span={20} style={{ margin: "auto" }}>
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
                      new Error(
                        "The new password that you entered does not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Button
            loading={isLoading}
            type="primary"
            htmlType="submit"
            style={{ margin: "auto 0 auto 32%" }}
          >
            SignUp
          </Button>
          <div style={{ width: "50%", margin: "auto" }}>
            <Link onClick={LoginHandler}>Already have an Account?</Link>
          </div>
        </Row>
      </Form>
    </React.Fragment>
  );
};

export default Signup;
