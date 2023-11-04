import { Modal, Form, Input, Button } from "antd";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";

const StandardEditModal = ({ visible, onClose, data }) => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Modal
      title="Child Modal"
      open={visible}
      onOk={onClose}
      onCancel={onClose}
      footer={null}
      maskClosable={false}
    >
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Standard"
          name="Standard"
          rules={[
            {
              required: true,
              message: "Please input your Standard!",
            },
          ]}
        >
          <Input defaultValue={data.standard_name} />
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
              <Form.Item
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Button
                  type="primary"
                  onClick={() => add()}
                  icon={<PlusOutlined />}
                ></Button>
                <Form.ErrorList errors={errors} />
              </Form.Item>
              <Form.Item
                label="Section"
                name="Section"
                rules={[
                  {
                    required: true,
                    message: "Please input your Section!",
                  },
                ]}
              >
                {data.sections.map((section, idx) => {
                  return (
                    <Input
                      key={idx}
                      defaultValue={section.label}
                      style={{ marginBottom: "0.5rem", width: "85%" }}
                    />
                  );
                })}
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form>
    </Modal>
  );
};

export default StandardEditModal;
