import axios from "axios";

const downloadFileRequest = async (
  endPoint = "",
  method = "GET",
  body = {},
  isAuthRequired = false
) => {
  try {
    const requestURI = `${process.env.REACT_APP_BACKEND_BASE_URL}${endPoint}`;

    let headers = {};

    if (isAuthRequired) {
      const accessToken = localStorage.getItem("accessToken");
      headers = {
        Authorization: `Bearer ${accessToken}`,
      };
    }
    const response = await axios(
      {
        url: requestURI,
        method,
        data: body,
        headers,
      },
      { responseType: "blob" }
    );

    return {
      isOk: true,
      data: new Blob([response.data]),
    };
  } catch (err) {
    return {
      isOk: false,
      ...err?.response?.data,
    };
  }
};

export default downloadFileRequest;
