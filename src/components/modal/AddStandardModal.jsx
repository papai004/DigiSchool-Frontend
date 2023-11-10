import React, { useState } from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal } from "antd";
import styles from "./standardAddModal.module.css";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 4,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 20,
    },
  },
};

const StandardAddModal = (props) => {

  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const onCancel = () => {
    form.resetFields();
    setOpen(false);
  };
  const onFinish = (values) => {
    props.addStandardValues(values);
    form.resetFields();
    setOpen(false);
  };

  return (
    <>
      <Button
        style={{ width: "auto", height: "40px", marginRight: "1rem" }}
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => {
          setOpen(true);
        }}
      >
        Standard
      </Button>

      <Modal width={450} open={open} onCancel={onCancel} footer={null} maskClosable={false}>
        <Form
          form={form}
          name="dynamic_form_item"
          onFinish={onFinish}
          layout="vertical"
          style={{
            maxWidth: 450,
            maxHeight: 400,
            overflowY: "auto",
            margin: "auto",
          }}
        >
          <div style={{ textAlign: "center", margin: "auto" }}>
            <h2>
              <u>Add Standard</u>
            </h2>
          </div>
          <Form.Item name="Standard" label="Enter Standard:">
            <Input style={{ maxWidth: "295px" }} />
          </Form.Item>
          <Form.List
            name="Section"
            rules={[
              {
                validator: async (_, names) => {
                  if (!names || names.length < 1) {
                    return Promise.reject(new Error("Add at least 1 Section"));
                  }
                },
              },
            ]}
          >
            {(fields, { add, remove }, { errors }) => (
              <>
                <Form.Item>
                  <Button
                    type="primary"
                    onClick={() => add()}
                    style={{
                      marginLeft: "260px",
                    }}
                    icon={<PlusOutlined />}
                  ></Button>
                  <Form.ErrorList errors={errors} />
                </Form.Item>
                {fields.map((field, index) => (
                  <Form.Item
                    {...(index === 0 ? formItemLayout : formItemLayout)}
                    label={index === 0 ? "Sections:" : ""}
                    required={false}
                    key={field.key}
                  >
                    <Form.Item
                      {...field}
                      validateTrigger={["onChange", "onBlur"]}
                      rules={[
                        {
                          required: true,
                          whitespace: true,
                          message: "Please input Section",
                        },
                      ]}
                      noStyle
                    >
                      <Input
                        placeholder="Section"
                        style={{
                          width: "80%",
                        }}
                      />
                    </Form.Item>
                    {fields.length > 1 ? (
                      <MinusCircleOutlined
                        className={styles.dynamic__delete__button}
                        onClick={() => remove(field.name)}
                      />
                    ) : null}
                  </Form.Item>
                ))}
              </>
            )}
          </Form.List>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Standard
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default StandardAddModal;
