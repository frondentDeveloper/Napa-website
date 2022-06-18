import React from 'react';
import {Row, Col, Card, Form, Button} from "react-bootstrap";
import {useFormik} from "formik";

const ContactUs = props => {

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: ""
    },
    onSubmit: values => {
      console.log(values)
    }
  });
  return (
    <div className="contact-us-wrapper">
      <Row>
        <Col md={6} className="right-column">
          <div className="contact-form-box">
            <img src="./images/contact-us.svg" alt="person"/>
          </div>
        </Col>
        <Col md={6} className="left-column">
          <Card>
            <form onSubmit={formik.handleSubmit}>
              <Card.Body>
                <h3>Contact us</h3>
                <p className="mb-0">Complete your profile to join our global community of freelancers and</p>
                <p>start selling your services to our growing network of businesses.</p>
                <Form.Group>
                  <Form.Control
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    placeholder="Name"
                    className="form-control"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    placeholder="Email"
                    className="form-control"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.phoneNumber}
                    placeholder="+998"
                    className="form-control"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    id="message"
                    name="message"
                    as="textarea"
                    onChange={formik.handleChange}
                    value={formik.values.message}
                    placeholder="Text message"
                    className="form-control textarea-box"
                  />
                </Form.Group>
                <div className="btn-box">
                  <Button className="custom-btn">Send</Button>
                </div>
              </Card.Body>
            </form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ContactUs;