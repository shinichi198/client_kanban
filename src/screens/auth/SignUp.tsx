import { Button, Card, Form, Input, message, Space, Typography } from "antd";
import React, { useState } from "react";
import SocialLogin from "./components/SocialLogin";
import { Link } from "react-router-dom";
import handleAPI from "../../apis/handleAPI";
import { useDispatch } from "react-redux";
import { addAuth } from "../../redux/reducers/authReducer";
import { localDataNames } from "../../constants/appInfo";
const { Title, Text, Paragraph } = Typography;
const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const handleSigup = async (values: {
    name: string;
    email: string;
    passowrd: string;
  }) => {
    setIsLoading(true);
    const api = `/auth/register`;
    try {
      const res: any = await handleAPI(api, values, "post");
      if (res.data) {
        messageApi.error(res.message);
        //localStorage.setItem(localDataNames.authData, JSON.stringify(res.data));
        dispatch(addAuth(res.data));
      }
    } catch (error: any) {
      console.log(error.message);
      messageApi.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  const [form] = Form.useForm();
  return (
    <>
      {contextHolder}
      <Card>
        <div className="text-center">
          <img
            style={{ width: 48, height: 48 }}
            src="https://firebasestorage.googleapis.com/v0/b/kanban-37550.appspot.com/o/kanban-logo.png?alt=media&token=a080a81e-9663-46b6-829a-bab5a3be446b"
            alt=""
          />
          <Title>Create an account</Title>
          <Paragraph type="secondary">
            Start your 30 - day free trial.
          </Paragraph>
        </div>
        <Form
          layout="vertical"
          onFinish={handleSigup}
          disabled={isLoading}
          size="large"
          form={form}
        >
          <Form.Item
            name={"name"}
            label="Name"
            rules={[
              {
                required: true,
                message: "Please enter your name",
              },
            ]}
          >
            <Input allowClear placeholder="Please enter your name" />
          </Form.Item>
          <Form.Item
            name={"email"}
            label="Email"
            rules={[
              {
                required: true,
                message: "Please enter your email",
              },
            ]}
          >
            <Input allowClear type="email" placeholder="Enter your email" />
          </Form.Item>
          <Form.Item
            name={"password"}
            label="Password"
            rules={[
              {
                required: true,
                message: "Enter your password",
              },
              () => ({
                validator: (_, value) => {
                  if (value.length < 6) {
                    return Promise.reject(
                      new Error("Mat khau phai chua it nhat 6 ki tu")
                    );
                  } else {
                    return Promise.resolve();
                  }
                },
              }),
            ]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>
        </Form>
        <div className="mt-4 mb-3">
          <Button
            loading={isLoading}
            type="primary"
            style={{ width: "100%" }}
            size="large"
            onClick={() => form.submit()}
          >
            Get started
          </Button>
        </div>
        <SocialLogin />
        <div className="mt-3 text-center">
          <Space>
            <Text>Already have a account?</Text>
            <Link to={"/"}>Login</Link>
          </Space>
        </div>
      </Card>
    </>
  );
};

export default SignUp;
