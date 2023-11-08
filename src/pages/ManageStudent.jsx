import React, { useEffect, useState } from "react";
import AppLayout from "../layout/AppLayout";
import qs from "qs";
import { Table, Input, Row, Col, Button, notification } from "antd";
import { SearchOutlined, DownloadOutlined } from "@ant-design/icons";
import styles from "../styles/manage.module.css";
import StudentFilter from "../components/StudentFilter";
import AddStudent from '../components/modal/StudentAddModal';
import networkRequest from "../lib/apis/networkRequest";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    render: (name) => `${name.first} ${name.last}`,
  },
  {
    title: "Gender",
    dataIndex: "gender",
    width: "10%",
  },
  {
    title: "Standard",
    dataIndex: "standard",
    width: "10%",
  },
  {
    title: "Section",
    dataIndex: "section",
    width: "10%",
  },
  {
    title: "PhoneNo",
    dataIndex: "phoneNo",
  },
  {
    title: "Edit",
    dataIndex: "edit",
  },
];
const getRandomuserParams = (params) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});
const Manage = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const fetchData = async () => {
    setLoading(true);
    
    try {
      const response = await fetch(`https://randomuser.me/api?${qs.stringify(getRandomuserParams(tableParams))}`);
      const data = await response.json();
      
      setData(data.results);
      setLoading(false);
      setTableParams({
        ...tableParams,
        pagination: {
          ...tableParams.pagination,
          total: 200, // 200 is mock data, you should read it from the server
          // total: data.totalCount,
        },
      });
    } catch (error) {
      console.error('An error occurred:', error);
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(tableParams)]);
  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

  const onChangeHandler = (data) => {
    data.preventDefault();
    console.log(data);
  };

  const postSutdentDataHandler = async(values) => {
    const reqBody = {
      name: values.name,
      parentName: values.parentName,
      gender: values.gender,
      standard: values.standard,
      section: values.section,
      roll: values.roll,
      mobileNo: values.mobileNo,
      address: values.address,
      bloodGroup: values.bloodGroup
    };
    try {
      const { isOk, message } = await networkRequest(
        "/student//create_student",
        "POST",
        reqBody,
        true
      );
      if (!isOk) {
        notification.error({
          message,
        });
      } else {
        // getStandardList();
        notification.success({
          message
        });
      }
    } catch (err) {
      console.log("Error =", err);
    }
  }
  return (
    <AppLayout title="Students Details">
      <div className={styles.filter}>
        <Row>
          <Col span={10} className={styles.filter__items}>
            <Input
              placeholder="type something"
              className={styles.filter__items}
            />
          </Col>
          <Col span={8}>
          <StudentFilter />
          </Col>
          <Button
            type="primary"
            icon={<SearchOutlined />}
            className={styles.filter__items}
            style={{ marginLeft: ".5rem" }}
            onClick={onChangeHandler}
          >
            Search
          </Button>
          <AddStudent sutdentData={postSutdentDataHandler}/>
      <Button type="primary" className={styles.filter__items}>
      <DownloadOutlined />
      </Button>
        </Row>
      </div>
      <Table
      size="small"
        style={{ marginLeft: "1rem", marginRight: "1rem" }}
        columns={columns}
        rowKey={(record) => record.login.uuid}
        dataSource={data}
        pagination={tableParams.pagination}
        loading={loading}
        scroll={{
          y: 456,
        }}
        onChange={handleTableChange}
      />
    </AppLayout>
  );
};
export default Manage;
