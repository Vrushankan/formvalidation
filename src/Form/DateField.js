import React, { useState, useEffect } from "react";
import { Form, Col } from "react-bootstrap";
import ErrorText from "./ErrorText";
import "react-datepicker/dist/react-datepicker.css";

export default function CustomEmailField({
  placeholder,
  label,
  name,
  value,
  onChange,
  error,
}) {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
  });

  return (
    <>
      <Form.Row col="12" noGutters>
        <Form.Group as={Col} controlId="formGridDate">
          <Form.Label>{label}</Form.Label>
          <Form.Control
            type="date"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            name={name}
          />
          {error && <ErrorText ErrorText={error} />}
        </Form.Group>
      </Form.Row>
    </>
  );
}
