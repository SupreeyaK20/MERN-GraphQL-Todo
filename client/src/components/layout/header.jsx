import React from "react";
import { Flex, Layout, Menu, Avatar, Dropdown } from "antd";
import { LogoutOutlined, SettingOutlined } from "@ant-design/icons";
import "./layout.css";
import { useNavigate } from "react-router-dom";
import { headerMenuItems } from "../../utils/constant";
import { clearCookies, getRandomColor } from "../../helpers/helper";
const { Header } = Layout;

const HeaderLayout = () => {
  const userData = JSON.parse(sessionStorage.getItem("user") || "{}");
  const { username } = userData;
  const avatarText = username ? username.charAt(0).toUpperCase() : "";

  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    clearCookies('remeber_me')
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

  return (
    <Header className="header">
      <Flex justify="space-between">
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={headerMenuItems}
          className="menu"
        />
        <Dropdown menu={{ items }}>
          <Avatar
            className="avatar"
            style={{ backgroundColor: getRandomColor() }}
          >
            {avatarText}
          </Avatar>
        </Dropdown>
      </Flex>
    </Header>
  );
};

export default HeaderLayout;
