import { Row, Col, Card } from "antd";
import {
  FcClock,
  FcFactory,
  FcBullish,
  FcClearFilters,
} from "react-icons/fc";

import classes from "./styles/feature.module.css";

const Feature = () => {
  return (
    <div  className={classes.wrapper}>
      <h2 className={classes["main-title"]}>Why DigiSchool?</h2>
      <div>
        <Row sm={6} style={{ marginLeft: "2%", marginBottom: "2%" }}>
          <Col lg={12}>
            <Card style={{height: "30vh"}}>
            <p>
              <FcClock size="3rem" />
            </p>
            <div>
              <h5>Time conserving</h5>
              <p>
                Time is precious, so we have designed our system to save you
                time. So that you act quickly in the time of emergency..
              </p>
            </div>
            </Card>
          </Col>
          <Col lg={11} style={{marginLeft:"1rem"}}>
            <Card style={{height: "30vh"}}>
            <p>
              <FcFactory size="3rem" />
            </p>
            <div>
              <h5>Enormous numbers of schools</h5>
              <p>
                We believe in diversity, so we have a wide variety of hospitals
                to choose from.
              </p>
            </div>
            </Card>
          </Col>
        </Row>
        <Row sm={6} style={{ marginLeft: "2%", marginBottom: "2%" }}>
          <Col lg={12}>
            <Card style={{height: "30vh"}}>
            <p>
              <FcBullish size="3rem" />
            </p>
            <div>
              <h5>Get realtime data</h5>
              <p>
                We also try to provide realtime data to our users to help them
                taking right decisions in emergrncy .
              </p>
            </div>
            </Card>
          </Col>
          <Col lg={11} style={{marginLeft:"1rem"}}>
            <Card style={{height: "30vh"}}>
            <p>
              <FcClearFilters size="3rem" marginRight="5px" />
            </p>
            <div>
              <h5>Get personalized results</h5>
              <p>
                We provide personalized results to our users to help them. We
                also provide details about the hospital based on their location.
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
