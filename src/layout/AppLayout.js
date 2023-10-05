import React from "react";
import Header from "../components/navs/Header.js";
import Footer from "../components/navs/Footer.js";
import Sidebar from "../components/sidebar/Sidebar.js";
import { Layout, theme } from "antd";


const AppLayout = (props) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sidebar />
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
          title="Dashboard"
        />
        {props.children}
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default AppLayout;
