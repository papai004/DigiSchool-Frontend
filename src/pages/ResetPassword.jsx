import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Input, Form, notification } from 'antd';
import StyledCard from '../components/card/StyledCard';
import networkRequest from '../lib/apis/networkRequest';
import { useForm } from 'antd/es/form/Form';


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


const ResetPassword = () => {

  const [isLoading, setIsLoading] = useState(false);
  const { token } = useParams();
  const navigate = useNavigate();
  const [form] = useForm();

    const onFinish = async(values) => {

      const reqBody = {
        token: token,
        newPassword: values?.new_Password,
        confirmPassword: values?.confirm_Password,
      };
      setIsLoading(true);
      try {
        const { isOk, message } = await networkRequest(
          "/forgotPassword/resetPassword",
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
    }

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
          span: 6,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          width: 600,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <StyledCard>
        <h2 style={{ textAlign: "center" }}>
            <u>Reset your Organisation's password</u>
          </h2>
        <Form.Item
          name="new_Password"
          label="New password"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please set your password!",
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
        </StyledCard>
      </Form>
    </div>
  )
}

export default ResetPassword;
