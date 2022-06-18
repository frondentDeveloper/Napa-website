import React from 'react';
import {Button, Card, FormControl, InputGroup} from "react-bootstrap";
import {connect, useDispatch} from "react-redux";
import {signedWizardNextSteps, signedWizardBackSteps, addSize} from "../actions/careerAction";
import {
  setInterestsNewHobbies,
  addInterestsNewHobbies,
  removeInterests
} from "../actions/appendActions";
import {showDoneResumes} from "../actions/resumesAction";
import {useNavigate} from "react-router-dom"

const enhancer = connect((
  {
    resumes: {doneResumes},
    append: {initialHobbiesValue, interests}
  }
) =>
  ({
    doneResumes,
    initialHobbiesValue,
    interests
  }));

const InterestsFormCard = props => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onSubmit = hasNext => {
    hasNext ? dispatch(signedWizardNextSteps()) : dispatch(signedWizardBackSteps())
    props.goToNextStep(hasNext)
  }

  const handleHobbiesValue = event => {
    dispatch(setInterestsNewHobbies(event.target.value))
  }

  return (
    <div className="interests-form-card">
      <div className="about-yourself-form-card">
        <Card className="about-yourself-card hobbies-card h-100" id="overflow-y-scroll">
          <Card.Body>
            <p className="about-yourself-header-title">Tell us about your interests</p>
            <p className="skills-title">Hobbies</p>
            {/*<div className="add-skill-fields">*/}
            {/*  <InputGroup>*/}
            {/*    <FormControl*/}
            {/*      placeholder="Coding"*/}
            {/*    />*/}
            {/*  </InputGroup>*/}
            {/*  <Button className="custom-btn remove">&times;</Button>*/}
            {/*</div>*/}
            {
              (props.interests || []).map((item) => (
                <div className="add-skill-fields" key={item.id}>
                  <InputGroup>
                    <FormControl
                      defaultValue={item.title}
                    />
                  </InputGroup>
                  <Button className="custom-btn remove" onClick={() =>
                    dispatch(removeInterests(item.id))
                  }>&times;</Button>
                </div>
              ))
            }
            <div className="add-skill-fields">
              <InputGroup>
                <FormControl
                  placeholder="What’s your hobbies?"
                  value={props.initialHobbiesValue}
                  onChange={handleHobbiesValue}
                />
              </InputGroup>
              <Button className="custom-btn remove">&times;</Button>
            </div>
            <div className="add-skills-box">
              <Button className="add-skills-btn" onClick={() => dispatch(addInterestsNewHobbies())}>
                + Add hobby
              </Button>
            </div>
            <div className="btn-box">
              <Button className="custom-btn back" onClick={() => onSubmit(false)}>Back</Button>
              <Button className="custom-btn next" onClick={() => {
                dispatch(showDoneResumes());
                dispatch(addSize());
                navigate("/");
              }}>Next</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default enhancer(InterestsFormCard);
