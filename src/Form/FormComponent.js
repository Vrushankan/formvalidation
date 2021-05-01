import React, { useState, useEffect } from "react";
import _ from "lodash";
import { Form, Row, Col, Dropdown } from "react-bootstrap";
import InnerFormComponent from "./InnerFormComponent";
import CustomInputField from "./InputField";
import CustomDropDownField from "./DropDown";
import CustomEmailField from "./EmailField";
import CustomDateField from "./DateField";

export default function FormComponent() {
  const [formSubmitValues, setformSubmitValues] = useState({});
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Form Validation`;
  });
  const formFields = [
    {
      type: "Heading",
      heading: "Personal Details",
    },
    {
      type: "CustomDropDownField",
      placeholder: "Salutation",
      name: "salutation",
      label: "Salutation",
      component: CustomDropDownField,
      options: [
        {
          value: "Mr.",
          option: "Mr.",
        },
        {
          value: "Mrs.",
          option: "Mrs.",
        },
        {
          value: "Ms.",
          option: "Ms.",
        },
      ],
    },
    {
      type: "CustomInputField",
      placeholder: "First name",
      name: "first_name",
      label: "First name",
      component: CustomInputField,
    },
    {
      type: "CustomInputField",
      placeholder: "Middle name",
      name: "middle_name",
      label: "Middle name",
      component: CustomInputField,
    },
    {
      type: "CustomInputField",
      placeholder: "Last Name",
      name: "last_name",
      label: "Last Name",
      component: CustomInputField,
    },
    {
      type: "CustomDropDownField",
      placeholder: "Gender",
      name: "gender",
      label: "Gender",
      component: CustomDropDownField,
      options: [
        {
          value: "male",
          option: "Male",
        },
        {
          value: "female",
          option: "Female",
        },
        {
          value: "other",
          option: "Other",
        },
      ],
    },
    {
      type: "CustomEmailField",
      placeholder: "Email Id",
      name: "email",
      label: "Email Id",
      component: CustomEmailField,
    },
    {
      type: "CustomInputField",
      placeholder: "Mobile",
      name: "mobile",
      label: "Mobile",
      component: CustomInputField,
    },
    {
      type: "CustomDateField",
      label: "Date of Birth",
      placeholder: "Date of Birth",
      name: "dob",
      component: CustomDateField,
    },
    {
      type: "CustomInputField",
      placeholder: "Occupation",
      name: "occupation",
      label: "Occupation",
      component: CustomInputField,
    },
    {
      type: "CustomInputField",
      placeholder: "AnnualIncome",
      name: "annual_income",
      label: "AnnualIncome",
      component: CustomInputField,
    },
    {
      type: "CustomInputField",
      placeholder: "Pan Card",
      name: "pan_card",
      label: "Pan Card",
      component: CustomInputField,
    },
    {
      type: "CustomDropDownField",
      placeholder: "Marital Status",
      name: "marital_status",
      label: "Marital Status",
      component: CustomDropDownField,
      options: [
        {
          value: "married",
          option: "Married",
        },
        {
          value: "single",
          option: "Single",
        },
      ],
    },
    {
      type: "CustomInputField",
      placeholder: "Height",
      name: "height",
      label: "Height",
      component: CustomInputField,
    },
    {
      type: "CustomInputField",
      placeholder: "Weight",
      name: "weight",
      label: "Weight",
      component: CustomInputField,
    },
    {
      type: "Devider",
    },
    {
      type: "Heading",
      heading: "Nominee Details",
    },
    {
      type: "CustomInputField",
      placeholder: "First name",
      name: "first_name_nom",
      label: "First name",
      component: CustomInputField,
    },
    {
      type: "CustomInputField",
      placeholder: "Middle name",
      name: "middle_name_nom",
      label: "Middle name",
      component: CustomInputField,
    },
    {
      type: "CustomInputField",
      placeholder: "Last Name",
      name: "last_name_nom",
      label: "Last Name",
      component: CustomInputField,
    },
    {
      type: "CustomDropDownField",
      placeholder: "Relationship",
      name: "relationship",
      label: "Relationship",
      component: CustomDropDownField,
      options: [
        {
          value: "Father",
          option: "Father",
        },
        {
          value: "Mother",
          option: "Mother",
        },
        {
          value: "Son",
          option: "Son",
        },
        {
          value: "Daughter",
          option: "Daughter",
        },
        {
          value: "Other",
          option: "Other",
        },
      ],
    },
    {
      type: "CustomDateField",
      label: "Date of Birth",
      placeholder: "Date of Birth ",
      name: "dob_nom",
      component: CustomDateField,
    },
    {
      type: "CustomDropDownField",
      placeholder: "Gender",
      name: "gender_nom",
      label: "Gender",
      component: CustomDropDownField,
      options: [
        {
          value: "male",
          option: "Male",
        },
        {
          value: "female",
          option: "Female",
        },
        {
          value: "other",
          option: "Other",
        },
      ],
    },
  ];
  const initials = {
    salutation: {
      value: "Mr.",
      option: "Mr.",
    },
    first_name: "",
    middle_name: "",
    last_name: "",
    gender: {
      value: "male",
      option: "Male",
    },
    email: "",
    mobile: "",
    dob: "",
    occupation: "",
    annual_income: "",
    pan_card: "",
    marital_status: {
      value: "married",
      option: "Married",
    },
    height: "",
    weight: "",
    first_name_nom: "",
    middle_name_nom: "",
    last_name_nom: "",
    relationship: {
      value: "Father",
      option: "Father",
    },
    dob_nom: "",
    gender_nom: {
      value: "male",
      option: "Male",
    },
  };
  return (
    <>
      <Row col="12" noGutters>
        <Col md="2" lg="2" xs="0"></Col>
        <Col md="8" lg="8" xs="12">
          <InnerFormComponent
            formFields={formFields}
            initialValues={initials}
            formSubmitValues={formSubmitValues}
            setformSubmitValues={setformSubmitValues}
          />
        </Col>
        <Col></Col>
        <Col md="2" lg="2" xs="0"></Col>
      </Row>
    </>
  );
}
