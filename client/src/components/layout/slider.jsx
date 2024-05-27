import React from "react";
import { Avatar, Flex, Layout, Menu, Space } from "antd";
const { Sider } = Layout;
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const SliderLayout = ({ collapsed }) => {
  const userData = JSON.parse(sessionStorage.getItem("user") || "{}");
  const { username } = userData;
  return (
    <Sider width={200} style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
         
        }}>
      <div className="demo-logo-vertical" />

      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: "nav 1",
          },
          {
            key: "2",
            icon: <VideoCameraOutlined />,
            label: "nav 2",
          },
          {
            key: "3",
            icon: <UploadOutlined />,
            label: "nav 3",
          },
        ]}
        style={{
          marginTop: "1rem"
        }}
      />
    </Sider>
  );
};

export default SliderLayout;
