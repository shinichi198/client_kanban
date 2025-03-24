import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";

const AuthRouter = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col d-none d-lg-block">
          <img
            style={{ width: "50" }}
            src="https://firebasestorage.googleapis.com/v0/b/kanban-37550.appspot.com/o/kanban-logo.png?alt=media&token=a080a81e-9663-46b6-829a-bab5a3be446b"
            alt=""
          />
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
