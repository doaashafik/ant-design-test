import React from "react";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import './Header.scss'
export const Header = ({ collapsed, toggle }) => {
  return (
    <Layout.Header className="site-layout-background">
      {React.createElement(
        collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
        {
          className: "trigger",
          onClick: toggle,
        }
      )}
    </Layout.Header>
  );
};
