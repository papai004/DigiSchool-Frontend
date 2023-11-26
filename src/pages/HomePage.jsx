import { Row, Col } from "antd";
import Home2 from "../assets/images/home2.svg";
import Navbar from "../components/landing/Navbar";
import Feature from "../components/landing/Features";
import Footer from "../components/landing/Footer";
import Testimonials from "../components/landing/Testimonials";
import Work from "../components/landing/Works";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Row style={{ backgroundColor: "white" }}>
        <Col span={10} style={{ margin: "auto" }}>
          <h1 style={{fontFamily: "monospace"}}>Designed For School Administrators</h1>
          <h3>
            Boasts a user-friendly interface with a suite of powerful features
            to streamline class and student management.
          </h3>
          <h1 style={{fontFamily: "monospace"}}>Seamless Student Enrollment</h1>
          <h3>
            allowing administrators to input and manage student details
            effortlessly. An innovative search functionality enables quick
            retrieval of specific student information.
          </h3>
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
