import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Cards from "./helper/Cards";
import Header from "./navs/Header";
import Footer from "./navs/Footer";
import { Row, Col } from "antd";
import "./styles/dashboard.css";

function Dashboard() {
  return (
    <>
      <Header title="Welcome to My Dashboard" />
      <Row>
        <Col span={4}>
          <Sidebar />
        </Col>
        <Col span={20} className="dashboard">
          <Row>
            <Cards title="Total Students" />
            <Cards title="Defaulters" />
            <Cards title="Paid" />
          </Row>
        </Col>
      </Row>
      <Footer />
    </>
  );
}

export default Dashboard;
