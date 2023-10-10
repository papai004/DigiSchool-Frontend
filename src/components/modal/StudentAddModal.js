import { PlusOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Button, Form, Input, Select, Modal } from "antd";
import DatePicker from "antd/lib/date-picker";

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
  // eslint-disable-next-line no-template-curly-in-string
  required: "${label} is required!",
  types: {
    // eslint-disable-next-line no-template-curly-in-string
    email: "${label} is not a valid email!",
    // eslint-disable-next-line no-template-curly-in-string
    number: "${label} is not a valid number!",
  },
  number: {
    // eslint-disable-next-line no-template-curly-in-string
    range: "${label} must be between ${min} and ${max}",
  },
};
const CollectionCreateForm = ({ open, onCancel }) => {

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Modal
      width={800}
      open={open}
      onCancel={onCancel}
    >
      <div
        style={{ display: "flex", justifyContent: "center", margin: "10px" }}
      >
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          initialValues={{ prefix: "91" }}
          validateMessages={validateMessages}
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
            <Input placeholder="name" />
          </Form.Item>
          <Form.Item
            name="parentName"
            label="ParentName"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Parent name" />
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
            <Select placeholder="Select gender">
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
            </Select>
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
            <Input placeholder="please type roll"/>
          </Form.Item>
          <Form.Item
            name="standard"
            label="Standard"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="please type standard"/>
          </Form.Item>
          <Form.Item
            name="section"
            label="Section"
            rules={[
              {
                required: true,
                message: "Please input section",
              },
            ]}
          >
            <Input placeholder="please type section"/>
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: "Please input phone number!",
              },
            ]}
          >
            <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item name="date" label="Date">
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
          <Button type="primary" htmlType="submit" style={{width: '100%'}}>
        Submit
      </Button>
        </Form>
      </div>
    </Modal>
  );
};

const StudentAddModal = () => {
  const [open, setOpen] = useState(false);
  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    setOpen(false);
  };
  return (
    <div>
      <Button
        style={{ width: "80px", marginRight: ".5rem", height: "40px" }}
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => {
          setOpen(true);
        }}
      >
        Add
      </Button>
      <CollectionCreateForm
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </div>
  );
};
export default StudentAddModal;
