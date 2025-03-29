import React from "react";
import { Button, message } from "antd";
import { auth } from "../firebase/firebaseConfig";
const MainRouter = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const info = () => {
    messageApi.info(`sdfsdfsdfsd`);
  };
  return (
    <>
      {contextHolder}
      <Button onClick={() => auth.signOut()}>sldkfjds</Button>
    </>
  );
};

export default MainRouter;
