import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { notification } from "antd";
import networkRequest from "../lib/apis/networkRequest";

const VerifySchool = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const onFinish = async (values) => {
      const reqBody = {
        token: token,
      };
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
          navigate("/");
        } else {
          notification.error({
            message: message || "something went wrong :(",
          });
        }
      } catch (err) {
        console.log("Error =", err);
      }
    };
    onFinish();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[token]);
  return (
    <>
    </>
  );
};

export default VerifySchool;
