import { Card, Space, Statistic } from "antd";
import React from "react";

function Cards(props) {
  return (
    <Card
      bordered={false}
      style={{
        width: "100%",
        minHeight: 200,
      }}
    >
      <Space direction="horizontal" style={{ fontSize: 24 }}>
        {props.icon}
        <Statistic title={props.title} value={props.value} />
      </Space>
    </Card>
  );
}

export default Cards;
