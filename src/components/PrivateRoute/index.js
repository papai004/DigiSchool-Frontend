import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = (props) => {
  const navigate = useNavigate();

  const isAuthenticated = localStorage.getItem("accessToken");

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isAuthenticated) {
    return <>{props?.children}</>;
  }

  return <div></div>;
};

export default PrivateRoute;
