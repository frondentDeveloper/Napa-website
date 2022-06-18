import React from 'react';
import Resume from "./Resume";
import FormCarousel from "./FormCarousel";
import {connect} from "react-redux";
import SecondTemplateResume from "./resumeTemplates/SecondTemplateResume";
import ThirdTemplateResume from "./resumeTemplates/ThirdTemplateResume";
import FourthTemplateResume from "./resumeTemplates/FourthTemplateResume";

const enhancer = connect(({size: {resume, template}}) => ({resume, template}), null);

const PersonalInformation = props => {

  return (
    <div className={!props.template
      ? "personal-information personal-information-show"
      : "personal-information personal-information-hide"}
    >
      <div className={props.resume
        ? "personal-information-shell add-height"
        : "personal-information-shell remove-height"}
      >
        <FormCarousel/>
        <Resume/>
      </div>
    </div>
  );
}

export default enhancer(PersonalInformation);
