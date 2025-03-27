import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Login, SignUp } from "../screens/auth";
import { Typography } from "antd";
const { Text, Title } = Typography;
const AuthRouter = () => {
  return (
    <div className="container-fluid">
      <div className="row text-center">
        <div className="col d-none d-lg-block content-center">
          <div className="mb-4">
            <img
              style={{ width: 256, height: 256, objectFit: "cover" }}
              src="https://firebasestorage.googleapis.com/v0/b/kanban-37550.appspot.com/o/kanban-logo.png?alt=media&token=a080a81e-9663-46b6-829a-bab5a3be446b"
              alt=""
            />
          </div>
          <div>
            <Title>KANBAN</Title>
          </div>
        </div>
        <div className="col content-center">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default AuthRouter;
