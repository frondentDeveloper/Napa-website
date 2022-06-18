import React from 'react';
import {Card, InputGroup, FormControl, Button} from "react-bootstrap";
import {signedWizardNextSteps, signedWizardBackSteps} from "../actions/careerAction";
import {
  addAboutYourselfNewSkills,
  setAboutYourselfNewLanguage,
  addAboutYourselfNewLanguage,
  removeAboutYourselfAddedLanguage
} from "../actions/appendActions";
import {connect, useDispatch} from "react-redux";
import CreatableSelect from "react-select/creatable";
import {useFormik} from "formik";

const enhancer = connect((
  {
    append: {
      skills,
      initialSKillsValue,
      initialLanguageValue,
      languages,
    }
  }) => (
  {
    skills,
    initialSKillsValue,
    initialLanguageValue,
    languages,
  }
), null);

const AboutYourselfFormCard = props => {
  const dispatch = useDispatch();

  const options = [
    {value: 'java', label: 'Java'},
    {value: 'react', label: 'React'},
    {value: 'redux', label: 'Redux'},
    {value: 'sql', label: 'SQL'},
  ]

  const formik = useFormik(
    {
    initialValues: {
      skill: options[0],
      about: "",
    },
    onSubmit: (values) => {
      dispatch(addAboutYourselfNewSkills(values));
    },
  });

  const onSubmit = hasNext => {
    hasNext ? dispatch(signedWizardNextSteps()) : dispatch(signedWizardBackSteps())
    props.goToNextStep(hasNext)
  };

  const handleLanguageValue = event => {
    dispatch(setAboutYourselfNewLanguage(event.target.value))
  };
  return (
    <div className="about-yourself-form-card">
      <Card className="about-yourself-card" id="overflow-y-scroll">
        <Card.Body>
          <p className="about-yourself-header-title">Write a little about yourself</p>
          <p className="skills-title">Your skills (max: 30)</p>
          <form onSubmit={formik.handleSubmit} className="custom-form">
            <CreatableSelect
              id="skill"
              name="skill"
              isMulti
              onChange={(x) => formik.setFieldValue("skill", x)}
              options={options}
              placeholder="Write what skills do you have :)"
              className="custom-form-control"
            />
            <div className="add-language-fields">
              <div className="language-title">
                Language
              </div>
              {
                (props.languages || []).map((item) => (
                  <div className="add-skill-fields" key={item.id}>
                    <InputGroup>
                      <FormControl
                        defaultValue={item.title}
                      />
                    </InputGroup>
                    <Button className="custom-btn remove" onClick={() =>
                      dispatch(removeAboutYourselfAddedLanguage(item.id))
                    }>&times;</Button>
                  </div>
                ))
              }
              <InputGroup>
                <FormControl
                  onChange={handleLanguageValue}
                  value={props.initialLanguageValue}
                  placeholder="What languages can you speak"
                />
              </InputGroup>
              <div className="add-skills-box">
                <Button className="add-skills-btn" onClick={() => dispatch(addAboutYourselfNewLanguage())}>
                  + Add language
                </Button>
              </div>
            </div>
            <div className="about-yourself-textarea-box">
              <div className="about-yourself-title">
                About you
              </div>
              <InputGroup>
                <FormControl
                  name="about"
                  as="textarea"
                  placeholder="Describe yourself to buyers"
                  onChange={formik.handleChange}
                  value={formik.values.about}
                />
              </InputGroup>
              <div className="btn-box">
                <Button className="custom-btn back" onClick={() => onSubmit(false)}>Back</Button>
                <Button className="custom-btn next" onClick={() => {onSubmit(true); formik.handleSubmit()}}>Next</Button>
              </div>
            </div>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default enhancer(AboutYourselfFormCard);