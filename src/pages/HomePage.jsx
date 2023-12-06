import { Row, Col, Button } from "antd";
import Home2 from "../assets/images/home2.svg";
import Navbar from "../components/landing/Navbar";
import Feature from "../components/landing/Features";
import Footer from "../components/landing/Footer";
import Testimonials from "../components/landing/Testimonials";
import Work from "../components/landing/Works";
import { useState } from "react";
import AuthModal from "../components/modal/AuthModal";

const Landing = () => {
  const [isOpen, setIsOpen] = useState(false);

  const signupHandler = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const onCancel = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Navbar />
      <Row style={{ backgroundColor: "white" }}>
        <Col span={10} style={{ margin: "auto" }}>
          <h1 style={{ fontFamily: "monospace" }}>
            Designed For School Administrators
          </h1>
          <h3>
            Boasts a user-friendly interface with a suite of powerful features
            to streamline class and student management.
          </h3>
          {isOpen === true ? (
            <AuthModal open={isOpen} onCancel={onCancel} />
          ) : null}
          <Button style={{marginTop: "2rem"}} type="primary" onClick={signupHandler}>
            Signup
          </Button>
        </Col>
        <Col
          span={13}
          style={{
            backgroundImage: `url(${Home2})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
            height: "70vh",
          }}
        />
      </Row>
      <Feature />
      <Work />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Landing;
