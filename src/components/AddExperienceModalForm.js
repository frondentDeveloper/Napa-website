import React, {useState} from 'react';
import {Button, FormControl, InputGroup, Modal, Row, Col} from "react-bootstrap";
import DatePicker from "react-datepicker";
import {useFormik} from "formik";
import {saveNewWorkExperience} from "../actions/authAction";
import {connect, useDispatch} from "react-redux";

const enhancer = connect(({auth: {savedWorkExperiences}}) => ({savedWorkExperiences}), null);
const AddExperienceModalForm = (props) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const formik = useFormik({
    initialValues: {
      companyName: "",
      job: "",
      startDate: null,
      endDate: null,
      description: "",
    },
    onSubmit: (values, {resetForm}) => {
      dispatch(saveNewWorkExperience({
        ...values,
      }));
      resetForm()
    },
  })

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        + Add new
      </Button>

      <form onSubmit={formik.handleSubmit} onReset={(value, {resetForm}) => resetForm()} className="mb-0">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Work experience</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup>
              <FormControl
                id="companyName"
                name="companyName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.companyName}
                placeholder="Company name"
              />
            </InputGroup>
            <InputGroup>
              <FormControl
                id="job"
                name="job"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.job}
                placeholder="Job"
              />
            </InputGroup>
            <div className="checkbox-content">
              <div className="select-checkbox">
                <i className="icon-check-square"/>
              </div>
              <p className="select-checkbox-title">I am currently working in this role</p>
            </div>
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
                      placeholderText="DD/MM/YYYY"
                      dateFormat="MM/yyyy"
                      showMonthYearPicker
                      showFullMonthYearPicker
                    />
                    <i className="icon-calendar"/>
                  </InputGroup>
                </div>
              </Col>
              <Col md={6} className="date-content">
                <p className="deadline-title">to</p>
                <div>
                  <InputGroup>
                    <DatePicker
                      id="endTime"
                      onChange={(time) => formik.setFieldValue("endDate", time)}
                      selected={formik.values.endDate}
                      className="form-control"
                      placeholderText="DD/MM/YYYY"
                      dateFormat="MM/yyyy"
                      showMonthYearPicker
                      showFullMonthYearPicker
                    />
                    <i className="icon-calendar"/>
                  </InputGroup>
                </div>
              </Col>
            </Row>
            <InputGroup id="overflow-y-scroll" className="description">
              <FormControl
                id="description"
                name="description"
                as="textarea"
                onChange={formik.handleChange}
                value={formik.values.description}
                placeholder="Description"
              />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <div className="btn-box">
              <Button className="custom-btn back" onClick={handleClose}>Cancel</Button>
              <Button className="custom-btn next" type="submit" onClick={() => {
                handleClose();
                formik.handleSubmit()
              }}>Save</Button>
            </div>
          </Modal.Footer>
        </Modal>
      </form>
    </>
  );
}

export default enhancer(AddExperienceModalForm);
