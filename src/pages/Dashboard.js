import React from "react";
import Cards from "../components/helper/Cards";
import { Row } from "antd";
import { FaUsers } from "react-icons/fa";
import { MdMoneyOff } from "react-icons/md";
import { FcPaid } from "react-icons/fc";
import "../components/styles/dashboard.css";
import AppLayout from "../layout/AppLayout";

function Dashboard() {

  return (
    <AppLayout title="Welcome to DigiSchool">
      <Row style={{marginTop: "1rem"}}>
        <Cards
          icon={
            <FaUsers
              style={{
                borderRadius: 20,
                color: "purple",
                backgroundColor: "rgb(117, 255, 79)",
              }}
            />
          }
          title="Total Students"
          value={6}
        />
        <Cards
          icon={
            <MdMoneyOff
              style={{
                borderRadius: 20,
                color: "blue",
                backgroundColor: "rgba(0,0,255,0.25)",
              }}
            />
          }
          title="Defaulters"
          value={6}
        />
        <Cards
          icon={
            <FcPaid
              style={{
                borderRadius: 20,
                color: "red",
                backgroundColor: "rgb(245, 83, 151)",
              }}
            />
          }
          title="Paid"
          value={2}
        />
      </Row>
    </AppLayout>
  );
}

export default Dashboard;
