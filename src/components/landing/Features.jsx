import { Row, Col, Card } from "antd";
import {
  FcClock,
  FcFactory,
  FcUnlock,
  FcSearch,
  FcGlobe,
  FcShare,
} from "react-icons/fc";
import styles from "./styles/feature.module.css";

const Feature = () => {
  return (
    <div className="wrapper">
      <h1 style={{paddingTop: "2rem"}}>Why DigiSchool?</h1>
      <Row gutter={[16, 16]} style={{ margin: 15 }}>
        <Col xs={24} sm={12} md={8}>
          <Card className={styles.feature__card} style={{ marginTop: "2rem", height: "35vh" }}>
            <p>
              <FcClock size="3rem" />
            </p>
            <div>
              <h5>Time conserving</h5>
              <p>
                Time is precious, so we have designed our system to save you
                time. You can download your students' data and send it to
                someone in a second.
              </p>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card style={{ marginTop: "2rem", height: "35vh" }}>
            <p>
              <FcUnlock size="3rem" />
            </p>
            <div>
              <h5>Security</h5>
              <p>
                Highly secure and robust system enables schools and institutes
                to dodge administrative paper works.
              </p>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card className={styles.feature__card} style={{ marginTop: "2rem", height: "35vh" }}>
            <p>
              <FcSearch size="3rem" marginRight="5px" />
            </p>
            <div>
              <h5>Get personalized results</h5>
              <p>
                We provide personalized search to our users data to help them.
                We also provide editing the data and removing unused datas.
              </p>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card style={{ marginTop: "2rem", height: "35vh" }}>
            <p>
              <FcFactory size="3rem" />
            </p>
            <div>
              <h5>Enormous numbers of schools</h5>
              <p>
                Many organisation's has believed in us. Now its your time to be
                one of us :)
              </p>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card className={styles.feature__card} style={{ marginTop: "2rem", height: "35vh" }}>
            <p>
              <FcShare size="3rem" />
            </p>
            <div>
              <h5>Share files</h5>
              <p>Students Data can be sgared to anyone via Excel sheet.</p>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card style={{ marginTop: "2rem", height: "35vh" }}>
            <p>
              <FcGlobe size="3rem" />
            </p>
            <div>
              <h5>Free Access</h5>
              <p>
                Its free to use, any organisation across the globe can use after
                granting permission from the Admin
              </p>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Feature;
