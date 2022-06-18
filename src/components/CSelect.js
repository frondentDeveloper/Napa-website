import React from 'react';
import Select from "react-select";
import {Form} from "react-bootstrap";

function CSelect(props) {
  return (
    <>
      <Select
        {...props}
        className={"custom-form-control " + props.className}
      />
      {props.error && props.error}
    </>
  );
}

export default CSelect;