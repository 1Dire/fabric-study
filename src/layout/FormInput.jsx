import React from "react";
import { Form } from "react-bootstrap";

const Input = ({ type = "text", placeholder = "입력하세요", value, onChange }) => {
  return (
    <Form.Control
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
