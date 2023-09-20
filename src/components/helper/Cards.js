import { Card } from "antd";
import React from "react";

function Cards(props) {
  return (
    <Card size="small" style={{ width: 300, marginLeft: "1rem" }}>
      <p>{ props.title }</p>
    </Card>
  );
}

export default Cards;
