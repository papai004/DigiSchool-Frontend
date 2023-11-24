import { Row, Col, Card } from "antd";
import { FcClock, FcFactory, FcSupport, FcSearch } from "react-icons/fc";
import classes from "./styles/feature.module.css";

const Feature = () => {
  return (
    <div className={classes.wrapper}>
      <h2 className={classes["main-title"]}>Why DigiSchool?</h2>
      <div>
        <Row sm={6} style={{ marginLeft: "2%", marginBottom: "2%" }}>
          <Col lg={12}>
            <Card style={{ height: "30vh" }}>
              <p>
                <FcClock size="3rem" />
              </p>
              <div>
                <h5>Time conserving</h5>
                <p>
                  Time is precious, so we have designed our system to save you
                  time. You can download your students' data and send it to someone in a second.
                </p>
              </div>
            </Card>
          </Col>
          <Col lg={11} style={{ marginLeft: "1rem" }}>
            <Card style={{ height: "30vh" }}>
              <p>
                <FcFactory size="3rem" />
              </p>
              <div>
                <h5>Enormous numbers of schools</h5>
                <p>
                  Many organisation's has believed in us. Now its your time to
                  be one of us :)
                </p>
              </div>
            </Card>
          </Col>
        </Row>
        <Row sm={6} style={{ marginLeft: "2%", marginBottom: "2%" }}>
          <Col lg={12}>
            <Card style={{ height: "30vh" }}>
              <p>
                <FcSupport size="3rem" />
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
          <Col lg={11} style={{ marginLeft: "1rem" }}>
            <Card style={{ height: "30vh" }}>
              <p>
                <FcSearch size="3rem" marginRight="5px" />
              </p>
              <div>
                <h5>Get personalized results</h5>
                <p>
                  We provide personalized search to our users data to help them. We
                  also provide editing the data and removing unused datas.
                </p>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Feature;
