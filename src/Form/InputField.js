import React, { useState, useEffect } from "react";
import { Form, Col } from "react-bootstrap";
import ErrorText from "./ErrorText";

export default function CustomInputField({
  placeholder,
  label,
  value,
  name,
  error,
  onChange,
}) {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
  });

  return (
    <>
      <Form.Row col="12" noGutters>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>{label}</Form.Label>
          <Form.Control
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            name={name}
          />
          {error && <ErrorText ErrorText={error} />}
        </Form.Group>
      </Form.Row>
    </>
  );
}
