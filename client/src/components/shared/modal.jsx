import React, { useState } from "react";
import { Modal, Button, Form, Input, Checkbox } from "antd";

const OpenModal = ({ modalOpen, setModalOpen }) => {
  const [form] = Form.useForm(); 

  const onCreate = async (values) => {
    console.log("Received values of form: ", values);
    // Here, you can handle form submission logic
    setModalOpen(false);
  };

  return (
    <Modal
      title="Add Todo"
      centered
      open={modalOpen} 
      onCancel={() => setModalOpen(false)}
      okText="Create"
      cancelText="Cancel"
      okButtonProps={{
        autoFocus: true,
      }}
      destroyOnClose
      onOk={async () => {
        try {
          const values = await form.validateFields();
          form.resetFields(); 
          onCreate(values); 
        } catch (error) {
          console.log("Failed:", error);
        }
      }}
    >
      <Form
        form={form} 
        layout="vertical"
        name="form_in_modal"
        initialValues={{ isCompleted: false }} 
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
              message: "Please input the title of collection!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item name="isCompleted" valuePropName="checked" noStyle>
          <Checkbox>Is Completed?</Checkbox>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default OpenModal;
