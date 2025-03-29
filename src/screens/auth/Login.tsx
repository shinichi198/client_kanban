import {
  Button,
  Card,
  Checkbox,
  Form,
  Input,
  message,
  Space,
  Typography,
} from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import SocialLogin from "./components/SocialLogin";
import handleAPI from "../../apis/handleAPI";
import { useDispatch } from "react-redux";
import { addAuth } from "../../redux/reducers/authReducer";
import { localDataNames } from "../../constants/appInfo";
const { Title, Paragraph, Text } = Typography;
const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRemember, setIsRemember] = useState(false);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const handleLogin = async (values: { email: string; password: string }) => {
    setIsLoading(true);
    const api = `/auth/login`;
    try {
      const user: any = await handleAPI(api, values, "post");
      if (user) {
        messageApi.success(user.message);
        dispatch(addAuth(user.data));
        localStorage.setItem(
          localDataNames.authData,
          JSON.stringify(user.data)
        );
      }
    } catch (error: any) {
      messageApi.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      {contextHolder}
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
            <Input.Password maxLength={100} />
          </Form.Item>
        </Form>
        <div className="row">
          <div className="col">
            <Checkbox
              checked={isRemember}
              onChange={(val) => setIsRemember(val.target.checked)}
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
        <SocialLogin isRemember={isRemember} />
        <div className="mt-4 text-center">
          <Space>
            <Text>Don't have an account?</Text>
            <Link to={"/sign-up"}>Sign up</Link>
          </Space>
        </div>
      </Card>
    </>
  );
};

export default Login;
