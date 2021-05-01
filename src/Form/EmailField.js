import React, { useState, useEffect } from "react";
import { Form, Col } from "react-bootstrap";

export default function CustomEmailField({ placeholder, label,value,onChange, name }) {
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
            <Form.Control  type="email" placeholder={placeholder} value={value} onChange={(e)=>onChange(e.target.value)} name={name}/>
          </Form.Group>
        </Form.Row>
      </Form>
    </>
  );
}
