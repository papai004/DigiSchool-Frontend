import React, { useEffect, useState } from "react";
import { Card, Col, Row, notification, Button, Tag } from "antd";
import { EditOutlined } from "@ant-design/icons";
import AppLayout from "../layout/AppLayout";
import StandardAddModal from "../components/modal/StandardAddModal";
import networkRequest from "../lib/apis/networkRequest";
import StandardEditModal from "../components/modal/StandardEditModal";

const ManageStandard = () => {

  const color = ["magenta","red","volcano","orange","gold","lime","green","cyan","blue","geekblue","purple"];
  const getRandomColor = () => {
    const randomColorIndex = Math.floor(Math.random() * color.length);
    const randomColor = color[randomColorIndex]; 
    return randomColor;
  }

  const [standardValue, setStandardValue] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDatas, setIsDatas] = useState(null);

  const getStandardList = async () => {
    try {
      const { isOk, message, data } = await networkRequest(
        "/standard/get_standards_list",
        "POST",
        {},
        true
      );
      if (isOk) {
        setStandardValue(data);
      } else {
        notification.error({
          message,
        });
      }
    } catch (err) {
      console.log("Error =", err);
    }
  };

  const addStandardHandler = async (values) => {
    const reqBody = {
      standard_name: values.Standard,
      sections: values.Section.map((sec, _) => ({
        label: sec,
        value: sec,
      })),
    };
    try {
      const { isOk, message } = await networkRequest(
        "/standard/create_standard",
        "POST",
        reqBody,
        true
      );
      if (!isOk) {
        notification.error({
          message,
        });
      }
    } catch (err) {
      console.log("Error =", err);
    }
  };

  const editHandler = (values) => {
    setIsModalVisible(true);
    setIsDatas(values);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    getStandardList();
  }, []);

  return (
    <AppLayout>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "1rem",
        }}
      >
        <StandardAddModal onAddFormsContent={addStandardHandler} />
        {isModalVisible && (
          <StandardEditModal
            visible={isModalVisible}
            onClose={closeModal}
            data={isDatas}
          />
        )}
      </div>
      <div style={{ margin: "1rem" }}>
        <Row>
          {standardValue.map((values, idx) => {
            return (
              <Col span={4}>
                <Card
                  key={idx}
                  style={{
                    textAlign: "center",
                    margin: "0.5rem",
                    height: "35vh",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      marginTop: "0.5rem",
                    }}
                  >
                    <div style={{ marginLeft: "auto" }}>
                      <Button
                        icon={<EditOutlined />}
                        onClick={() => editHandler(values)}
                      ></Button>
                    </div>
                  </div>
                  <p>
                    Standard: <b><Tag color={getRandomColor()}>{values.standard_name}</Tag></b>
                  </p>
                  <br />
                  <Row>
                    {values.sections.map((section, idx) => {
                      return (
                        <Col span={8}>
                          <Tag
                            color={getRandomColor()}
                            key={idx}
                            style={{ margin: "0.2rem" }}
                          >
                            {section.label}
                          </Tag>
                        </Col>
                      );
                    })}
                  </Row>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </AppLayout>
  );
};

export default ManageStandard;
