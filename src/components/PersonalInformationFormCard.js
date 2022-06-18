import React, {useState} from 'react';
import {connect, useDispatch} from "react-redux";
import {Button, Card, Col, Form, Row} from "react-bootstrap";
import {signedWizardNextSteps} from "../actions/careerAction";
import {useFormik} from "formik";
import {v4 as uuidv4} from 'uuid';
import {addInitialValues,} from "../actions/authAction";
import CSelect from "./CSelect";

const enhancer = connect(({auth: {initialValue,}}) => ({initialValue,}), null);

const PersonalInformationFormCard = (props) => {

  const [image, setImage] = useState(null);
  const {initialValue} = props;
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    dispatch(signedWizardNextSteps());
    props.goToNextStep(true)
  };

  const options = [
    {value: 'intern', label: 'Intern'},
    {value: 'junior', label: 'Junior'},
    {value: 'middle', label: 'Middle'},
    {value: 'senior', label: 'Senior'},
  ];

  const formik = useFormik({
    initialValues: {
      avatar: undefined,
      firstName: "",
      email: "",
      lastName: "",
      phoneNumber: "",
      position: "",
      id: uuidv4(),
      degree: options[0],
    },
    onSubmit: values => {
      dispatch(addInitialValues({...values}));
    },
  });

  const onUpload = (event) => {
    const {target: {files}} = event;
    const file = files[0];
    function getBase64(file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function() {
        setImage(reader.result);
        formik.setFieldValue("avatar", reader.result);
      };
      reader.onerror = function () {
        setImage(null);
        formik.setFieldValue("avatar", "");
      };
    }
    getBase64(file); // prints the base64 string
  };

  return (
    <Card>
      <Card.Header>
        <h2 className="header-title">Start living your work dream</h2>
      </Card.Header>
      <Card.Body>
        <div className="upload-wrapper">
          <div className="user-avatar" style={{backgroundImage: `url(${image})`, backgroundSize: "cover"}}>
            <i className={formik.values.avatar === undefined ? "icon-user" : "d-none"}/>
          </div>
          <div className="upload-fields">
            <p>Upload your photo (optional)</p>
            <div className="buttons">

              <label htmlFor="#" className="custom-btn upload-btn">
                <input
                  onChange={e => onUpload(e)}
                  type="file"
                  id={uuidv4()}
                  className="file-input"
                  accept="image/png, image/jpeg"
                />
                Upload
              </label>
              <Button className="delete-btn">Delete</Button>
            </div>
          </div>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <Row className="mx-0">
            <Col md={6} className="px-0">
              <div className="left-forms">
                <Form.Group className="form-shell">
                  <Form.Control
                    name="firstName"
                    id={uuidv4()}
                    className="form-control"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    type="text"
                    placeholder="Firstname"/>
                </Form.Group>
                <Form.Group className="form-shell">
                  <Form.Control
                    name="email"
                    id={uuidv4()}
                    className="form-control"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    type="email"
                    placeholder="Email"/>
                </Form.Group>
              </div>
            </Col>
            <Col md="6" className="px-0">
              <div className="right-forms">
                <Form.Group className="form-shell">
                  <Form.Control
                    name="lastName"
                    id={uuidv4()}
                    className="form-control"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    type="text"
                    placeholder="Lastname"/>
                </Form.Group>
                <Form.Group className="form-shell">
                  <Form.Control
                    name="phoneNumber"
                    id={uuidv4()}
                    className="form-control"
                    onChange={formik.handleChange}
                    value={formik.values.phoneNumber}
                    type="text"
                    placeholder="Phone number"/>
                </Form.Group>
              </div>
            </Col>
            <Col className="px-0">
              <div className="position-form">
                <Form.Group className="form-shell me-0 mb-0">
                  <Form.Control
                    name="position"
                    id={uuidv4()}
                    className="form-control"
                    onChange={formik.handleChange}
                    value={formik.values.position}
                    type="text"
                    placeholder="Your position"/>
                </Form.Group>
                <CSelect
                  name="degree"
                  id="degree"
                  onChange={(x) => formik.setFieldValue("degree", {value: x.value, label: x.label})}
                  className="custom-form-control"
                  value={{value: formik.values.degree.value, label: formik.values.degree.label}}
                  options={options}
                />
              </div>
            </Col>
          </Row>
        </form>
        <div className="next-btn">
          <Button type="submit" className="custom-btn" onClick={() => {
            onSubmit();
            formik.handleSubmit()
          }}>Next</Button>
        </div>

      </Card.Body>
    </Card>
  );
};

export default enhancer(PersonalInformationFormCard);