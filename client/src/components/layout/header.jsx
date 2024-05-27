import React from "react";
import { Flex, Layout, Menu, Avatar, Dropdown, Typography, theme } from "antd";
import {
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./layout.css";
import { useNavigate } from "react-router-dom";
import { headerMenuItems } from "../../utils/constant";
import { clearCookies, getRandomColor } from "../../helpers/helper";
const { Header } = Layout;
const { Title } = Typography

const HeaderLayout = ({ collapsed, setCollapsed }) => {
  const userData = JSON.parse(sessionStorage.getItem("user") || "{}");
  const { username } = userData;
  const avatarText = username ? username.charAt(0).toUpperCase() : "";

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    clearCookies("remeber_me");
    navigate("/login");
  };

  const items = [
    { label: "Settings", key: "settings", icon: <SettingOutlined /> },
    {
      label: "Logout",
      key: "logout",
      icon: <LogoutOutlined />,
      onClick: handleLogout,
    },
  ];

  const boxStyle = {
    height: 65,
    borderRadius: 6,
  };

  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        background: '#001529'
      }}
    >
      <Flex
        gap="middle"
        style={boxStyle}
        justify="space-between"
        align="center"
        horizontal
      >
        <Flex gap={7} align="center" justify="space-between" >
          <UserOutlined style={{ Ncolor: 'white'}}/>
          <Title level={5} style={{ margin: 0, color: 'white'}}>Hello, {username}</Title>
        </Flex>
        <Dropdown menu={{ items }}>
          <Avatar style={{ backgroundColor: getRandomColor() }}>
            {avatarText}
          </Avatar>
        </Dropdown>
      </Flex>
    </Header>
  );
};

export default HeaderLayout;
