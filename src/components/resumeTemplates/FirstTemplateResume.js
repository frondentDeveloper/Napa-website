import React, {useState} from 'react';
import {connect} from "react-redux";
import moment from "moment";
// import '../../style-resumes/first-resume.scss';


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

const FirstTemplateResume = props => {
    const initialValue = props.initialValue
    const addressInitialValue = props.addressInitialValue
    const [show, setShow] = useState(true);

    return (
        <div className="card-resume-wrapper" role="button" onClick={() => setShow(!show)}
             id={show ? "overflow-y-scroll" : "overflowY-hide"}>
            <div className="card-resume-content">
                <div style={{backgroundColor: props.resumeColor}} className="content-header">
                    <div className="user-avatar">
                        <div className={initialValue.avatarInitialValue ? "bg-none" : "avatar-content"}>

                          {initialValue.avatarInitialValue ?
                                <img src={initialValue.avatarInitialValue} alt="user"/> : <img src="./images/avatar.png" alt=""/>}
                        </div>
                    </div>
                    <div className="user-personal-information">
                        <div className="user-name mb-3">
                            <h2>
                                {initialValue.isWritten ? initialValue.firstNameInitialValue : "Name"}
                            </h2>
                            <h2>
                                {initialValue.isWritten ? initialValue.lastNameInitialValue : "Last-name"}
                            </h2>
                            <div className="user-position">
                                <h3>{initialValue.degreeInitialValue} {initialValue.isWritten ? initialValue.positionInitialValue : "Position"}</h3>
                            </div>
                        </div>
                        <div className="bottom-fields">
                            <div className="left-site-fields">
                                <div className="email">
                                    <p>E-mail:</p>
                                    <p>{initialValue.isWritten ? initialValue.emailInitialValue : "example@.com"}</p>
                                </div>
                                <div className="phone">
                                    <p>Phone:</p>
                                    <p>{initialValue.isWritten ? initialValue.phoneNumberInitialValue : "+998 90 123 45 67"}</p>
                                </div>
                            </div>
                            <div className="right-site-fields">
                                <div className="address">
                                    <p>Address:</p>
                                    <p>
                                         <span className="d-block">{addressInitialValue.isWritten ? addressInitialValue.country : "Uzbekistan"}</span>
                                         <span  className="d-block">{addressInitialValue.isWritten ? addressInitialValue.region : "Tashkent"}</span>
                                        <span   className="d-block">{addressInitialValue.isWritten ? addressInitialValue.street : "street"}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-body">
                    <div className="left-fields">
                        <div className="main-title"><h2>skills</h2></div>
                        <div className="skills-fields">
                            <div className="skills-fields-content">
                                {
                                    props.isWritten ? props.skills.map(item => (
                                            <p style={{backgroundColor: props.resumeColor}} key={item.value}
                                               className="skill">{item.label}</p>))
                                        : <p style={{backgroundColor: props.resumeColor}} className="skill">Skills</p>
                                }
                            </div>
                        </div>
                        <div className="main-title">
                            <h2>languages</h2>
                        </div>
                        <div className="education-fields">
                            {
                                props.isWritten ? props.languages.map(item => (
                                        <p key={item.id} className="language field-title">{item.title}</p>))
                                    : <p className="language">English</p>
                            }
                        </div>
                        <div className="main-title">
                            <h2>contacts</h2>
                        </div>
                        <div className="social-network-field mb-20">
                            <p className="field-title">WhatsApp</p>
                            <p className="field-title">Facebook</p>
                        </div>
                        <div className="main-title">
                            <h2>hobbies</h2>
                        </div>
                        <div className="hobbies-fields">

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
                    <div className="right-fields">
                        <div className="main-title">
                            <h2>about me</h2>
                        </div>
                        <div className="about-user-description">
                            {
                                props.isWritten ? props.about : "Everything is a bit different nowadays. The word \"art\" has a special" +
                                    "meaning."
                            }
                        </div>
                        <div className="main-title">
                            <h2>education</h2>
                        </div>
                        {
                            props.educations.length ? props.educations.map(item => (
                                    <div className="education-fields" key={item.id}>
                                        <p className="field-title">{item.school}</p>
                                        <div className="mb-1">
                                            <p className="field-title capitalize">{item.studyType}</p>
                                            <p className="field-title">{item?.degree?.label}</p>
                                        </div>
                                        <div className="d-flex mb-20">
                                            <p className="field-text capitalize"><i
                                                className="icon-location me-2"/>{item.location}</p>
                                            <p className="start-date field-text ms-3">
                                                {moment(item.startDate).format("MMMM YYYY")}
                                                <span className="mx-2">to</span>
                                                {moment(item.endDate).format("MMMM YYYY")}</p>
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
                        <div className="main-title">
                            <h2>Experience</h2>
                        </div>
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
    );
}

export default enhancer(FirstTemplateResume);