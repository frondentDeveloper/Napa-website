import React, {useState} from 'react';
import {connect} from "react-redux";
import moment from "moment";

const enhancer = connect((
    {
      size: {resume, resumeColor,resumeColorBox},
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



const SecondTemplateResume = props => {
  const addressInitialValue = props.addressInitialValue;
  const initialValue = props.initialValue;
  const [show, setShow] = useState(true);
  return (
    <div role="button" onClick={() => setShow(!show)} className="w-100">
      <div className="second-template-resume-wrapper" id={show ? "overflow-y-scroll" : "overflowY-hide"}>
        <div className="second-template-resume">
          <div className="left-side">
            <div className="top-user-avatar default-avatar">

                 {
                   initialValue.avatarInitialValue ?  <img src={initialValue.avatarInitialValue} alt=""/> :
                       <img src="./images/avatar2.png" alt=""/>}


            </div>
            <div className="left-user-info-box">
              <div className="user-network-box">
                <div className="network-title">
                  <div style={{backgroundColor:props.resumeColor}} className="forBeforeBox"></div>
                  Phone
                </div>
                <div className="network-field">
                  <div>
                    {initialValue.isWritten ? initialValue.phoneNumberInitialValue : "+998 90 123 45 67"}
                  </div>
                </div>
              </div>
              <div className="user-network-box">
                <div className="network-title">
                  <div style={{backgroundColor:props.resumeColor}} className="forBeforeBox"></div>
                  E-mail
                </div>
                <div className="network-field">
                  <div>{initialValue.isWritten ? initialValue.emailInitialValue : "example@.com"}</div>
                </div>
              </div>
              <div className="user-network-box">
                <div className="network-title">
                  <div style={{backgroundColor:props.resumeColor}} className="forBeforeBox"></div>
                  <div>Adres</div>
                </div>
                <div className="network-field">
                   <span
                       className="">{addressInitialValue.isWritten ? addressInitialValue.country : "Uzbekistan"}</span>
                    <span
                        className="">{addressInitialValue.isWritten ? addressInitialValue.region : "Tashkent"}</span>
                    <span
                        className="">{addressInitialValue.isWritten ? addressInitialValue.street : "street"}</span>
                </div>
              </div>
              <div className="user-skills-row">
                <div className="user-skills-column">
                  <div className="column-title">
                    Skills
                    <div style={{backgroundColor:props.resumeColor}} className="lineForResume"></div>
                  </div>

                  <div className="column-field">
                    {
                      props.isWritten ? props.skills.map(item => (
                              <p style={{backgroundColor: props.resumeColor}} key={item.value}
                                 className="skill">{item.label}</p>))
                          : <p style={{backgroundColor: props.resumeColor}} className="skill">Skills</p>
                    }
                  </div>
                </div>
                <div className="user-skills-column">
                  <div className="column-title">
                    Languages
                    <div style={{backgroundColor:props.resumeColor}} className="lineForResume"></div>
                  </div>
                  <div className="column-field">
                    {
                      props.isWritten ? props.languages.map(item => (
                              <p key={item.id} className="language field-title">
                                <div style={{backgroundColor: props.resumeColor}}
                                     className="first-resume-hobbies"></div>
                                {item.title}</p>))
                          : <p className="language">English</p>
                    }
                  </div>
                </div>
                <div className="user-skills-column">
                  <div className="column-title">
                    Contact
                    <div style={{backgroundColor:props.resumeColor}} className="lineForResume"></div>
                  </div>
                  <div className="column-field">
                    <div className="contact-field">
                      <div className="first-resume-hobbies">WhatsApp</div>
                    </div>
                  </div>
                </div>
                <div className="user-skills-column">
                  <div className="column-title">
                    Hobbies
                    <div style={{backgroundColor:props.resumeColor}} className="lineForResume"></div>
                  </div>
                  <div className="column-field">
                    {
                      props.interests.length ? props.interests.map(item => (
                              <p className="field-title capitalize">
                                <div style={{backgroundColor: props.resumeColor}}
                                     className="first-resume-hobbies"></div>
                                {item.title}
                              </p>
                          ))
                          :
                          <>
                            <p className="field-title">
                              <div style={{backgroundColor: props.resumeColor}}
                                   className="first-resume-hobbies"></div>
                              Football
                            </p>
                            <p className="field-title">
                              <div style={{backgroundColor: props.resumeColor}}
                                   className="first-resume-hobbies"></div>
                              Music
                            </p>
                            <p className="field-title">
                              <div style={{backgroundColor: props.resumeColor}}
                                   className="first-resume-hobbies"></div>
                              Chess
                            </p>
                          </>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-side">
            <div style={{backgroundColor: props.resumeColor}} className="user-full-name-box">
              <div className="user-full-name">
                <span>{initialValue.isWritten ? initialValue.firstNameInitialValue : "MICHEL "}</span>
                {initialValue.isWritten ? initialValue.lastNameInitialValue : "RIGAURIO"}
              </div>
              <div className="user-position">{initialValue.degreeInitialValue} {initialValue.isWritten ? initialValue.positionInitialValue : "Position"}</div>
            </div>
            <div className="about-user-row">
              <div className="about-yourself-column">
                <div className="column-title">
                  ABOUT ME
                </div>
                <div className="column-text">
                  {
                    props.isWritten ? props.about : "Everything is a bit different nowadays. The word \"art\" has a special" +
                        "meaning."
                  }
                </div>
              </div>
              <div className="education-column">
                <div className="column-title">
                  EDUCATION
                </div>

                {
                  props.educations.length ? props.educations.map(item => (
                          <div className="education-info-box" key={item.id}>
                            <div className="education-year">
                              {moment(item.startDate).format("MMMM YYYY")} -  {moment(item.endDate).format("MMMM YYYY")}
                            </div>
                            <div className="education-name-box">
                              <div className="education-title">{item.school}</div>
                              <div className="education-name">{item.location}</div>
                              <div className="education-description">
                                {item.studyType}
                              </div>
                            </div>

                          </div>
                      ))
                      :
                      <>
                        <div className="education-info-box">
                          <div className="education-year">
                            2012 - 2014
                          </div>
                          <div className="education-name-box">
                            <div className="education-title">ENTER UNI</div>
                            <div className="education-name">Name Of company / USA</div>
                            <div className="education-description">
                              Everything is a bit different nowadays.
                            </div>
                          </div>
                        </div>
                      </>
                }


                <div className="experience-column">
                  <div className="column-title">
                    EXPERIENCE
                  </div>
                  <div className="column-text">
                    {
                      props.savedWorkExperiences.length ? props.savedWorkExperiences.map(item => (
                              <div className="experience-fields d-flex" key={item.id}>
                                <div className="w-50 me-3">
                                  <p className="experience-company-name field-title">{item.companyName}</p>
                                  <p className="start-date field-text">
                                    {moment(item.startDate).format("MMMM YYYY")}
                                    <span className="mx-2">to</span>
                                    {moment(item.endDate).format("MMMM YYYY")}
                                  </p>
                                </div>
                                <div className="w-50">
                                  <p className="field-title capitalize">{item.job}</p>
                                  <p className="field-text">{item.description}</p>
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

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default enhancer(SecondTemplateResume);