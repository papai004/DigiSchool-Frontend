import React from 'react'
import Header from '../navs/Header';
import { Col, Row } from 'antd';
import Sidebar from '../sidebar/Sidebar';
import Footer from '../navs/Footer';

function Admission() {
  return (
    <>
      <Header title="Welcome to Admission Page" />
      <Row>
        <Col span={4}>
          <Sidebar />
        </Col>
      </Row>
      <Footer />
    </>
  )
}

export default Admission;
