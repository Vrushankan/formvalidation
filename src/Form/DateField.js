import React, { useState, useEffect } from "react";
import { Form, Col } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";

export default function CustomEmailField({ placeholder, label }) {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
  });

  return (
    <>
      <Form>
        <Form.Row col="12">
          <Form.Group as={Col} controlId="formGridDate">
            <Form.Label>{label}</Form.Label>
            <Form.Control  type="date" placeholder={placeholder} />
          </Form.Group>
        </Form.Row>
      </Form>
    </>
  );
}