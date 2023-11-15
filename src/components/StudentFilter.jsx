import { Cascader, notification } from "antd";
import { useEffect, useState } from "react";
import networkRequest from "../lib/apis/networkRequest";

const StudentFilter = () => {
  const [standardData, setStandardData] = useState([]);

  const options = Array.from({ length: standardData.length }, (_, index) => ({
    label: standardData[index].standard_name,
    value: standardData[index].standard_name,
    children: standardData[index].sections.map((section, sectionIndex) => ({
      label: section.label,
      value: section.label,
    })),
  }));

  useEffect(() => {
    const getStandardList = async () => {
      try {
        const { isOk, message, data } = await networkRequest(
          "/standard/get_standards_list",
          "POST",
          {},
          true
        );
        if (isOk) {
          setStandardData(data);
        } else {
          notification.error({
            message : message || "Something went wrong :(",
          });
        }
      } catch (err) {
        console.log("Error =", err);
      }
    };
    getStandardList();
  }, []);

  const onChange = (value) => {
    console.log(value);
  };

  return (
    <Cascader
      placeholder="select standard and section"
      style={{
        width: "100%",
        height: "40px",
      }}
      options={options}
      onChange={onChange}
      multiple
      maxTagCount="responsive"
    />
  );
};

export default StudentFilter;
