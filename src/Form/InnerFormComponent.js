import React, { useState, useEffect } from "react";
import _ from "lodash";
import { Row, Col, Dropdown, Button } from "react-bootstrap";
import { Formik, Form } from "formik";

export default function InnerFormComponent({ formFields, initialValues }) {
  console.log(initialValues);
  // const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
  });

  const SubmitForm = (values) => {
    console.log(values);
  };

  const getComponent = (each, i,value,setFieldValue) => {
    switch (each.type) {
      case "CustomInputField":
        return (
          <Col md="6" lg="6" xs="12" key={`${each.type}-${i}`}>
            <each.component
              placeholder={each.placeholder}
              label={each.label}
              onChange={(val)=>{setFieldValue(each.name,val)}}
              name={each.name}
              value={value}
            />
          </Col>
        );
      case "CustomDropDownField":
        return (
          <Col md="6" lg="6" xs="12" key={`${each.type}-${i}`}>
            <each.component
              placeholder={each.placeholder}
              onChange={(val)=>{setFieldValue(each.name,val)}}
              label={each.label}
              options={each.options}
              name={each.name}
              value={value}
            />
          </Col>
        );
      case "CustomEmailField":
        return (
          <Col md="6" lg="6" xs="12" key={`${each.type}-${i}`}>
            <each.component
              placeholder={each.placeholder}
              onChange={(val)=>{setFieldValue(each.name,val)}}
              label={each.label}
              name={each.name}
              value={value}
            />
          </Col>
        );
      case "CustomDateField":
        return (
          <Col md="6" lg="6" xs="12" key={`${each.type}-${i}`}>
            <each.component
              placeholder={each.placeholder}
              label={each.label}
              onChange={(val)=>{setFieldValue(each.name,val)}}
              name={each.name}
              value={value}
            />
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
      <Formik
        validateOnChange={false}
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={(values, { validate }) => {
          SubmitForm(values);
        }}
      >
        {({ values, errors,touched, handleSubmit, setFieldValue}) => (
          <Form onSubmit={handleSubmit}>
            <Row col="12">
              {_.map(formFields, (each, i) => getComponent(each, i,values[each.name],setFieldValue))}
              <Button color="primary" type="submit">
                Submit
              </Button>
            </Row>
          </Form>
        )}
      </Formik>
    </>
  );
}
