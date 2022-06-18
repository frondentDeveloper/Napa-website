import React, {useState} from 'react';
import {Button, FormControl, InputGroup, Modal, Row, Col} from "react-bootstrap";
import {useFormik} from "formik";
import {addEducation} from "../actions/appendActions";
import {useDispatch} from "react-redux";
import CSelect from "./CSelect";
import { Checkbox } from "reakit/Checkbox";
import DatePicker from "react-datepicker";

const AddEducationModalForm = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()

  const options = [
    {value: 'Bachelor', label: 'Bachelor'},
    {value: 'Higher', label: 'Higher'},
    {value: 'Master', label: 'Master'}
  ]

  const [checked, setChecked] = React.useState(false);
  const toggle = () => setChecked(!checked);

  const formik = useFormik(
    {
      initialValues: {
        school: "",
        degree: options[0],
        studyType: "",
        location: "",
        startDate: null,
        endDate: null,
      },
      onSubmit: (values, {resetForm}) => {
        dispatch(addEducation(
          {
            ...values,
          }));
        resetForm()
      },
    });

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        + Add Education
      </Button>

      <Modal show={show} onHide={handleClose}>
        <form onSubmit={formik.handleSubmit} onReset={(value, {resetForm}) => resetForm()} className="custom-form">
          <Modal.Header closeButton>
            <Modal.Title>Add Education History</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup>
              <FormControl
                id="school"
                name="school"
                className="form-control"
                onChange={formik.handleChange}
                value={formik.values.school}
                placeholder="Education name"
                type="text"
              />
            </InputGroup>

            <CSelect
              name="degree"
              id="degree"
              onChange={(x) => formik.setFieldValue("degree", {value: x.value, label: x.label})}
              className="select-degree custom-form-control"
              value={{value: formik.values.degree.value, label: formik.values.degree.label}}
              placeholder="Select degree"
              options={options}
            />
            <InputGroup>
              <FormControl
                id="studyType"
                name="studyType"
                className="form-control"
                onChange={formik.handleChange}
                value={formik.values.studyType}
                placeholder="Type of study"
                type="text"
              />
            </InputGroup>
            <InputGroup>
              <FormControl
                id="location"
                name="location"
                className="form-control"
                onChange={formik.handleChange}
                value={formik.values.location}
                placeholder="Location of school"
                type="text"
              />
            </InputGroup>
            <Row>
              <Col md={6} className="date-content">
                <p className="deadline-title">Date from</p>
                <div>
                  <InputGroup>
                    <DatePicker
                      id="startDate"
                      onChange={(time) => formik.setFieldValue("startDate", time)}
                      selected={formik.values.startDate}
                      className="form-control"
                      placeholderText="MM/YYYY"
                      dateFormat="MM/yyyy"
                      showMonthYearPicker
                      showFullMonthYearPicker
                    />
                    <i className="icon-calendar"/>
                  </InputGroup>
                </div>

              </Col>
              <Col md={6} className="date-content">
                <p className="deadline-title">To</p>
                <div>
                  <InputGroup>
                    <DatePicker
                      id="endDate"
                      onChange={(time) => formik.setFieldValue("endDate", time)}
                      selected={formik.values.endDate}
                      className="form-control"
                      placeholderText="MM/YYYY"
                      dateFormat="MM/yyyy"
                      showMonthYearPicker
                      showFullMonthYearPicker
                    />
                    <i className="icon-calendar"/>
                  </InputGroup>
                </div>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <div className="btn-box-second-child">
              <div className="checkbox-content">
                <p className="select-checkbox-title">
                  <label className="labelStyle">
                    <Checkbox checked={checked} onChange={toggle} className="checkboxStyle" />
                    I am currently working in this role
                  </label>
                </p>
              </div>
              <div className="btn-box">
                <Button className="custom-btn back" onClick={handleClose}>Cancel</Button>
                <Button className="custom-btn next" onClick={() => {
                  dispatch(handleClose);
                  formik.handleSubmit()
                }}>Save</Button>
              </div>
            </div>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default AddEducationModalForm;
