import React, { useEffect, useState } from "react";
import AppLayout from "../layout/AppLayout";
import qs from "qs";
import { Table, Input, Row, Col, Button } from "antd";
import { SearchOutlined, DownloadOutlined } from "@ant-design/icons";
import styles from "../components/styles/manage.module.css";
import StudentFilter from "../components/helper/StudentFilter";
import AddStudent from '../components/modal/StudentAddModal';

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
  const fetchData = () => {
    setLoading(true);
    fetch(
      `https://randomuser.me/api?${qs.stringify(
        getRandomuserParams(tableParams)
      )}`
    )
      .then((res) => res.json())
      .then(({ results }) => {
        setData(results);
        setLoading(false);
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: 200,
            // 200 is mock data, you should read it from server
            // total: data.totalCount,
          },
        });
      });
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
          <AddStudent />
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
