import React, { useState, useEffect } from "react";
import _ from "lodash";
import { Form, Row, Col, Dropdown } from "react-bootstrap";

export default function InnerFormComponent({ formFields }) {
  // const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
  });

  const getComponent = (each, i) => {
    switch (each.type) {
      case "CustomInputField":
        return (
          <Col md="6" lg="6" xs="12" key={`${each.type}-${i}`}>
            <each.component placeholder={each.placeholder} label={each.label} />
          </Col>
        );
      case "CustomDropDownField":
        return (
          <Col md="6" lg="6" xs="12" key={`${each.type}-${i}`}>
            <each.component
              placeholder={each.placeholder}
              label={each.label}
              options={each.options}
            />
          </Col>
        );
      case "CustomEmailField":
        return (
          <Col md="6" lg="6" xs="12" key={`${each.type}-${i}`}>
            <each.component placeholder={each.placeholder} label={each.label} />
          </Col>
        );
      case "CustomDateField":
        return (
          <Col md="6" lg="6" xs="12" key={`${each.type}-${i}`}>
            <each.component placeholder={each.placeholder} label={each.label} />
          </Col>
        );
      case "Devider":
        return (
          <Col md="12" lg="12" xs="12" key={`${each.type}-${i}`}>
            <Dropdown.Divider />
          </Col>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Row col="12">
        {_.map(formFields, (each, i) => getComponent(each, i))}
      </Row>
    </>
  );
}
