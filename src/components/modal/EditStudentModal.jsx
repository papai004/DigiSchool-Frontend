import {
  Modal,
  Button,
  Row,
  Form,
  Col,
  Input,
  Select,
  notification,
} from "antd";
import { useEffect, useState } from "react";
import networkRequest from "../../lib/apis/networkRequest";
import { useForm } from "antd/es/form/Form";

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

const validatePhoneNumber = (rule, value) => {
  const phoneRegex = /^[0-9]{10}$/;
  if (value && !phoneRegex.test(value)) {
    return Promise.reject("Please enter a valid 10-digit phone number");
  }
  return Promise.resolve();
};

const EditStudentModal = ({ open, dataToSend, onCancel, payloadData }) => {
  const [standardData, setStandardData] = useState([]);
  const [standardValue, setStandardValue] = useState("");
  const [sectionValue, setSectionValue] = useState([]);
  const [form] = useForm();

  const getStandardList = async () => {
    try {
      const { isOk, message, data } = await networkRequest(
        "/standard/get_standards_list",
        "POST",
        {},
        true
      );
      if (isOk) {
        setStandardData(data);
      } else {
        notification.error({
          message,
        });
      }
    } catch (err) {
      console.log("Error =", err);
    }
  };

  const onFinish = (values) => {
    payloadData(values);
    if(open === false){
        form.resetFields();
    }
  };

  const standardChangeHandler = async (event) => {
    form.setFieldValue("section", "")
    setStandardValue(event);
  };

  const getSection = () => {
    // eslint-disable-next-line array-callback-return
    standardData.map((standard, _) => {
      if (standard.standard_name === standardValue) {
        setSectionValue(standard.sections);
      }
    });
  };

  useEffect(() => {
    getStandardList();
  }, []);

  useEffect(() => {
    getSection();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [standardValue]);

  useEffect(() => {
    if (dataToSend) {
      form.setFieldsValue(dataToSend);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataToSend]);

  return (
    <Modal maskClosable={false} open={open} onCancel={onCancel} footer={null}>
      <div style={{ textAlign: "center" }}>
        <h2>
          <u>Edit Student</u>
        </h2>
      </div>
      <Form
        form={form}
        id="student__edit__form"
        layout="vertical"
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        style={{
          maxHeight: 400,
          overflowY: "auto",
          margin: "auto",
        }}
      >
        <div style={{ display: "flex" }}>
          <Row>
            <Col span={12} style={{ marginRight: "10px" }}>
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
            <Col span={11}>
              <Form.Item
                name="roll"
                label="Roll"
                rules={[
                  {
                    required: true,
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (/^\d+$/.test(value) && parseInt(value, 10) > 0) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        "Please enter a valid positive number."
                      );
                    },
                  }),
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
                <Select
                  placeholder="Select Standard"
                  onChange={standardChangeHandler}
                  style={{
                    maxWidth: 400,
                    maxHeight: 400,
                    overflowY: "auto",
                    margin: "auto",
                  }}
                >
                  {standardData.map((standard, idx) => {
                    return (
                      <Select.Option key={idx} value={standard.standard_name}>
                        {standard.standard_name}
                      </Select.Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </Col>
            <Col span={11}>
              <Form.Item
                name="section"
                label="Section"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  name="section"
                  placeholder="Select Section"
                  style={{
                    maxWidth: 400,
                    maxHeight: 400,
                    overflowY: "auto",
                    margin: "auto",
                  }}
                >
                  {sectionValue.map((section, index) => {
                    return (
                      <Select.Option key={index} value={section.label}>
                        {section.label}
                      </Select.Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </Col>
            <Col span={12} style={{ marginRight: "10px" }}>
              <Form.Item
                name="mobileNo"
                label="Mobile Number"
                rules={[
                  {
                    required: true,
                    message: "Please input mobile number!",
                  },
                  {
                    validator: validatePhoneNumber,
                  },
                ]}
              >
                <Input style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col span={11}>
              <Form.Item
                name="address"
                label="Address"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input placeholder="address" />
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
            Edit Student
          </Button>
        </Row>
      </Form>
    </Modal>
  );
};

export default EditStudentModal;
