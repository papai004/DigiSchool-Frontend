import Header from "../navs/Header";
import { Row, Col } from "antd";
import Sidebar from "../sidebar/Sidebar";
import React from "react";
import Footer from "../navs/Footer";

function Students() {
  return (
    <>
      <Header title="Welcome to Students Page" />
      <Row>
        <Col span={4}>
          <Sidebar />
        </Col>
      </Row>
      <Footer />
    </>
  );
}

export default Students;
