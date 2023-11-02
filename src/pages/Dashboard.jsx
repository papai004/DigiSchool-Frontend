import React from "react";
import Cards from "../components/card/Cards";
import { Row, Col } from "antd";
import { FaUsers } from "react-icons/fa";
import { MdMoneyOff } from "react-icons/md";
import { FcPaid } from "react-icons/fc";
import "../styles/dashboard.css";
import AppLayout from "../layout/AppLayout";

function Dashboard() {
  return (
    <AppLayout title="Welcome to DigiSchool">
      <Row gutter={[16, 16]} style={{ margin: 15 }}>
        <Col xs={24} sm={12} md={8}>
          <Cards
            icon={
              <FaUsers
                style={{
                  borderRadius: 20,
                  color: "purple",
                  backgroundColor: "rgb(117, 255, 79)",
                }}
              />
            }
            title="Total Students"
            value={6}
          />
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Cards
            icon={
              <MdMoneyOff
                style={{
                  borderRadius: 20,
                  color: "blue",
                  backgroundColor: "rgba(0,0,255,0.25)",
                }}
              />
            }
            title="Defaulters"
            value={6}
          />
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Cards
            icon={
              <FcPaid
                style={{
                  borderRadius: 20,
                  color: "red",
                  backgroundColor: "rgb(245, 83, 151)",
                }}
              />
            }
            title="Paid"
            value={2}
          />
        </Col>
      </Row>
    </AppLayout>
  );
}

export default Dashboard;
