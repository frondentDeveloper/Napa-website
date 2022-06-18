import React from 'react';
import {Button, Card,} from "react-bootstrap";
import AddEducationModalForm from "./AddEducationModalForm";
import {connect, useDispatch} from "react-redux";
import {signedWizardNextSteps, signedWizardBackSteps} from "../actions/careerAction";
import {setEducationEditModalVisible, removeSavedEducation} from "../actions/appendActions";
import SavedEducationEditModal from "./SavedEducationEditModal";
import moment from "moment";

const enhancer = connect((
  {
    append: {
      educations,
      educationEditModalVisible
    }
  }) => (
  {
    educations,
    educationEditModalVisible
  }
), null);

const EducationsFormCard = props => {

  const dispatch = useDispatch()
  const {educations} = props

  const onSubmit = hasNext => {
    hasNext ? dispatch(signedWizardNextSteps()) : dispatch(signedWizardBackSteps())
    props.goToNextStep(hasNext)
  }

  return (
    <div className="address-form-card-box">
      <div className="card-content">
        <Card className="address-card experience-form-card">
          <Card.Header>
            <p className="card-user-name">Educations</p>
            <p className="card-header-title">
              Freelancers who add their experience are twice as likely to win work. But if you’re just starting out, you
              can still create a great profile. Just head on to the next page.
            </p>
          </Card.Header>
          <Card.Body>
            {
              educations.length ? educations.map(item => (
                  <div className="user-skills" key={item.id}>
                    <div className="skills-fields">
                      <p className="company-name">{item.school}</p>
                      <p className="start-date">
                        {moment(item.startDate).format("MMMM YYYY")}
                        <span>to</span>
                        {moment(item.endDate).format("MMMM YYYY")}</p>
                      <div className="user-position">
                        <p>{item?.degree?.label}</p>
                        <p>{item.studyType}</p>
                        <p><i className="icon-location"/>{item.location}</p>
                      </div>
                    </div>
                    <div className="crud-buttons">
                      <Button onClick={() => dispatch(setEducationEditModalVisible(item))}>
                        <i className="icon-edit"/>
                      </Button>
                      <Button onClick={() => dispatch(removeSavedEducation(item.id))}>
                        <i className="icon-trash-2"/>
                      </Button>
                    </div>
                  </div>
                ))
                :
                <p>This section is for your past and present education. Click "+Add Education" to write about the
                  schools, colleges, and universities you've attended or are currently attending.</p>
            }
            <div className="user-skills user-skills-add">
              <div className="add-btn">
                <AddEducationModalForm/>
              </div>
            </div>

            <div className="btn-box">
              <Button className="custom-btn back" onClick={() => onSubmit(false)}>Back</Button>
              <Button className="custom-btn next" onClick={() => onSubmit(true)}>Next</Button>
            </div>
          </Card.Body>
        </Card>
        {
          props.educationEditModalVisible && (<SavedEducationEditModal/>)
        }
      </div>
    </div>
  );
}

export default enhancer(EducationsFormCard);
