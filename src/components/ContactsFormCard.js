import React from 'react';
import {useFormik} from "formik";
import { v4 as uuidv4 } from 'uuid';
import {Card, InputGroup, FormControl, Button, Row, Col} from "react-bootstrap";
import {useDispatch, connect} from "react-redux";
import {signedWizardNextSteps, signedWizardBackSteps} from "../actions/careerAction";
import {addContactsSocialNetworks, removeAddedSocialNetworks} from "../actions/appendActions";
import {addAddressInitialValues} from "../actions/authAction";
import logger from "../middlewares/loggerMiddleware";

const enhancer = connect(({append: {socialNetworks, addedSocialNetworks}}) => ({socialNetworks, addedSocialNetworks}))
const ContactsFormCard = props => {
  const dispatch = useDispatch()
  const onSubmit = hasNext => {
    hasNext ? dispatch(signedWizardNextSteps()) : dispatch(signedWizardBackSteps())
    props.goToNextStep(hasNext)
  }
  const formik = useFormik({
    initialValues: {},
    onSubmit: values => {
      console.log(values);
    },
  });
  return (
    <div className="contacts-form-card">
      <Card id="overflow-y-scroll">
        <Card.Header>
          <p className="contacts-title">Contacts</p>
        </Card.Header>
        <form onSubmit={formik.handleSubmit}>

          <Card.Body>
            <InputGroup>
              <FormControl
                placeholder="Provide a link to your website"
              />
            </InputGroup>
            {
              (props.addedSocialNetworks || []).map(item => (
                <div className="add-skill-fields">
                  <InputGroup>
                    <FormControl
                      id={item.id}
                      name={item.alt}
                      onChange={formik.handleChange}
                      placeholder={`Link to ${item.alt}`}
                    />
                    <span className="network-icon-link">
                    <img src={item.networkIcon} alt={item.alt}/>
                  </span>
                  </InputGroup>
                  <Button className="custom-btn remove"
                          onClick={() => dispatch(removeAddedSocialNetworks(item))}>&times;</Button>
                </div>
              ))
            }
            <p className="social-networks-title">Choose in which of these social networks you have an account</p>
            <div className="social-networks-box">
              <div className="top-box">
                {
                  (props.socialNetworks || []).map(networks => (
                    <div className="social-network" key={networks.id}
                         role="button" onClick={() => dispatch(addContactsSocialNetworks(networks))}>
                      <img src={networks.src} alt={networks.alt}/>
                      <div className="overlay">
                        + Add
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="btn-box">
              <Button className="custom-btn back" onClick={() => onSubmit(false)}>Back</Button>
              <Button className="custom-btn next" onClick={() => {
                onSubmit(true);
                formik.handleSubmit()
              }}>Next</Button>
            </div>
          </Card.Body>
        </form>
      </Card>
    </div>
  );
}

export default enhancer(ContactsFormCard);