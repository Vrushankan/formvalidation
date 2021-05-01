import React, { useState, useEffect } from "react";
import _ from "lodash";
import * as Yup from "yup";
import { Row, Col, Dropdown, Button, Card } from "react-bootstrap";
import { Formik, Form } from "formik";

export default function InnerFormComponent({ formFields, initialValues,formSubmitValues,setformSubmitValues }) {
  const SubmitForm = (values) => {
    setformSubmitValues(values);
  };

  const getComponent = (each, i, value, setFieldValue, error) => {
    switch (each.type) {
      case "CustomInputField":
        return (
          <Col md="6" lg="6" xs="12" key={`${each.type}-${i}`}>
            <each.component
              placeholder={each.placeholder}
              label={each.label}
              onChange={(val) => {
                setFieldValue(each.name, val);
              }}
              name={each.name}
              value={value}
              error={error}
            />
          </Col>
        );
      case "CustomDropDownField":
        return (
          <Col md="6" lg="6" xs="12" key={`${each.type}-${i}`}>
            <each.component
              placeholder={each.placeholder}
              onChange={(val) => {
                setFieldValue(each.name, val);
              }}
              label={each.label}
              options={each.options}
              name={each.name}
              value={value}
              error={error}
            />
          </Col>
        );
      case "CustomEmailField":
        return (
          <Col md="6" lg="6" xs="12" key={`${each.type}-${i}`}>
            <each.component
              placeholder={each.placeholder}
              onChange={(val) => {
                setFieldValue(each.name, val);
              }}
              label={each.label}
              name={each.name}
              value={value}
              error={error}
            />
          </Col>
        );
      case "CustomDateField":
        return (
          <Col md="6" lg="6" xs="12" key={`${each.type}-${i}`}>
            <each.component
              placeholder={each.placeholder}
              label={each.label}
              onChange={(val) => {
                setFieldValue(each.name, val);
              }}
              name={each.name}
              value={value}
              error={error}
            />
          </Col>
        );
      case "Devider":
        return (
          <Col md="12" lg="12" xs="12" key={`${each.type}-${i}`}>
            <Dropdown.Divider />
          </Col>
        );
        case "Heading":
        return (
          <Col md="12" lg="12" xs="12" key={`${each.type}-${i}`}>
           <h2>{each.heading}</h2>
          </Col>
        );
      default:
        return null;
    }
  };

  const portfolioDetailsSchema = Yup.object().shape({
    salutation: Yup.string()
      .min(1, "Name is too short!")
      .max(256, "Name is too long!")
      .required("Name is required!"),
    first_name: Yup.string()
      .min(1, "Name is too short!")
      .max(256, "Name is too long!")
      .required("Name is required!"),
    middle_name: Yup.string()
      .min(1, "Name is too short!")
      .max(256, "Name is too long!")
      .required("Name is required!"),
    last_name: Yup.string()
      .min(1, "Name is too short!")
      .max(256, "Name is too long!")
      .required("Name is required!"),
    gender: Yup.string().required("Gender is required!"),
    email: Yup.string()
      .trim()
      .matches(
        /^\w+([.+-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email address"
      )
      .required(),
    mobile: Yup.string()
      .trim()
      .matches(/^[56789]\d{9}$/, "Please enter a valid 10-digit number")
      .required(),
    dob: Yup.string().required("DOB is required!"),
    occupation: Yup.string()
      .min(4, "Occupation Name is too short!")
      .max(256, "Occupation Name is too long!")
      .required("Occupation is required!"),
    annual_income: Yup.number()
      .typeError("Income must be a number")
      .positive("Income Must Be Positive Value")
      .integer("Please Enter Proper Value")
      .min(1000)
      .required("Income is required!"),
    pan_card: Yup.string()
      .label("Pan")
      .matches(
        /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/,
        "Please enter a valid PAN number"
      )
      .required("Please enter your PAN number here"),
    marital_status: Yup.string().required("Status is required!"),
    height: Yup.number()
      .typeError("Height must be a number")
      .positive("Height Must Be Positive Value")
      .min(10)
      .required("Height is required!"),
    weight: Yup.number()
      .typeError("Weight must be a number")
      .positive("Weight Must Be Positive Value")
      .min(10)
      .required("Weight is required!"),
    first_name_nom: Yup.string()
      .min(1, "Name is too short!")
      .max(256, "Name is too long!")
      .required("Name is required!"),
    middle_name_nom: Yup.string()
      .min(1, "Name is too short!")
      .max(256, "Name is too long!")
      .required("Name is required!"),
    last_name_nom: Yup.string()
      .min(1, "Name is too short!")
      .max(256, "Name is too long!")
      .required("Name is required!"),
    relationship: Yup.string().required("Name is required!"),
    dob_nom: Yup.string().required("Nominee DOB is required!"),
    gender_nom: Yup.string().required("Nominee Gender is required!"),
  });

  return (
    <>
      <Formik
        validateOnChange={false}
        initialValues={initialValues}
        validationSchema={portfolioDetailsSchema}
        onSubmit={(values, { validate }) => {
          SubmitForm(values);
        }}
      >
        {({ values, errors, touched, handleSubmit, setFieldValue }) => (
          <Form onSubmit={handleSubmit}>
            <Row col="12">
              {_.map(formFields, (each, i) =>
                getComponent(
                  each,
                  i,
                  values[each.name],
                  setFieldValue,
                  errors[each.name]
                )
              )}
              <Button color="primary" type="submit" block>
                Submit
              </Button>
            </Row>
          </Form>
        )}
      </Formik>
      {!_.isEmpty(formSubmitValues) && (
        <Card>
          {_.map(Object.keys(initialValues), (each, i) => (
            <text>
              {each} : {formSubmitValues[each]}
            </text>
          ))}
        </Card>
      )}
    </>
  );
}
