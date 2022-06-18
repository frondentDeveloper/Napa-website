import React, {useState} from 'react';
import {connect} from "react-redux";
import moment from "moment";



const enhancer = connect((
    {
      size: {resume, resumeColor, resumeColorBox},
      auth: {initialValue, addressInitialValue, savedWorkExperiences},
      append: {skills, languages, isWritten, about, educations, interests}
    }) => ({
  resumeColorBox,
  resumeColor,
  resume,
  initialValue,
  addressInitialValue,
  skills,
  languages,
  isWritten,
  about,
  educations,
  savedWorkExperiences,
  interests,
}), null);

const SixthTemplateResume = (props) => {
  const initialValue = props.initialValue
  const addressInitialValue = props.addressInitialValue
  const [show, setShow] = useState(true);

  return (
    <div className="classic-resume-wrapper" id={show ? "overflow-y-scroll" : "overflowY-hide"}>
      <div className="classic-resume" role="button" onClick={() => setShow(!show)}>
        <div className="resume-header">
          <div className="user-personal-information">
            <div className="user-avatar">
              {initialValue.avatarInitialValue ?
                  <img src={initialValue.avatarInitialValue} alt="user"/> :
                  <i className="icon-user"/>}
            </div>
            <div className="user-name">
              <h2> {initialValue.isWritten ? initialValue.firstNameInitialValue : "Name"}</h2>
              <h2>
                {initialValue.isWritten ? initialValue.lastNameInitialValue : "Last-name"}
              </h2>
              <p>{initialValue.degreeInitialValue} {initialValue.isWritten ? initialValue.positionInitialValue : "Position"}</p>
            </div>
          </div>

          <div className="user-location">
            <div className="main-title-content">
              <p style={{fontWeight:"bold"}} className="main-title">phone:</p>
              <p>{initialValue.isWritten ? initialValue.phoneNumberInitialValue : "+998 90"}</p>
            </div>
            <div className="main-title-content">
              <p className="main-title">email:</p>
              <p>{initialValue.isWritten ? initialValue.emailInitialValue : "@gmail.com"}</p>
            </div>
            <div className="main-title-content">
              <p className="main-title">address:</p>
              <p>
                <span >{addressInitialValue.isWritten ? addressInitialValue.country : ""}</span> <p></p>
                <span >{addressInitialValue.isWritten ? addressInitialValue.region : ""}</span>
                <span >{addressInitialValue.isWritten ? addressInitialValue.street : ""}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="resume-body">
          <div className="left-content">
            <div className="main-title-content">
              <p className="main-title">Skills</p>
              {
                props.isWritten ? props.skills.map(item => (
                        <p  key={item.value}
                           className="skill">{item.label}</p>))
                    : <p  className="skill">Skills</p>
              }
            </div>
            <div className="main-title-content">
              <p className="main-title">Languages</p>
              {
                props.isWritten ? props.languages.map(item => (
                        <p key={item.id} >{item.title}</p>))
                    : <p>English</p>
              }
            </div>
            <div className="main-title-content">
              <p className="main-title">Contacts</p>
              <p>Telegram</p>
              <p>Instagram</p>
            </div>
            <div className="main-title-content">
              <p className="main-title">Hobbies</p>
              {
                props.interests.length ? props.interests.map(item => (
                        <p>
                          {item.title}
                        </p>
                    ))
                    :
                    <>
                      <p>
                        Football
                      </p>
                      <p>
                        Music
                      </p>
                      <p>
                        Chess
                      </p>
                    </>
              }
            </div>
          </div>

          <div className="right-content">
            <div className="main-title-content">
              <p className="main-title">About me</p>

                <p>
                  {
                props.isWritten ? props.about : "Everything is a bit different nowadays. The word \"art\" has a special" +
                    "meaning."
                  }
              </p>

            </div>
            <div className="main-title-content">
              <p className="main-title">Education</p>
              <p>{
                props.educations.length ? props.educations.map(item => (
                        <div key={item.id}>
                          <div className="education-box">
                            <div className="education-field">
                              <p className="education-year">{item.school}</p>
                              <p className="education-name">
                                {moment(item.startDate).format("MMMM YYYY")}
                                <span className="mx-2">to</span>
                                {moment(item.endDate).format("MMMM YYYY")}
                              </p>
                            </div>
                          </div>
                          <div className="education-description">
                            {item.location}
                          </div>
                        </div>
                    ))
                    :
                    <>
                      <div className="education-box">
                        <div className="education-field">
                          <p className="education-year">Name Of Dagree (2021-2022)</p>
                          <p className="education-name">Name Of company</p>
                        </div>
                      </div>
                    </>
              }

              </p>
            </div>
            <div className="main-title-content">
              <p className="main-title">Experience</p>
              <p>
                {
                  props.savedWorkExperiences.length ? props.savedWorkExperiences.map(item => (
                          <div className="experience-fields d-flex" key={item.id}>
                            <div className="w-50 me-3">
                              <b className="experience-company-name field-title">{item.companyName}</b>
                              <p className="start-date field-text">
                                {moment(item.startDate).format("MMMM YYYY")}
                                <span className="mx-2">to</span>
                                {moment(item.endDate).format("MMMM YYYY")}
                              </p>
                            </div>
                          </div>
                      ))
                      :
                      <>
                        <p>Company name</p>
                        <p>2012 - 2014</p>
                        <p>Degree name</p>
                      </>
                }
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default enhancer(SixthTemplateResume) ;