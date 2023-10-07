import React from "react";
import { Button, Form, Input, Select } from "antd";
import StyledCard from '../components/helper/StyledCard';
import AppLayout from "../layout/AppLayout";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const { Option } = Select;

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select
      style={{
        width: 70,
      }}
    >
      <Option value="91">+91</Option>
      <Option value="62">+62</Option>
    </Select>
  </Form.Item>
);

/* eslint-disable no-template-curly-in-string */
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
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {

  console.log(values.name);
  console.log(values.parentName);
  console.log(values.gender);
  console.log(values.phone);
  console.log(values.roll);
  console.log(values.standard);
  console.log(values.section);
  console.log(values.address);
  console.log(values.bloodGroup); 
};

function Actions() {
  return (
    <AppLayout title="Admission">
      <StyledCard>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          style={{
            maxWidth: 600,
            marginTop:'1.5rem',
          }}
          validateMessages={validateMessages}
          initialValues={{ prefix: "91" }}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="parentName"
            label="parentName"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
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
            <Select placeholder="select your gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
            </Select>
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
            <Input
              addonBefore={prefixSelector}
              style={{
                width: "100%",
                backgroundColor: "white",
                borderRadius: "7px",
              }}
            />
          </Form.Item>
          <Form.Item
            name="standard"
            label="standard"
            rules={[
              {
                required: true,
                message: "Please input Standard",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="roll"
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
            name="section"
            label="section"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select placeholder="select your section">
              <Option value="A">A</Option>
              <Option value="B">B</Option>
              <Option value="C">C</Option>
              <Option value="D">D</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="address"
            label="address"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="bloodGroup"
            label="bloodGroup"
            rules={[
              {
                required: true,
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
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        </StyledCard>
    </AppLayout>
  );
}
export default Actions;

