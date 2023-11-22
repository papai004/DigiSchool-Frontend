import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {

    const navigate = useNavigate();

    const backButtonHandler = (e) => {
        e.preventDefault();
        navigate("/");
    }
  return (
    <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button onClick={backButtonHandler} type="primary">Back Home</Button>}
  />
  )
}

export default PageNotFound;
