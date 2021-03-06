import React, { useState, useEffect } from "react";
import _ from "lodash";
import { Form, Col } from "react-bootstrap";
import ErrorText from "./ErrorText";

export default function CustomInputField({
  placeholder,
  options,
  name,
  value,
  onChange,
  label,
  error,
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
            as="select"
            custom
            name={name}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
          >
            {_.map(options, (each, i) => (
              <option value={each.value} key={`${each.option}-${i}`}>
                {each.option}
              </option>
            ))}
            {error && <ErrorText ErrorText={error} />}
          </Form.Control>
        </Form.Group>
      </Form.Row>
    </>
  );
}
