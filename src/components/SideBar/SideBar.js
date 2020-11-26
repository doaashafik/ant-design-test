import React from "react";
import { Layout, Menu } from "antd";
import { UserOutlined, VideoCameraOutlined, BehanceSquareOutlined } from "@ant-design/icons";
import './SideBar.scss'
export const SideBar = ({ collapsed }) => {
    return (
      <Layout.Sider theme ="light" breakpoint="md"
      collapsedWidth="0" trigger={null} collapsible collapsed={collapsed}>
        <BehanceSquareOutlined className="logo"/>
        <Menu mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            About Us
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            Videos
          </Menu.Item>
        </Menu>
      </Layout.Sider>
    );
}
