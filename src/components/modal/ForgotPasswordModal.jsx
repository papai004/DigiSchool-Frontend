import React, { useState } from "react";
import { Modal, Form, Input, Button, notification } from "antd";
import networkRequest from "../../lib/apis/networkRequest";
import { useNavigate } from "react-router-dom";

const ForgotPasswordModal = ({open, onCancel}) => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async(values) => {
    console.log("Received values:", values);
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
            message: message || "something went wrong",
          });
          setIsLoading(false);
        }
      } catch (err) {
        console.log("Error =", err);
        setIsLoading(false);
      }
  };

  return (
      <Modal
      style={{textAlign: "center"}}
        title="Reset your Organisation's password"
        open={open}
        onCancel={onCancel}
        footer={null}
      >
        <Form
          form={form}
          name="ForgotPasswordForm"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 18,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
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
                  message: "The input is not a valid Email!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 4,
                span: 16,
              }}
            >
              <Button loading={isLoading} type="primary" htmlType="submit">
                Send email
              </Button>
              <Button
                onClick={onCancel}
                style={{ marginLeft: "0.5rem", backgroundColor: "grey" }}
                type="primary"
                htmlType="submit"
              >
                Cancel
              </Button>
            </Form.Item>
        </Form>
      </Modal>
  );
};

export default ForgotPasswordModal;
