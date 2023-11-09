import React, { useEffect, useState } from "react";
import AppLayout from "../layout/AppLayout";
import { MdOutlineBloodtype } from "react-icons/md";
import { Table, Input, Row, Col, Button, notification, Empty } from "antd";
import { SearchOutlined, DownloadOutlined, EditOutlined } from "@ant-design/icons";
import styles from "../styles/manage.module.css";
import StudentFilter from "../components/StudentFilter";
import AddStudent from "../components/modal/StudentAddModal";
import networkRequest from "../lib/apis/networkRequest";

const ManageStudent = () => {

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "_id",
    },
    {
      title: "ParentName",
      dataIndex: "parentName",
      key: "_id",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      width: "10%",
      key: "_id",
    },
    {
      title: "Standard",
      dataIndex: "standard",
      width: "10%",
      key: "_id",
    },
    {
      title: "Section",
      dataIndex: "section",
      width: "10%",
      key: "_id",
    },
    {
      title: "Roll",
      dataIndex: "roll",
      width: "7%",
      key: "_id",
    },
    {
      title: "MobileNo",
      dataIndex: "mobileNo",
      key: "_id",
    },
    {
      title: <MdOutlineBloodtype/>,
      dataIndex: "bloodGroup",
      width: "7%",
      key: "_id",
    },
    {
      title: "Edit",
      dataIndex: "",
      width: "6%",
      key: "_id",
      render: () => <Button onClick={() =>editHandler()} icon={<EditOutlined />}/>,
    },
  ];

  const editHandler = (values) => {
    console.log("Values to be edited",values);
  }
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [studentDetails, setStudentDetails] = useState(null);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  console.log("data =", data); 

  const postSutdentDataHandler = async (values) => {
    const reqBody = {
      name: values.name,
      parentName: values.parentName,
      gender: values.gender,
      standard: values.standard,
      section: values.section,
      roll: values.roll,
      mobileNo: values.mobileNo,
      address: values.address,
      bloodGroup: values.bloodGroup,
    };
    try {
      const { isOk, message } = await networkRequest(
        "/student/create_student",
        "POST",
        reqBody,
        true
      );
      if (!isOk) {
        notification.error({
          message,
        });
      } else {
        getStudentList();
        notification.success({
          message,
        });
      }
    } catch (err) {
      console.log("Error =", err);
    }
  };

  const getStudentList = async () => {
    setLoading(true);
    try {
      const { isOk, message, data } = await networkRequest(
        "/student/get_students_by_school",
        "POST",
        {
          page: `${tableParams.pagination.current}`,
          size: `${tableParams.pagination.pageSize}`,
        },
        true
      );
      if (isOk) {
        setData(data.studentList);
        setStudentDetails(prevState => ({
          ...prevState,
          data: data.studentList,
        }));
        setLoading(false);
        setTableParams(prevState => ({
          ...prevState,
          pagination: {
            ...prevState.pagination,
            total: data.count,
          },
        }));
      } else {
        notification.error({
          message,
        });
        setLoading(false);
      }
    } catch (err) {
      console.log("Error =", err);
      setLoading(false);
    }
  };

  const handleTableChange = (pagination) => {
    setTableParams({
      pagination,
    });
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

  const searchHandler = (data) => {
    data.preventDefault();
  };

  useEffect(() => {
    getStudentList();
  // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [JSON.stringify(tableParams),tableParams.pagination.total]);

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
            onClick={searchHandler}
          >
            Search
          </Button>
          <AddStudent sutdentData={postSutdentDataHandler} />
          <Button type="primary" className={styles.filter__items}>
            <DownloadOutlined />
          </Button>
        </Row>
      </div>
      {!data ? (
        <Empty />
      ) : (
        <Table
          size="small"
          style={{ marginLeft: "1rem", marginRight: "1rem"}}
          columns={columns}
          dataSource={data}
          pagination={tableParams.pagination}
          loading={loading}
          scroll={{
            y: 420,
          }}
          onChange={handleTableChange}
        />
      )}
    </AppLayout>
  );
};
export default ManageStudent;
