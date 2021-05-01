import React, { useState, useEffect } from "react";
import { FormLabel } from "react-bootstrap";

export default function ErrorText({ ErrorText }) {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
  });

  return (
    <>
      {ErrorText && <FormLabel style={{ color: "red" }}>{ErrorText}</FormLabel>}
    </>
  );
}
