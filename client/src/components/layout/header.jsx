import React from "react";
import { Layout, Menu, theme } from "antd";
const { Header } = Layout;

const HeaderLayout = () => {
  const items = new Array(3).fill(null).map((_, index) => ({
    key: String(index + 1),
    label: `nav ${index + 1}`,
  }));
  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
      }}
    >
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={items}
      />
    </Header>
  );
};

export default HeaderLayout;
