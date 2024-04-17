import React from 'react';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { gql, useMutation } from '@apollo/client';
import { REGISTER_USER } from '../../api/mutations/userMutation';

const Registration = () => {
  const [registerUser] = useMutation(REGISTER_USER);

  const onFinish = async (values) => {
    try {
      const { email, password } = values;
      // Call the GraphQL mutation with the form values
      const { data } = await registerUser({ variables: { email, password } });
      console.log("Data", data);
      message.success(`Successfully registered with email: ${data.register.email}`);
      // You can redirect the user or perform other actions after successful registration
    } catch (error) {
      console.error('Registration failed:', error);
      message.error('Registration failed. Please try again.');
      // Handle registration failure, if needed
    }
  };
  return (
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
        remember: true,
      }}
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input type='email'/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
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
        <Checkbox>Remember me</Checkbox>
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
  );
};

export default Registration;
