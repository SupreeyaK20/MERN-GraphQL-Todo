import React from "react";
import { Layout, Menu, theme } from "antd";
import HeaderLayout from "./header.jsx";
import FooterLayout from "./footer.jsx";
import { Navigate, Outlet, useLocation } from "react-router-dom";
const { Content, Sider } = Layout;
import SliderLayout from "./slider.jsx";

const Layouts = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  const isLoggedIn = sessionStorage.getItem("isLoggedIn");

  return (
    <Layout>
      {isLoggedIn ? (
        <>
          <HeaderLayout collapsed={collapsed} setCollapsed={setCollapsed} />
          <Layout>
            <SliderLayout collapsed={collapsed} />
            <Layout style={{ marginLeft: '12rem'}}>
              <Content >
                <Outlet />
              </Content>
            <FooterLayout/>
            </Layout>
          </Layout>
        </>
      ) : (
        <Navigate to="/login" replace />
      )}
    </Layout>
  );
};

export default Layouts;
