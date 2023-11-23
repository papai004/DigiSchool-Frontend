import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, notification } from "antd";
import networkRequest from "../lib/apis/networkRequest";

const VerifySchool = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useParams();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const reqBody = {
      token: token,
      verifyConfirmation: "true",
    };
    setIsLoading(true);
    try {
      const { isOk, message } = await networkRequest(
        "/auth/verifySchool",
        "POST",
        reqBody
      );

      if (isOk) {
        notification.success({
          message,
        });
        setIsLoading(false);
        navigate("/");
      } else {
        notification.error({
          message: message || "something went wrong :(",
        });
        setIsLoading(false);
      }
    } catch (err) {
      console.log("Error =", err);
      setIsLoading(false);
    }
  };
  return (
    <>
      <Card
        title={
          <h2 style={{ textAlign: "center" }}>
            <u>Please verify by clicking the button</u>
          </h2>
        }
        bordered={false}
        style={{ width: 600, margin: "auto", marginTop: "20%" }}
      >
        <Button
          loading={isLoading}
          onClick={onFinish}
          style={{ marginLeft: "12rem" }}
          type="primary"
          htmlType="submit"
        >
          Confirm Verification
        </Button>
      </Card>
    </>
  );
};

export default VerifySchool;
