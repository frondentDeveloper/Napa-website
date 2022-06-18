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


function FifthTemplateResume(props) {
    const initialValue = props.initialValue
    const addressInitialValue = props.addressInitialValue
    const [show, setShow] = useState(true);

    return (
        <div className="fifth-template-resume-wrapper" id={show ? "overflow-y-scroll" : "overflowY-hide"}>
            <div className="fifth-template-resume" role="button" onClick={() => setShow(!show)}>
                <div className="template-header">
                    <div className="header-left">
                        <div className="star-top-left">

                            <svg width="200" height="147" viewBox="0 0 220 147" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M154.529 -79.0144L187.47 -22.9936L219.515 33.5439L187.47 90.0813L154.529 146.102L89.5439 146.619L24.5584 146.102L-8.3818 90.0813L-40.4272 33.5439L-8.38179 -22.9936L24.5584 -79.0144L89.5439 -79.531L154.529 -79.0144Z"
                                    fill={props.resumeColor}/>
                            </svg>

                        </div>
                        <div className="set-of-dots">
                            <div className="dots-box">
                                <div className="dot"/>
                                <div className="dot"/>
                                <div className="dot"/>
                                <div className="dot"/>
                            </div>
                            <div className="dots-box">
                                <div className="dot"/>
                                <div className="dot"/>
                                <div className="dot"/>
                            </div>
                            <div className="dots-box">
                                <div className="dot"/>
                                <div className="dot"/>
                            </div>
                            <div className="dots-box">
                                <div className="dot"/>
                            </div>
                        </div>
                        <div className="header-title">
                            <div style={{display: "inline-block", marginRight: "10px"}}>  {initialValue.isWritten ? initialValue.firstNameInitialValue : "Michel "}</div>

                            <div style={{display: "inline-block"}}> {initialValue.isWritten ? initialValue.firstNameInitialValue : "Michel "}</div>

                            <div style={{fontSize:"14px", fontWeight:"500"}}>{initialValue.degreeInitialValue} {initialValue.isWritten ? initialValue.positionInitialValue : "Position"}</div>
                        </div>
                        <div className="user-info-box">
                            <div className="left-side">
                                <div className="phone-box">
                                    <p>
                                        <i className="icon-phone"/>
                                    </p>
                                    <p>{initialValue.isWritten ? initialValue.phoneNumberInitialValue : ""}</p>
                                </div>
                                <div className="location-box">
                                    <p>
                                        <i className="icon-location"/>
                                    </p>
                                    <p>
                                        <span >{addressInitialValue.isWritten ? addressInitialValue.country : ""}</span>
                                        <span  >{addressInitialValue.isWritten ? addressInitialValue.region : ""}</span>
                                        <span  >{addressInitialValue.isWritten ? addressInitialValue.street : ""}</span>
                                    </p>
                                </div>
                            </div>
                            <div className="right-side">
                                <div className="email-box">
                                    <p>
                                        <i className="icon-message"/>
                                    </p>
                                    <p>{initialValue.isWritten ? initialValue.emailInitialValue : ""}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-right">
                        <div className="star-top-right">
                            <svg width="225" height="194" viewBox="0 0 365 244" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M286.788 -87.1407L335.11 -4.9588L382.121 77.9809L335.11 160.921L286.788 243.102L191.455 243.86L96.1216 243.102L47.7988 160.921L0.788653 77.9809L47.7988 -4.9588L96.1216 -87.1407L191.455 -87.8985L286.788 -87.1407Z"
                                    fill={props.resumeColor}/>
                            </svg>

                        </div>
                        <div className="user-box">
                            {initialValue.avatarInitialValue ?
                                <img src={initialValue.avatarInitialValue} alt="user"/> :

                                <img src="./images/avatar5.png" alt="avatar"/>}

                        </div>
                        <div className="sky-blue-star-top">
                            <svg width="156" height="126" viewBox="0 0 240 186" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M116.858 0.81459L136.532 34.2747L155.672 68.0434L136.532 101.812L116.858 135.272L78.0432 135.581L39.2286 135.272L19.5541 101.812L0.413977 68.0434L19.5541 34.2747L39.2286 0.814589L78.0432 0.506046L116.858 0.81459Z"
                                    fill={props.resumeColor}/>
                            </svg>
                        </div>
                        <div className="set-of-dots">
                            <div className="dots-box">
                                <div className="dot"/>
                                <div className="dot"/>
                                <div className="dot"/>
                                <div className="dot"/>
                            </div>
                            <div className="dots-box">
                                <div className="dot"/>
                                <div className="dot"/>
                                <div className="dot"/>
                            </div>
                            <div className="dots-box">
                                <div className="dot"/>
                                <div className="dot"/>
                            </div>
                            <div className="dots-box">
                                <div className="dot"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="template-body">
                    <div className="template-body-left">
                        <p style={{backgroundColor: props.resumeColor}} className="template-left-title">ABOUT ME</p>
                        <div className="template-left-description">
                            {
                                props.isWritten ? props.about : "Everything is a bit different nowadays. The word \"art\" has a special" +
                                    "meaning."
                            }
                        </div>

                        <p style={{backgroundColor: props.resumeColor}}  className="template-left-title">LANGUAGE</p>
                        <div className="language-box">

                            {
                                props.isWritten ? props.languages.map(item => (
                                        <p key={item.id} className="language field-title"><div style={{backgroundColor: props.resumeColor}} className="first-resume-hobbies"></div>{item.title}</p>))
                                    : <p className="language"><div style={{backgroundColor: props.resumeColor}} className="first-resume-hobbies"></div>English</p>
                            }

                        </div>
                        <p style={{backgroundColor: props.resumeColor}} className="template-left-title">CONTACTS</p>
                        <div className="contact-box-fifth">
                           <div className="contact-box-item">Telegram</div>
                           <div className="contact-box-item">Instagram</div>

                        </div>
                        <p style={{backgroundColor: props.resumeColor}} className="template-left-title">HOBBIES</p>
                        <div className="hobbies-box">

                            {
                                props.interests.length ? props.interests.map(item => (
                                        <span className="hobby">
                                            <div style={{backgroundColor: props.resumeColor}}
                                                 className="first-resume-hobbies"></div>
                                            {item.title}
                                        </span>
                                    ))
                                    :
                                    <>
                                        <span className="hobby">
                                            <div style={{backgroundColor: props.resumeColor}} className="first-resume-hobbies"></div>
                                            Football
                                        </span>
                                        <span className="hobby">
                                            <div style={{backgroundColor: props.resumeColor}} className="first-resume-hobbies"></div>
                                            Table tennis
                                        </span>
                                        <span className="hobby">
                                            <div style={{backgroundColor: props.resumeColor}} className="first-resume-hobbies"></div>
                                            Swimming
                                        </span>
                                        <span className="hobby">
                                            <div style={{backgroundColor: props.resumeColor}} className="first-resume-hobbies"></div>
                                            Reading books
                                        </span>
                                    </>
                            }




                        </div>
                        <div className="star-bottom-left-box">
                            <div className="star-bottom-left">
                                <svg width="59" height="61" viewBox="0 0 59 61" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M33.6395 0.554773L46.0859 21.7222L58.1943 43.0849L46.0859 64.4475L33.6395 85.615L9.08471 85.8102L-15.4701 85.615L-27.9165 64.4475L-40.0248 43.0849L-27.9165 21.7222L-15.4701 0.554774L9.08472 0.359581L33.6395 0.554773Z"
                                        fill={props.resumeColor}/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="template-body-right">
                        <p style={{backgroundColor: props.resumeColor}} className="template-right-title">SKILLS</p>
                        <div className="skills-box">

                            {
                                props.isWritten ? props.skills.map(item => (
                                        <span style={{backgroundColor: props.resumeColor}} key={item.value}
                                           className="skill">{item.label}</span>))
                                    : <p style={{backgroundColor: props.resumeColor}} className="skill">Skills</p>
                            }

                        </div>
                        <p style={{backgroundColor: props.resumeColor}} className="template-right-title">EDUCATION</p>

                        {
                            props.educations.length ? props.educations.map(item => (
                                    <div key={item.id}>
                                        <div className="education-box">
                                            <div className="icon-box">
                                                <i className="icon-polygon"/>
                                            </div>
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
                                        <div className="icon-box">
                                            <i className="icon-polygon"/>
                                        </div>
                                        <div className="education-field">
                                            <p className="education-year">Name Of Dagree (2021-2022)</p>
                                            <p className="education-name">Name Of company</p>
                                        </div>
                                    </div>
                                </>
                        }





                        <p style={{backgroundColor: props.resumeColor}} className="template-right-title">EXPERIENCE</p>
                        <div className="experience-box">
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
                        </div>
                    </div>
                </div>
                <div className="star-bottom-right-box">
                    <div className="star-bottom-right">
                        <svg width="140" height="146" viewBox="0 0 140 146" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M177.155 0.990395L207.057 51.8431L236.146 103.165L207.057 154.486L177.155 205.339L118.165 205.808L59.1745 205.339L29.2732 154.486L0.184128 103.165L29.2732 51.8431L59.1745 0.990393L118.165 0.52147L177.155 0.990395Z"
                                fill={props.resumeColor}/>
                        </svg>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default enhancer(FifthTemplateResume);
