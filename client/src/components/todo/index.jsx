import React, { useState } from "react";
import { Form, Input, Card } from "antd";

const Todo = () => {
  const maxChars = 3;
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
    if (inputValue.length < maxChars && inputValue.length > 0) {
      setErrorMessage(`At least ${maxChars} characters`);
    } else {
      setErrorMessage("");
    }
  };

  const validateStatus =
    inputValue.length === 0
      ? ""
      : errorMessage
      ? "error"
      : inputValue.length === maxChars
      ? "success"
      : "";

  return (
    // <Form
    //   name="trigger"
    //   style={{
    //     maxWidth: 600,
    //   }}
    //   layout="vertical"
    //   autoComplete="off"
    // >
    //   <Form.Item
    //     hasFeedback
    //     label="Field B"
    //     name="field_b"
    //     validateStatus={validateStatus}
    //     rules={[{ max: 3 }]}
    //     help={errorMessage}
    //   >
    //     <Input
    //       placeholder={`Enter at least ${maxChars} characters`}
    //       onChange={handleChange}
    //       maxLength={maxChars}
    //     />
    //   </Form.Item>
    // </Form>
    <>
     <Card
      className="card"
      style={{
        width: "93%",
        margin: "3rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
        <Form
      name="trigger"
      style={{
        maxWidth: 600,
      }}
      layout="vertical"
      autoComplete="off"
    >
      <Form.Item
        hasFeedback
        label="Field B"
        name="field_b"
        validateStatus={validateStatus}
        rules={[{ max: 3 }]}
        help={errorMessage}
      >
        <Input
          placeholder={`Enter at least ${maxChars} characters`}
          onChange={handleChange}
          maxLength={maxChars}
        />
      </Form.Item>
    </Form>
    </Card>
    <Card
    className="card"
    style={{
      width: "93%",
      margin: "3rem",
      display: "flex",
      flexDirection: "column",
    }}
  >
      <Form
    name="trigger"
    style={{
      maxWidth: 600,
    }}
    layout="vertical"
    autoComplete="off"
  >
    <Form.Item
      hasFeedback
      label="Field B"
      name="field_b"
      validateStatus={validateStatus}
      rules={[{ max: 3 }]}
      help={errorMessage}
    >
      <Input
        placeholder={`Enter at least ${maxChars} characters`}
        onChange={handleChange}
        maxLength={maxChars}
      />
    </Form.Item>
  </Form>
  </Card>
  <Card
      className="card"
      style={{
        width: "93%",
        margin: "3rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
        <Form
      name="trigger"
      style={{
        maxWidth: 600,
      }}
      layout="vertical"
      autoComplete="off"
    >
      <Form.Item
        hasFeedback
        label="Field B"
        name="field_b"
        validateStatus={validateStatus}
        rules={[{ max: 3 }]}
        help={errorMessage}
      >
        <Input
          placeholder={`Enter at least ${maxChars} characters`}
          onChange={handleChange}
          maxLength={maxChars}
        />
      </Form.Item>
    </Form>
    </Card>
    <Card
    className="card"
    style={{
      width: "93%",
      margin: "3rem",
      display: "flex",
      flexDirection: "column",
    }}
  >
      <Form
    name="trigger"
    style={{
      maxWidth: 600,
    }}
    layout="vertical"
    autoComplete="off"
  >
    <Form.Item
      hasFeedback
      label="Field B"
      name="field_b"
      validateStatus={validateStatus}
      rules={[{ max: 3 }]}
      help={errorMessage}
    >
      <Input
        placeholder={`Enter at least ${maxChars} characters`}
        onChange={handleChange}
        maxLength={maxChars}
      />
    </Form.Item>
  </Form>
  </Card>
  <Card
      className="card"
      style={{
        width: "93%",
        margin: "3rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
        <Form
      name="trigger"
      style={{
        maxWidth: 600,
      }}
      layout="vertical"
      autoComplete="off"
    >
      <Form.Item
        hasFeedback
        label="Field B"
        name="field_b"
        validateStatus={validateStatus}
        rules={[{ max: 3 }]}
        help={errorMessage}
      >
        <Input
          placeholder={`Enter at least ${maxChars} characters`}
          onChange={handleChange}
          maxLength={maxChars}
        />
      </Form.Item>
    </Form>
    </Card>
    <Card
    className="card"
    style={{
      width: "93%",
      margin: "3rem",
      display: "flex",
      flexDirection: "column",
    }}
  >
      <Form
    name="trigger"
    style={{
      maxWidth: 600,
    }}
    layout="vertical"
    autoComplete="off"
  >
    <Form.Item
      hasFeedback
      label="Field B"
      name="field_b"
      validateStatus={validateStatus}
      rules={[{ max: 3 }]}
      help={errorMessage}
    >
      <Input
        placeholder={`Enter at least ${maxChars} characters`}
        onChange={handleChange}
        maxLength={maxChars}
      />
    </Form.Item>
  </Form>
  </Card>
  <Card
      className="card"
      style={{
        width: "93%",
        margin: "3rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
        <Form
      name="trigger"
      style={{
        maxWidth: 600,
      }}
      layout="vertical"
      autoComplete="off"
    >
      <Form.Item
        hasFeedback
        label="Field B"
        name="field_b"
        validateStatus={validateStatus}
        rules={[{ max: 3 }]}
        help={errorMessage}
      >
        <Input
          placeholder={`Enter at least ${maxChars} characters`}
          onChange={handleChange}
          maxLength={maxChars}
        />
      </Form.Item>
    </Form>
    </Card>
    <Card
    className="card"
    style={{
      width: "93%",
      margin: "3rem",
      display: "flex",
      flexDirection: "column",
    }}
  >
      <Form
    name="trigger"
    style={{
      maxWidth: 600,
    }}
    layout="vertical"
    autoComplete="off"
  >
    <Form.Item
      hasFeedback
      label="Field B"
      name="field_b"
      validateStatus={validateStatus}
      rules={[{ max: 3 }]}
      help={errorMessage}
    >
      <Input
        placeholder={`Enter at least ${maxChars} characters`}
        onChange={handleChange}
        maxLength={maxChars}
      />
    </Form.Item>
  </Form>
  </Card>
  </>
  );
};

export default Todo;
