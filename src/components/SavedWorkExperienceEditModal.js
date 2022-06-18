import React, {useState} from 'react';
import {Button, Col, FormControl, InputGroup, Modal, Row} from "react-bootstrap";
import DatePicker from "react-datepicker";
import {connect, useDispatch} from "react-redux";
import {useFormik} from "formik";
import {saveNewWorkExperience, setWorkExperienceEditModalVisible, saveEditedWorkExperience} from "../actions/authAction";
import moment from "moment";

const enhancer = connect(({auth: {savedWorkExperiences, workExperienceEditModalVisible, item}}) => ({
  savedWorkExperiences,
  workExperienceEditModalVisible,
  item
}), null)
const SavedWorkExperienceEditModal = props => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      companyName: props.item.companyName,
      job: props.item.job,
      description: props.item.description,
      startDate: props.item.startDate,
      endDate: props.item.endDate
    },
    onSubmit: (values, {resetForm}) => {
      dispatch(saveEditedWorkExperience({...values}));
    },
  })
  return (
    <>
      <form onSubmit={formik.handleSubmit} onReset={(value, {resetForm}) => resetForm()} className="mb-0">
        <Modal show={props.workExperienceEditModalVisible}
               onHide={() => dispatch(setWorkExperienceEditModalVisible({}))}>
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
              <Button className="custom-btn back"
                      onClick={() => dispatch(setWorkExperienceEditModalVisible({}))}>Cancel</Button>
              <Button className="custom-btn next" type="submit" onClick={() => {
                formik.handleSubmit()
              }}>Save</Button>
            </div>
          </Modal.Footer>
        </Modal>
      </form>
    </>
  );
}

export default enhancer(SavedWorkExperienceEditModal);