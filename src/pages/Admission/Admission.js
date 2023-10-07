import React from "react";
import { Button, Card, Form, Input, Select } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import DatePicker from "antd/lib/date-picker";
import AppLayout from "../../layout/AppLayout";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 70 }}>
      <Select.Option value="91">+91</Select.Option>
      <Select.Option value="62">+62</Select.Option>
    </Select>
  </Form.Item>
);

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const onFinish = (values) => {
  console.log(values);
};

function Admission() {
  return (
    <AppLayout title="Admission">
      <div
        style={{ display: "flex", justifyContent: "center", margin: "10px" }}
      >
        <Card
          title="Admission Form"
          style={{
            width: 600,
            marginTop: "1.5rem",
            // textAlign: "center",
          }}
        >
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            initialValues={{ prefix: "91" }}
            validateMessages={validateMessages}
          >
            <Form.Item
              name={["user", "name"]}
              label="Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item
              name={["user", "roll"]}
              label="Roll"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "email"]}
              label="Email"
              rules={[
                {
                  type: "email",
                  required: true,
                },
              ]}
            >
              <Input prefix={<MailOutlined />} />
            </Form.Item>
            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item name="date" label="Date">
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item
              name="gender"
              label="Gender"
              rules={[
                {
                  required: true,
                  message: "Please select gender!",
                },
              ]}
            >
              <Select placeholder="Select your gender">
                <Select.Option value="male">Male</Select.Option>
                <Select.Option value="female">Female</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="discipline"
              label="Discipline"
              rules={[
                {
                  required: true,
                  message: "Please input your Stream!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                ...layout.wrapperCol,
                offset: 8,
              }}
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "auto",
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </AppLayout>
  );
}

export default Admission;
