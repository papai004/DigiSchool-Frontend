import React from "react";
import { Card, Col, Row } from "antd";
import {
  UserAddOutlined,
  SolutionOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import AppLayout from "../layout/AppLayout";

const Manage = () => {
  const navigate = useNavigate();
  return (
    <AppLayout title="Management">
      <Row gutter={[16, 16]} style={{ margin: 10 }}>
        <Col xs={24} sm={12} md={8}>
          <Card
            title="Add Student"
            bordered={false}
            style={{
              width: "100%",
              minHeight: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => navigate("/admission")}
          >
            <UserAddOutlined style={{ fontSize: 40 }} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            title="Add Teacher"
            bordered={false}
            style={{
              width: "100%",
              minHeight: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SolutionOutlined style={{ fontSize: 40 }} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            title="Add Staff"
            bordered={false}
            style={{
              width: "100%",
              minHeight: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TeamOutlined style={{ fontSize: 40 }} />
          </Card>
        </Col>
      </Row>
    </AppLayout>
  );
};

export default Manage;