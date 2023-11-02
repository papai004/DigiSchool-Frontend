import { PlusOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Button, Form, Input, Select, Modal, Col, Row } from "antd";
import DatePicker from "antd/lib/date-picker";

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
    <Modal width={800} open={open} onCancel={onCancel} footer={null}>
      <div style={{textAlign: 'center'}}><h2><u>Add Student</u></h2></div>
      <Form
        layout="vertical"
        name="nest-messages"
        onFinish={onFinish}
        initialValues={{ prefix: "91" }}
        validateMessages={validateMessages}
      >
        <div style={{ display: "flex" }}>
          <Row>
            <Col span={12} style={{ marginRight: "10px" }}>
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
            </Col>
            <Col span={11}>
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
            </Col>
            <Col span={12} style={{ marginRight: "10px" }}>
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
            </Col>
            <Col span={11}>
              <Form.Item
                name="roll"
                label="Roll"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input placeholder="please type roll" />
              </Form.Item>
            </Col>
            <Col span={12} style={{ marginRight: "10px" }}>
              <Form.Item
                name="standard"
                label="Standard"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input placeholder="please type standard" />
              </Form.Item>
            </Col>
            <Col span={11}>
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
                <Input placeholder="please type section" />
              </Form.Item>
            </Col>
            <Col span={12} style={{ marginRight: "10px" }}>
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
            </Col>
            <Col span={11}>
              <Form.Item name="date" label="Date">
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>
        </div>
        <Row>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: "25%", margin: "auto" }}
          >
            Add Student
          </Button>
        </Row>
      </Form>
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
