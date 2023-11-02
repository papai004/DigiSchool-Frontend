import React from "react";
import { Select, Space } from "antd";
const handleChange = (value) => {
  console.log(value);
};

const SelectSection = () => (
  <Space wrap>
    <Select
      placeholder="select section"
      style={{
        width: 120,
        height: "40px",
        overflow: "auto",
      }}
      onChange={handleChange}
      options={[
        {
          value: "A",
          label: "A",
        },
        {
          value: "B",
          label: "B",
        },
        {
          value: "C",
          label: "C",
        },
        {
          value: "D",
          label: "D",
        },
        {
          value: "E",
          label: "E",
        },
      ]}
    />
  </Space>
);
export default SelectSection;
