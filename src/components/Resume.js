import React, {useState} from 'react';
import {connect, useDispatch} from "react-redux";
import {showResume} from "../actions/careerAction";
import SecondTemplateResume from "./resumeTemplates/SecondTemplateResume";
import FirstTemplateResume from "./resumeTemplates/FirstTemplateResume";
import ThirdTemplateResume from "./resumeTemplates/ThirdTemplateResume";
import FifthTemplateResume from "./resumeTemplates/FifthTemplateResume";
import SixthTemplateResume from "./resumeTemplates/SixthTemplateResume";
import FourthTemplateResume from "./resumeTemplates/FourthTemplateResume";

const enhancer = connect(({size: {resume, resumeNumbers}, auth: {initialValue}}) => ({resume, initialValue,resumeNumbers}), null);

const Resume = (props) => {
  const dispatch = useDispatch();
  const initialValue = props.initialValue;

  return (
    <div
      className={props.resume ? "card-resume resume-show" : "card-resume resume-hide"}
      onClick={() => dispatch(showResume())}
    >
      {
        props.resumeNumbers === "first" ?  <FirstTemplateResume/> : ""
      }
      {
        props.resumeNumbers === "second" ?  <SecondTemplateResume/> : ""
      }
      {
        props.resumeNumbers === "third" ?  <ThirdTemplateResume/> : ""
      }
      {
        props.resumeNumbers === "fourth" ?  <FourthTemplateResume/> : ""
      }
      {
        props.resumeNumbers === "fifth" ?  <FifthTemplateResume/> : ""
      }
      {
        props.resumeNumbers === "sixth" ?  <SixthTemplateResume/> : ""
      }

      <div className="card-bottom-right-circle">
        <img src="./images/full-blue-ell.svg" alt="pattern"/>
      </div>
      <div className="card-top-left-circle">
        <img src="./images/blue-circle-ell.svg" alt="circle"/>
        <img src="./images/blue-ell4.svg" alt="circle"/>
        <img src="./images/blue-ell5.svg" alt="circle"/>
      </div>
      <div className="card-top-right-circle">
        <img src="./images/blue-circle-ell.svg" alt="circle"/>
        <img src="./images/blue-ell4.svg" alt="circle"/>
      </div>
    </div>
  );
}

export default enhancer(Resume);