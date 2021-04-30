import React, { useState, useEffect } from "react";
import _ from "lodash";
import { Form, Row, Col } from "react-bootstrap";
import CustomInputField from "./InputField";

export default function FormComponent() {
  // const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Form Validation`;
  });
  const formFields = [
    {
      type: "CustomInputField",
      placeholder: "Salutation",
      label: "Salutation",
      component: CustomInputField,
    },
    {
      type: "CustomInputField",
      placeholder: "First name",
      label: "First name",
      component: CustomInputField,
    },
    {
      type: "CustomInputField",
      placeholder: "Middle name",
      label: "Middle name",
      component: CustomInputField,
    },
    {
      type: "CustomInputField",
      placeholder: "Last Name",
      label: "Last Name",
      component: CustomInputField,
    },
  ];
  return (
    <>
      <Form>
        <Row col="12">
          <Col md="2" lg="2" xs="0"></Col>
          <Col md="8" lg="8" xs="12">
            <Row col="12">
              {_.map(formFields, (each, i) =>
                each.type === "CustomInputField" ? (
                  <Col md="6" lg="6" xs="12" key={`${each.type}-${i}`}>
                    <each.component
                      placeholder={each.placeholder}
                      label={each.label}
                    />
                  </Col>
                ) : null
              )}
            </Row>
          </Col>
          <Col></Col>
          <Col md="2" lg="2" xs="0"></Col>
        </Row>
      </Form>
    </>
  );
}
