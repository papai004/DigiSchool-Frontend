import { Col, Row } from "antd";
import Sidebar from "../components/sidebar/Sidebar";
import styles from "./AppLayout.module.css";
import Header from "../components/navs/Header";
import Footer from "../components/navs/Footer";
import infiniteImg from "../images/infinite.jpg";


const AppLayout = (props) => {
  return (
    <div>
      <Header>
        <Row>
          <Col span={2}>
            <img
              src={infiniteImg}
              style={{ width: "100px", height: "52px", marginTop: "6px" }}
              alt="infiniteImg"
            />
          </Col>
          <Col span={22}>
            <u>
              <h2>{props.title}</h2>
            </u>
          </Col>
        </Row>
      </Header>
      <Row>
        <Col span={4}>
          <Sidebar />
        </Col>
        <Col span={20} className={styles.layout__container}>
          {props.children}
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default AppLayout;
