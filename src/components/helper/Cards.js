import { Card, Space, Statistic } from "antd";
import React from "react";

function Cards(props) {
  return (
    <Card style={{ width: 300, marginLeft: "1rem"}}>
      <Space direction="horizontal" style={{ fontSize: 24}}>
        {props.icon}
        <Statistic title={props.title} value={props.value} />
      </Space>
    </Card>
  );
}

export default Cards;
