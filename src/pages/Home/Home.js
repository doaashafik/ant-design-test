import React from "react";
import { SideBar } from "../../components/SideBar/SideBar";
import { Layout } from "antd";
import { Slider } from "../../components/Slider/Slider";
import { LayoutState } from "../../components/Layout/Layout";
import { Header } from "../../components/Header/Header";
import './Home.scss'
const Home = () => {
  return (
    <Layout theme={"light"} className="home-container">
      <LayoutState>
        {({ collapsed, toggle }) => (
          <>
            <SideBar collapsed={collapsed} />
            <Layout className="site-layout">
              <Header collapsed={collapsed} toggle={toggle} />
              <Layout.Content
                className="site-layout-background">
                <h1 className="text-center">Welcome</h1>
                <Slider />
              </Layout.Content>
            </Layout>
          </>
        )}
      </LayoutState>
    </Layout>
  );
};
export default Home;
