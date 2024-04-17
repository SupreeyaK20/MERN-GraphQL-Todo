import React from 'react'
import { Layout } from 'antd';
const { Footer } = Layout;

const FooterLayout = () => {
  return (
    <Footer>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
  )
}

export default FooterLayout