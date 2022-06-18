import React from 'react';
import {Card, Row, Col, Dropdown, InputGroup, FormControl, Button, Form} from "react-bootstrap";
import {signedWizardNextSteps, signedWizardBackSteps} from "../actions/careerAction";
import {connect, useDispatch} from "react-redux";
import {useFormik} from "formik";
import {v4 as uuidv4} from "uuid";
import {addAddressInitialValues} from "../actions/authAction";
import CSelect from "./CSelect";

const enhancer = connect(({auth: {emailInitialValue, addressInitialValue}}) => ({
  emailInitialValue,
  addressInitialValue,
}), null);

const AddressFormCard = (props) => {
  const dispatch = useDispatch()

  const onSubmit = (hasNext) => {
    hasNext ? dispatch(signedWizardNextSteps()) : dispatch(signedWizardBackSteps())
    props.goToNextStep(hasNext)
  }

  const countryOptions = [
    {value: 'united-state', label: 'USA'},
    {value: 'united-kingdom', label: 'United-Kingdom'},
    {value: 'russia', label: 'Russia'},
    {value: 'australia', label: 'Australia'},
  ]
  const regionOptions = [
    {value: 'tashkent', label: 'Tashkent'},
    {value: 'fargona', label: "Farg'ona"},
    {value: 'buxoro', label: 'Buxoro'},
    {value: 'termiz', label: 'Termiz'},
  ]

  const formik = useFormik({
    initialValues: {
      country: countryOptions[0],
      region: regionOptions[0],
      street: "",
    },
    onSubmit: values => {
      dispatch(addAddressInitialValues({...values}));
    },
  });

  return (
    <div className="address-form-card-box">
      <Card className="address-card">
        <Card.Header>
          <p className="card-user-name">Welcome Dilmurod</p>
          <p className="card-header-title">Complete your profile to join our global community of freelancers and start
            selling your services to our
            growing network of businesses.</p>
        </Card.Header>
        <Card.Body>
          <form onSubmit={formik.handleSubmit}>
            <Row>
              <Col>
                <CSelect
                  name="country"
                  id="country"
                  onChange={(x) => formik.setFieldValue("country", {value: x.value, label: x.label})}
                  className="custom-form-control"
                  value={{value: formik.values.country.value, label: formik.values.country.label}}
                  options={countryOptions}
                />
              </Col>
              <Col>
                <CSelect
                  name="region"
                  id="region"
                  onChange={(x) => formik.setFieldValue("region", {value: x.value, label: x.label})}
                  className="custom-form-control"
                  value={{value: formik.values.region.value, label: formik.values.region.label}}
                  options={regionOptions}
                />
              </Col>
            </Row>
            <InputGroup>
              <FormControl
                id={uuidv4()}
                name="street"
                className="form-control"
                onChange={formik.handleChange}
                value={formik.values.street}
                placeholder="Street address"
                type="text"
              />
            </InputGroup>
            <div className="btn-box">
              <Button className="custom-btn back" onClick={() => onSubmit(false)}>Back</Button>
              <Button className="custom-btn next" onClick={() => {onSubmit(true); formik.handleSubmit()}}>Next</Button>
            </div>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default enhancer(AddressFormCard);