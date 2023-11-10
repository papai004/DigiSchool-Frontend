import React, { useEffect, useState } from "react";
import { MdOutlineBloodtype } from "react-icons/md";
import {
  Table,
  Input,
  Row,
  Col,
  Button,
  notification,
  Empty,
} from "antd";
import {
  SearchOutlined,
  DownloadOutlined,
  EditOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import AppLayout from "../layout/AppLayout";
import styles from "../styles/manage.module.css";
import StudentFilter from "../components/StudentFilter";
import networkRequest from "../lib/apis/networkRequest";
import AddStudentModal from "../components/modal/AddStudentModal";
import EditStudentModal from "../components/modal/EditStudentModal";

const ManageStudent = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "ParentName",
      dataIndex: "parentName",
      key: "parentName",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      width: "10%",
      key: "gender",
    },
    {
      title: "Standard",
      dataIndex: "standard",
      width: "10%",
      key: "standard",
    },
    {
      title: "Section",
      dataIndex: "section",
      width: "10%",
      key: "section",
    },
    {
      title: "Roll",
      dataIndex: "roll",
      width: "7%",
      key: "roll",
    },
    {
      title: "MobileNo",
      dataIndex: "mobileNo",
      key: "mobileNo",
    },
    {
      title: <MdOutlineBloodtype />,
      dataIndex: "bloodGroup",
      width: "7%",
      key: "bloodGroup",
    },
    {
      title: "Edit",
      dataIndex: "",
      width: "6%",
      key: "_id",
      render: (_id) => (
        <Button onClick={() => editHandler(_id)} icon={<EditOutlined />} />
      ),
    },
  ];

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [studentDetails, setStudentDetails] = useState(null);
  const [indexSearchText, setIndexSearchText] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [dataToSendForEdit, setDataToSendForEdit] = useState([]);
  const [editData, setEditData] = useState({
    standard: "",
    section: "",
    roll: "",
  });

  // console.log("First =", editData);

  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

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

    console.log("Values for creating =", reqBody);
    try {
      const { isOk, message } = await networkRequest(
        "/student/create_student",
        "POST",
        reqBody,
        true
      );
      if (!isOk) {
        notification.error({
          message : message || "Something went wrong :(",
        });
      } else {
        setIsAddModalOpen(false)
        notification.success({
          message,
        });
        getStudentList();
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
          searchString: indexSearchText,
          page: `${tableParams.pagination.current}`,
          size: `${tableParams.pagination.pageSize}`,
        },
        true
      );
      if (isOk) {
        setData(data.studentList);
        setStudentDetails((prevState) => ({
          ...prevState,
          data: data.studentList,
        }));
        setLoading(false);
        setTableParams((prevState) => ({
          ...prevState,
          pagination: {
            ...prevState.pagination,
            total: data.count,
          },
        }));
      } else {
        setData([]);
        notification.error({
          message: message || "Something went wrong :("
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

  const textIndexSearchHandler = (event) => {
    const searchString = event.target.value;
    setIndexSearchText(searchString);
  };

  const searchHandler = (data) => {
    data.preventDefault();
  };

  const editHandler = (values) => {
    setEditData({
      standard: values.standard,
      section: values.section,
      roll: values.roll,
    });
    setDataToSendForEdit(values);
    setIsEditModalOpen(true);
  };

  const editModalCancleHandler = () => {
    setIsEditModalOpen(false);
  };

  const editedDataHandler = async (values) => {
    const reqBody = {
      standard: editData.standard,
      section: editData.section,
      roll: editData.roll,
      parentNameToUpdate: values.parentName,
      mobileNoToUpdate: values.mobileNo,
      addressToUpdate: values.address,
      standardToUpdate: values.standard,
      sectionToUpdate: values.section,
      rollToUpdate: values.roll,
    };
    console.log("ReqBody", reqBody);
    try {
      const { isOk, message } = await networkRequest(
        "/student/update_student",
        "POST",
        reqBody,
        true
      );
      if (!isOk) {
        notification.error({
          message,
        });
      } else {
        notification.success({
          message,
        });
        getStudentList();
        setIsEditModalOpen(false);
      }
    } catch (err) {
      console.log("Error =", err);
    }
  };

  useEffect(() => {
    const getData = setTimeout(() => {
      getStudentList();
    }, 1000);
    return () => clearTimeout(getData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [indexSearchText]);

  useEffect(() => {
    getStudentList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(tableParams), tableParams.pagination.total]);

  return (
    <AppLayout title="Students Details">
      <div className={styles.filter}>
        <Row>
          <Col span={10} className={styles.filter__items}>
            <Input
              onChange={textIndexSearchHandler}
              placeholder="type something"
              className={styles.filter__items}
            />
          </Col>
          <Col span={5}>
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
          <div>
            <Button
              style={{ width: "80px", marginRight: ".5rem", height: "40px" }}
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => {
                setIsAddModalOpen(true);
              }}
            >
              Add
            </Button>
            <AddStudentModal
              open={isAddModalOpen}
              dataToSend={postSutdentDataHandler}
              onCancel={() => {
                setIsAddModalOpen(false);
              }}
            />
          </div>
          {isEditModalOpen && (
            <EditStudentModal
              open={isEditModalOpen}
              onCancel={editModalCancleHandler}
              dataToSend={dataToSendForEdit}
              payloadData={editedDataHandler}
            />
          )}
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
          style={{ marginLeft: "1rem", marginRight: "1rem" }}
          columns={columns}
          dataSource={data}
          pagination={tableParams.pagination}
          loading={loading}
          scroll={{
            y: 445,
          }}
          onChange={handleTableChange}
        />
      )}
    </AppLayout>
  );
};
export default ManageStudent;
