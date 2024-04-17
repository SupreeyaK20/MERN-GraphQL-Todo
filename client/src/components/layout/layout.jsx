import React from "react";
import { Layout } from "antd";
import HeaderLayout from "./header.jsx";
import FooterLayout from "./footer.jsx";
import { Navigate, Outlet, useLocation } from "react-router-dom";
const { Content } = Layout;

const Layouts = () => {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");

  return (
    <Layout>
      {isLoggedIn ? (
        <>
          <HeaderLayout />
          <Content>
            <Outlet />
          </Content>
          <FooterLayout />
        </>
      ) : (
        <Navigate to="/login" replace />
      )}
    </Layout>
  );
};

export default Layouts;
