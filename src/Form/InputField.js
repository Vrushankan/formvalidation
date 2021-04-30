import React, { useState, useEffect } from "react";
import { Form, Col } from "react-bootstrap";

export default function CustomInputField({ placeholder, label }) {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
  });

  return (
    <>
      <Form>
        <Form.Row col="12">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>{label}</Form.Label>
            <Form.Control placeholder={placeholder} />
          </Form.Group>
        </Form.Row>
      </Form>
    </>
  );
}
