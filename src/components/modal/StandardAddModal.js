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
  var [form] = Form.useForm();

  const onCancel = () => {
    setOpen(false);
  };

  const onFinish = (values) => {
    props.onAddFormsContent(values);
    setOpen(false);
    
  };

  return (
    <>
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

      <Modal width={450} open={open} onCancel={onCancel} footer={null}>
        <Form
          form={form}
          name="dynamic_form_item"
          onFinish={onFinish}
          layout="vertical"
          style={{
            maxWidth: 600,
            maxHeight: 400,
            overflowY: 'auto',
          }}
        >
          <div style={{textAlign: 'center'}}><h2><u>Add Standard</u></h2></div>
          <Form.Item name="Standard" label="Enter Standard:">
            <Input style={{maxWidth: '295px'}} />
          </Form.Item>
          <Form.List name="Section">
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
                >
                </Button>
                <Form.ErrorList errors={errors} />
              </Form.Item>
                {fields.map((field, index) => (
                  <Form.Item
                    {...(index === 0
                      ? formItemLayout
                      : formItemLayout)}
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
                          message: "Please input Section or delete this field",
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
                    {fields.length > 0 ? (
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
