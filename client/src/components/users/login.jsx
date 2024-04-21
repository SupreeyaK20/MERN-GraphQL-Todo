import React, { useState } from "react";
import { Button, Card, Checkbox, Form, Input, message, Typography } from "antd";
import { gql, useMutation } from "@apollo/client";
import { LOGIN } from "../../api/mutations/userMutation";
import { useNavigate } from "react-router-dom";
import { setCookies } from "../../helpers/helper";

const { Title } = Typography;

const Login = () => {
  const navigate = useNavigate();
  const [loginUser] = useMutation(LOGIN);
  const [rememberMe, setRememberMe] = useState(false)

  const onFinish = async (values) => {
    try {
      const { email, password } = values;
      const { data } = await loginUser({ variables: { email, password } });
      
      sessionStorage.setItem('token', data.login.token);
      sessionStorage.setItem('isLoggedIn', true);
      sessionStorage.setItem("user", JSON.stringify(data.login.user));

      if (rememberMe) {
        setCookies('remeber_me', data.login.token, 30)
      }

      const userName = data.login.user.username 
      message.success(
      `Hey, ${userName.charAt(0).toUpperCase() + userName.slice(1)}!`
      );
      
      navigate("/");
    } catch (error) {
      message.error(error.message);
    }
  };
  return (
    <div className="container">
      <Card className="card" hoverable>
        <Title level={4}>Login</Title>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: rememberMe,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input type="email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox onChange={(e) => setRememberMe(e.target.checked)}>Remember Me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
