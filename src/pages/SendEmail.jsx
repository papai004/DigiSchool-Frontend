import { useNavigate } from "react-router-dom";
import { Button, Form, Input, notification } from "antd";
import StyledCard from "../components/card/StyledCard";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";
import networkRequest from "../lib/apis/networkRequest";

const SendEmail = () => {
  const navigate = useNavigate();
  const [form] = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const onFinish = async(values) => {
    const reqBody = {
      email: values?.email,
    };
    setIsLoading(true);
    try {
      const { isOk, message } = await networkRequest(
        "/forgotPassword/sendMail",
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
          message: message || "something went wrong :(",
        });
        setIsLoading(false);
      }
    } catch (err) {
      console.log("Error =", err);
      setIsLoading(false);
    }
  };

  const cancelHandler = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Form
        form={form}
        name="basic"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 18,
        }}
        style={{
          width: 500,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <StyledCard>
          <h2 style={{ textAlign: "center" }}>
            <u>Reset your Organisation's password</u>
          </h2>
          <h3 style={{ textAlign: "center" }}>
            Please Provide the following details:
          </h3>
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
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button loading={isLoading} type="primary" htmlType="submit">
              Send email
            </Button>
            <Button
              onClick={cancelHandler}
              style={{ marginLeft: "0.5rem" }}
              type="primary"
              htmlType="submit"
            >
              Cancel
            </Button>
          </Form.Item>
        </StyledCard>
      </Form>
    </div>
  );
};

export default SendEmail;
