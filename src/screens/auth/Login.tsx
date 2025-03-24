import { Button, Card, Checkbox, Form, Input, Typography } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SocialLogin from "./components/SocialLogin";
const { Title, Paragraph, Text } = Typography;
const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRemember, setIsRemember] = useState(false);
  const [form] = Form.useForm();
  const handleLogin = (values: { email: string; password: string }) => {
    console.log(values);
  };
  return (
    <>
      <Card>
        <div className="text-center">
          <Title level={2}>Log in to your account</Title>
          <Paragraph type="secondary">
            Welcom back! please enter your details
          </Paragraph>
        </div>
        <Form
          layout="vertical"
          form={form}
          onFinish={handleLogin}
          disabled={isLoading}
          size="large"
        >
          <Form.Item
            name={"email"}
            label="Email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <Input allowClear placeholder="Enter your email" maxLength={100} />
          </Form.Item>
          <Form.Item
            name={"password"}
            label="Password"
            rules={[
              {
                required: true,
                message: "Plase enter your password",
              },
            ]}
          >
            <Input.Password allowClear maxLength={100} />
          </Form.Item>
        </Form>
        <div className="row">
          <div className="col">
            <Checkbox
              value={isRemember}
              onChange={(val) => setIsRemember(val.target.value)}
            >
              Remember
            </Checkbox>
          </div>
          <div className="col text-end">
            <Link to={"/"}>Forgot password</Link>
          </div>
        </div>
        <div className="mt-4 mb-3">
          <Button
            type="primary"
            onClick={() => form.submit()}
            size="large"
            style={{ width: "100%" }}
          >
            Login
          </Button>
        </div>
        <SocialLogin />
      </Card>
    </>
  );
};

export default Login;
