import { Modal, Form, Input, Button, notification } from "antd";
import { useForm } from "antd/es/form/Form";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import styles from "./standardAddModal.module.css";

const StandardEditModal = ({ visible, onClose, payloadData }) => {
  const [data, setData] = useState(payloadData);
  const [form] = useForm();

  useEffect(() => {
    // form.setFieldValue("standard_name", payloadData?.standard_name);
    setData({
      standard_name: payloadData?.standard_name,
      sections: payloadData?.sections,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [payloadData]);

  useEffect(() => {
    if (data) {
      form.setFieldsValue(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const checkError = (values = []) => {
    let hasError = false;
    values?.forEach((item, index) => {
      if (item.value === "") {
        hasError = true;
      }
    });
    return hasError;
  };

  const handleUpdateStandard = () => {
    const hasError = checkError(data?.sections);
    if (hasError) {
      notification.error({
        message: "Please fill the form correctly!",
      });
    }else{
      console.log("data =", data);
    }
  };

  const handleFormChange = (event) => {
    const value = event?.target?.value;
    const name = event?.target?.name;

    if (name === "standard_name") {
      setData((oldData) => ({ ...oldData, standard_name: value }));
    }
  };

  const handleSectionChange = (event, index) => {
    const value = event?.target?.value;
    console.log(event, index);
    setData((oldData) => ({
      ...oldData,
      sections: data?.sections?.map((item, idx) => {
        if (idx === index) {
          return {
            label: value,
            value,
          };
        } else {
          return item;
        }
      }),
    }));
  };

  const handleAddSection = (index) => {
    setData((oldData) => ({
      ...oldData,
      sections: [
        ...oldData?.sections,
        {
          label: "",
          value: "",
        },
      ],
    }));
  };

  const handleDeleteSection = (index) => {
    setData((oldData) => ({
      ...oldData,
      // eslint-disable-next-line array-callback-return
      sections: oldData?.sections?.filter((item, idx) => {
        if (idx !== index) {
          return item;
        }
      }),
    }));
  };

  return (
    <Modal
      title="Update Standard"
      open={visible}
      onOk={onClose}
      onCancel={onClose}
      footer={null}
      maskClosable={false}
    >
      <Form
        form={form}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
          textAlign: "center",
          maxHeight: 400,
          overflowY: "auto",
          margin: "auto",
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
        onChange={handleFormChange}
      >
        <Form.Item
          label="Standard"
          name="standard_name"
          rules={[
            {
              required: true,
              message: "Please input your Standard!",
            },
          ]}
        >
          <Input name="standard_name" />
        </Form.Item>
        <Form.List name="section">
          {(fields) => (
            <>
              <Form.Item>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    type="primary"
                    onClick={handleAddSection}
                    icon={<PlusOutlined />}
                  />
                  {data.sections.length > 1 ? (
                    <div>
                      <MinusCircleOutlined
                        className={styles.dynamic__delete__button}
                        onClick={() => {
                          handleDeleteSection(data.sections.length - 1);
                        }}
                      />
                    </div>
                  ) : null}
                </div>
              </Form.Item>
              {data?.sections?.map((section, idx) => {
                return (
                  <>
                    <Form.Item
                      label="Section"
                      name={idx}
                      rules={[
                        {
                          required: true,
                          message: "Please input your Section!",
                        },
                      ]}
                    >
                      <Input
                        key={idx}
                        defaultValue={section.label}
                        onChange={(e) => {
                          handleSectionChange(e, idx);
                        }}
                      />
                    </Form.Item>
                  </>
                );
              })}
            </>
          )}
        </Form.List>
        <Button onClick={handleUpdateStandard} type="primary">
          Update
        </Button>
      </Form>
    </Modal>
  );
};

export default StandardEditModal;
