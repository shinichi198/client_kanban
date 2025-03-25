import { Button, Card, Form, Input, Space, Typography } from "antd";
import React, { useState } from "react";
import SocialLogin from "./components/SocialLogin";
import { Link } from "react-router-dom";
const { Title, Text, Paragraph } = Typography;
const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleSigup = (values: {
    name: string;
    email: string;
    passowrd: string;
  }) => {
    console.log(values);
  };
  const [form] = Form.useForm();
  return (
    <>
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
            ]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>
        </Form>
        <div className="mt-4 mb-3">
          <Button
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
