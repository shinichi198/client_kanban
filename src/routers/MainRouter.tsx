import React from "react";
import { Button, Layout, message } from "antd";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  HomeScreen,
  Inventory,
  ManageStore,
  Orders,
  ReportScreen,
  Suppliers,
} from "../screens";
import { HeaderComponent, SiderComponent } from "../components";

const { Content, Footer, Header, Sider } = Layout;
const MainRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <SiderComponent />
        <Layout>
          <HeaderComponent />
          <Content className="mt-3 mb-2 container bg-white">
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/report" element={<ReportScreen />} />
              <Route path="/supplier" element={<Suppliers />} />
              <Route path="/order" element={<Orders />} />
              <Route path="/manage-store" element={<ManageStore />} />
              <Route path="/inventory" element={<Inventory />} />
            </Routes>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default MainRouter;
