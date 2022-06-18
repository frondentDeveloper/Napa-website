import React, {useState} from 'react';
import {showResume} from "../../actions/careerAction";
import {connect, useDispatch} from "react-redux";
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



const FourthTemplateResume = (props) => {

  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  const initialValue = props.initialValue;
  const addressInitialValue = props.addressInitialValue;

  return (
    <div className="card-resume-wrapper" id={show ? "overflow-y-scroll" : "overflowY-hide"}>
      <div className="fourth-resume" role="button" onClick={() => setShow(!show)}>
        <div className="card-resume-content">
          <div className="resume-header">
            <div className="content-left">
              <div className="user-information">
                <div className="user-name">
                  <h2 style={{color:props.resumeColor}}>
                    {initialValue.isWritten ? initialValue.firstNameInitialValue : "Name"}
                  </h2>
                  <h2>
                    {initialValue.isWritten ? initialValue.lastNameInitialValue : "Last-name"}
                  </h2>
                  <div  className="user-position">
                    <h3 style={{color:props.resumeColor}}>{initialValue.degreeInitialValue} {initialValue.isWritten ? initialValue.positionInitialValue : "Position"}</h3>
                  </div>
                </div>
                <div className="bottom-fields">
                  <div className="left-site-fields">
                    <div className="email mt-2">
                      <p>E-mail:</p>
                      <p>{initialValue.isWritten ? initialValue.emailInitialValue : "example@outlook.com"}</p>
                    </div>
                    <div className="address mt-2">
                      <p>Address:</p>
                      <p>
                        <span >{addressInitialValue.isWritten ? addressInitialValue.country : "Uzbekistan"}</span>
                        ,
                        <span >{addressInitialValue.isWritten ? addressInitialValue.region : "Tashkent"}</span>
                        ,
                        <span >{addressInitialValue.isWritten ? addressInitialValue.street : "street"}</span>
                      </p>
                    </div>
                  </div>
                  <div className="right-site-fields">
                    <div className="phone mt-2">
                      <p>Phone:</p>
                      <p>{initialValue.isWritten ? initialValue.phoneNumberInitialValue : "+998990983920"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{backgroundColor:props.resumeColor}} className="content-right">
              <div style={{backgroundColor:props.resumeColor}} className="line-for-fourth-resume"></div>
              <div className="user-avatar">
                {initialValue.avatarInitialValue ?
                    <img src={initialValue.avatarInitialValue} alt="user"/> :
                    <img
                        src="https://external-preview.redd.it/-fdl10FA0t4RvyoHP-9m7bY2Aj4yZ7C7nR05YmWmYXc.jpg?auto=webp&s=8cc1a528ba26e4e7555a240ffdd888eac886b8df"
                        alt=""/>}
              </div>
            </div>
          </div>
          <div className="resume-body">
            <div className="content-left">
              <div  className="skills">
                <p className="main-title">
                  <div style={{backgroundColor:props.resumeColor}} className="fourth-resume-skills-line1"></div>
                  skills
                  <div style={{backgroundColor: props.resumeColor}} className="fourth-resume-skills-line2"></div>
                </p>
                <div className="skills-content">
                  {
                    props.isWritten ? props.skills.map(item => (
                            <p style={{backgroundColor: props.resumeColor}} key={item.value}
                               className="skill">{item.label}</p>))
                        : <p style={{backgroundColor: props.resumeColor}} className="skill">Skills</p>
                  }
                </div>
              </div>
              <div className="educations">
                <p className="main-title">
                  <div style={{backgroundColor:props.resumeColor}} className="fourth-resume-skills-line1"></div>
                  educations
                  <div style={{backgroundColor:props.resumeColor}} className="fourth-resume-skills-line2"></div>
                </p>
                {
                  props.educations.length ? props.educations.map(item => (
                          <div className="description-education" key={item.id}>

                            <div className="name-education">{item.school}</div>

                            <div className="studyType">
                              <div className="">{item.studyType}</div>
                              <div className="degree">{item?.degree?.label}</div>
                            </div>

                            <div className="location-education">
                              <div className="">
                                <i className="icon-location"/> {item.location} </div>

                              <div className="data-education">
                                {moment(item.startDate).format("MMMM YYYY")}
                                <span className="mx-2">to</span>
                                {moment(item.endDate).format("MMMM YYYY")}
                              </div>
                            </div>
                          </div>
                      ))
                      :
                      <>
                        <p>Education name</p>
                        <p>2012 - 2014</p>
                        <p>Degree name</p>
                      </>
                }
             </div>
              <div className="experience">
                <p className="main-title">
                  <div style={{backgroundColor:props.resumeColor}} className="fourth-resume-skills-line1"></div>
                  experience
                  <div style={{backgroundColor:props.resumeColor}} className="fourth-resume-skills-line2"></div>
                </p>

                {
                  props.savedWorkExperiences.length ? props.savedWorkExperiences.map(item => (
                          <div className="experience-fields" key={item.id}>

                            <div className="name-box">
                              <div className="brand-company">{item.companyName}</div>
                              <div className="start-date">
                                {moment(item.startDate).format("MMMM YYYY")}
                                <span className="mx-2">to</span>
                                {moment(item.endDate).format("MMMM YYYY")}
                              </div>
                            </div>

                            <div className="experience-box">
                              <div className="item-job-box">{item.job}</div>
                              <div className="description-experience">{item.description}</div>
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
              <div className="languages">
                <p className="main-title">
                  <div style={{backgroundColor:props.resumeColor}} className="fourth-resume-skills-line1"></div>
                  languages
                  <div style={{backgroundColor:props.resumeColor}} className="fourth-resume-skills-line2"></div>
                </p>

                {
                  props.isWritten ? props.languages.map(item => (
                          <p key={item.id} className="language field-title">
                            <div style={{backgroundColor:props.resumeColor}} className="fourth-resume-language-cycle"></div>
                            {item.title}
                          </p>))
                      : <p className="language">
                        <div style={{backgroundColor:props.resumeColor}} className="fourth-resume-language-cycle"></div>
                        English
                        </p>
                }



              </div>
            </div>
            <div className="content-right">
              <div className="educations about">
                <p className="main-title">About me</p>

                <p className="description">
                  {
                    props.isWritten ? props.about : "Everything is a bit different nowadays. The word \"art\" has a special" +
                        "meaning."
                  }
                </p>
              </div>

              <div className="experience contact">
                <p className="main-title">Contacts</p>
                <p className="contact">Telegram </p>
              </div>
              <div className="languages hobbies">
                <p className="main-title">hobbies</p>
                {
                  props.interests.length ? props.interests.map(item => (
                          <p className="language hobby">
                            <div style={{backgroundColor: props.resumeColor}}
                                 className="fourth-resume-language-cycle"></div>
                            {item.title}
                          </p>
                      ))
                      :
                      <>
                        <p className="language hobby">
                          <div style={{backgroundColor:props.resumeColor}} className="fourth-resume-language-cycle">

                          </div>Coding</p>
                        <p className="language hobby">
                          <div style={{backgroundColor:props.resumeColor}} className="fourth-resume-language-cycle">

                          </div>Cycling</p>
                      </>
                }




              </div>
            </div>
            <div style={{backgroundColor: props.resumeColor}} className="fourth-resume-bottom-line"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default enhancer(FourthTemplateResume);