import React from 'react';
import {Button, Col, FormControl, InputGroup, Modal, Row} from "react-bootstrap";
import DatePicker from "react-datepicker";
import {connect, useDispatch} from "react-redux";
import {useFormik} from "formik";
import {setEducationEditModalVisible, saveEditedEducation} from "../actions/appendActions";
import {v4 as uuidv4} from "uuid";
import CSelect from "./CSelect";

const enhancer = connect(({append: {educations, educationEditModalVisible, item}}) => ({
  educations,
  educationEditModalVisible,
  item
}), null)
const SavedEducationEditModal = props => {
  const dispatch = useDispatch();

  const options = [
    {value: 'Bachelor', label: 'Bachelor'},
    {value: 'Higher', label: 'Higher'},
    {value: 'Master', label: 'Master'}
  ];

  const formik = useFormik({
    initialValues: {
      school: props.item.school,
      degree: props.item.degree,
      studyType: props.item.studyType,
      location: props.item.location,
      startDate: props.item.startDate,
      endDate: props.item.endDate
    },
    onSubmit: (values, {resetForm}) => {
      values.degree = values.degree?.value;
      dispatch(saveEditedEducation({...values}));
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit} onReset={(value, {resetForm}) => resetForm()} className="mb-0">
        <Modal show={props.educationEditModalVisible}
               onHide={() => dispatch(setEducationEditModalVisible({}))}>
          <Modal.Header closeButton>
            <Modal.Title>Work experience</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup>
              <FormControl
                id={uuidv4()}
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
              onChange={(x) => formik.setFieldValue("degree", x)}
              className="select-degree custom-form-control"
              value={formik.values.degree}
              placeholder="Select degree"
              options={options}
            />
            <InputGroup>
              <FormControl
                id={uuidv4()}
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
                id={uuidv4()}
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
                <p className="deadline-title">To</p>
                <div>
                  <InputGroup>
                    <DatePicker
                      id="endDate"
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
          </Modal.Body>
          <Modal.Footer>
            <div className="btn-box">
              <Button className="custom-btn back"
                      onClick={() => dispatch(setEducationEditModalVisible({}))}>Cancel</Button>
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

export default enhancer(SavedEducationEditModal);