import React from 'react';
import {Button, Card} from "react-bootstrap";
import AddExperienceModalForm from "./AddExperienceModalForm";
import SavedWorkExperienceEditModal from "./SavedWorkExperienceEditModal";
import {connect, useDispatch} from "react-redux";
import {signedWizardNextSteps, signedWizardBackSteps} from "../actions/careerAction";
import {removeSavedWorkExperience, setWorkExperienceEditModalVisible} from "../actions/authAction";
import moment from "moment";

const enhancer = connect(({auth: {savedWorkExperiences, workExperienceEditModalVisible}}) => ({
  savedWorkExperiences,
  workExperienceEditModalVisible
}), null);
const ExperienceFormCard = props => {
  const dispatch = useDispatch()

  const onSubmit = hasNext => {
    hasNext ? dispatch(signedWizardNextSteps()) : dispatch(signedWizardBackSteps())
    props.goToNextStep(hasNext)
  }

  return (
    <div className="address-form-card-box">
      <Card className="address-card experience-form-card">
        <Card.Header>
          <p className="card-user-name">Work Experience</p>
          <p className="card-header-title">
            Freelancers who add their experience are twice as likely to win work. But if you’re just starting out, you
            can still create a great profile. Just head on to the next page.
          </p>
        </Card.Header>
        <Card.Body>
          {
            (props.savedWorkExperiences || []).map(item => (
              <div className="user-skills" key={item.id}>
                <div className="skills-fields">
                  <p className="company-name">{item.companyName}</p>
                  <p className="start-date">
                    {moment(item.startDate).format("MMMM YYYY")}
                    <span>to</span>
                    {moment(item.endDate).format("MMMM YYYY")}</p>
                  <p className="user-position">{item.job}</p>
                  <p>{item.description}</p>
                </div>
                <div className="crud-buttons">
                  <Button onClick={() => dispatch(setWorkExperienceEditModalVisible(item))}><i
                    className="icon-edit"/></Button>
                  <Button onClick={() => dispatch(removeSavedWorkExperience(item.id))}><i
                    className="icon-trash-2"/></Button>
                </div>
              </div>
            ))
          }
          <div className="user-skills user-skills-add">
            <div className="add-btn">
              <AddExperienceModalForm/>
            </div>
          </div>

          <div className="btn-box">
            <Button className="custom-btn skip" onClick={() => onSubmit(true)}>Skip</Button>
            <Button className="custom-btn back" onClick={() => onSubmit(false)}>Back</Button>
            <Button className="custom-btn next" onClick={() => onSubmit(true)}>Next</Button>
          </div>
        </Card.Body>
      </Card>
      {
        props.workExperienceEditModalVisible && (<SavedWorkExperienceEditModal/>)
      }
    </div>
  );
}

export default enhancer(ExperienceFormCard);