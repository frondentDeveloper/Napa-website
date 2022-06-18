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




const ThirdTemplateResume = props => {

    const dispatch = useDispatch();
    const [show, setShow] = useState(true);
    const initialValue = props.initialValue;
    const addressInitialValue = props.addressInitialValue

    return (
        <div className="blue-resume">
            <div className="card-resume-wrapper" role="button" onClick={() => setShow(!show)}
                 id={show ? "overflow-y-scroll" : "overflowY-hide"}>
                <div className="card-resume-content">
                    <div style={{backgroundColor: props.resumeColor}} className="content-header">
                        <div className="hex__first__back">
                            <svg width="337" height="326" viewBox="0 0 337 326" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_1290_1992)">
                                    <path
                                        d="M102.269 -113.1C114.198 -119.861 128.802 -119.861 140.731 -113.1L212.198 -72.5927L283.011 -30.9544C294.831 -24.0042 302.133 -11.3572 302.242 2.35448L302.895 84.5L302.242 166.646C302.133 180.357 294.831 193.004 283.011 199.954L212.198 241.593L140.731 282.1C128.802 288.861 114.198 288.861 102.269 282.1L30.8025 241.593L-40.0111 199.954C-51.8313 193.004 -59.133 180.357 -59.242 166.646L-59.895 84.5L-59.242 2.35452C-59.133 -11.3571 -51.8312 -24.0042 -40.0111 -30.9544L30.8025 -72.5927L102.269 -113.1Z"
                                        fill={props.resumeColor}/>
                                </g>
                                <defs>
                                    <filter id="filter0_d_1290_1992" x="-93.895" y="-148.171" width="430.79"
                                            height="473.342"
                                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix"
                                                       values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                       result="hardAlpha"/>
                                        <feOffset dy="4"/>
                                        <feGaussianBlur stdDeviation="17"/>
                                        <feComposite in2="hardAlpha" operator="out"/>
                                        <feColorMatrix type="matrix"
                                                       values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.28 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix"
                                                 result="effect1_dropShadow_1290_1992"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1290_1992"
                                                 result="shape"/>
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                        <div className="hex__back">
                            <svg width="291" height="279" viewBox="0 0 291 279" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_1290_1993)">
                                    <path
                                        d="M106.7 -58.8948C115.57 -63.9225 126.43 -63.9225 135.3 -58.8948L188.86 -28.537L241.931 2.66851C250.72 7.83662 256.15 17.2408 256.231 27.4367L256.72 89L256.231 150.563C256.15 160.759 250.72 170.163 241.931 175.331L188.86 206.537L135.3 236.895C126.43 241.923 115.57 241.923 106.7 236.895L53.14 206.537L0.0692863 175.331C-8.72004 170.163 -14.1496 160.759 -14.2306 150.563L-14.72 89L-14.2306 27.4367C-14.1496 17.2408 -8.72004 7.83662 0.0692863 2.66851L53.14 -28.537L106.7 -58.8948Z"
                                        fill="white"/>
                                </g>
                                <defs>
                                    <filter id="filter0_d_1290_1993" x="-48.7202" y="-92.666" width="339.44"
                                            height="371.332"
                                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix"
                                                       values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                       result="hardAlpha"/>
                                        <feOffset dy="4"/>
                                        <feGaussianBlur stdDeviation="17"/>
                                        <feComposite in2="hardAlpha" operator="out"/>
                                        <feColorMatrix type="matrix"
                                                       values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.28 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix"
                                                 result="effect1_dropShadow_1290_1993"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1290_1993"
                                                 result="shape"/>
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                        <div className="user-avatar">
                            <div className="hex center">
                                <div className="hex__shape">
                                    <div className="hex__shape">
                                        <div className="hex__shape">
                                            {initialValue.avatarInitialValue ?
                                                <img src={initialValue.avatarInitialValue} alt="user"/> :
                                                <img src="./images/person-for-third-resume.png" alt="user"/>}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="user-personal-information">
                            <div className="bottom-fields">
                                <div className="email mt-4">
                                    <p><i className="icon-message "/></p>
                                    <p>{initialValue.isWritten ? initialValue.emailInitialValue : "example@outlook.com"}</p>
                                </div>
                                <div className="phone">
                                    <p><i className="icon-phone"/></p>
                                    <p>{initialValue.isWritten ? initialValue.phoneNumberInitialValue : "+998"}</p>
                                </div>
                                <div className="address">
                                    <p><i className="icon-location"/></p>
                                    <p>
                                        <span className="">{addressInitialValue.isWritten ? addressInitialValue.country : "Uzbekistan"}</span>
                                        ,
                                        <span  className="">{addressInitialValue.isWritten ? addressInitialValue.region : "Tashkent"}</span>
                                        <span   className="">{addressInitialValue.isWritten ? addressInitialValue.street : ""}</span>
                                    </p>
                                </div>
                                <div className="skills">
                                    <p className="title-skills" style={{color: props.resumeColor}}>skills</p>

                                    <div style={{color: props.resumeColor}} >
                                        {
                                            props.isWritten ? props.skills.map(item => (
                                                    <div className="blue-resume-skill" key={item.value}> {item.label} </div>))

                                                : "Skill"
                                        }
                                    </div>

                                </div>
                                <div className="languages">
                                    <p className="title-skills" style={{color: props.resumeColor}}>languages</p>
                                    <p>
                                        {
                                            props.isWritten ? props.languages.map(item => (
                                                    <div key={item.id} className="language field-title mt-2">{item.title}</div>))
                                                : "English"
                                        }
                                    </p>
                                </div>
                                <div className="contacts">
                                    <p style={{color: props.resumeColor}}>contacts</p>
                                    <div className="language field-title">Whatsapp</div>
                                    <div className="language field-title">Telegram</div>
                                </div>
                                <div className="hobbies">
                                    <p style={{color: props.resumeColor}}>hobbies</p>
                                    <p>
                                        {
                                            props.interests.length ? props.interests.map(item => (
                                                    <div className="field-title capitalize mt-2">
                                                        {item.title}
                                                    </div>
                                                ))
                                                :
                                                <>
                                                    <div className="field-title">
                                                        Football
                                                    </div>
                                                    <div className="field-title mt-2">
                                                        Music
                                                    </div>
                                                    <div className="field-title mt-2">
                                                        Chess
                                                    </div>
                                                </>
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-body">
                        <div className="pink-top-star">
                            <img src="./images/pink-top-star.svg" alt="star"/>
                        </div>
                        <div className="user-name">
                            <div className="user-name-box">
                                <h2>
                                    {initialValue.isWritten ? initialValue.firstNameInitialValue : "Name"}
                                </h2>
                                <h2>
                                    {initialValue.isWritten ? initialValue.lastNameInitialValue : "Last-name"}
                                </h2>
                            </div>
                            <div className="user-position">
                                <h3>{initialValue.degreeInitialValue} {initialValue.isWritten ? initialValue.positionInitialValue : "Position"}</h3>
                                <div style={{backgroundColor: props.resumeColor}} className="box-for-blue-resume"></div>

                            </div>
                        </div>
                        <div className="pink-small-star"><img src="./images/pink-small-star.svg" alt="star"/></div>
                        <div className="user-information">
                            <div className="about">
                                <p style={{color: props.resumeColor}}>about me</p>
                                <p>
                                    {
                                        props.isWritten ? props.about : "Everything is a bit different nowadays. The word \"art\" has a special" +
                                            "meaning."
                                    }
                                </p>
                            </div>
                            <div className="educations">
                                <p style={{backgroundColor: props.resumeColor}}>educations</p>

                                {
                                    props.educations.length ? props.educations.map(item => (
                                            <>
                                                <p className="star-content">
                                                     <span><svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path
    d="M6.5 0L9.725 1.91414L12.9952 3.75L12.95 7.5L12.9952 11.25L9.725 13.0859L6.5 15L3.275 13.0859L0.00480938 11.25L0.0500002 7.5L0.00480938 3.75L3.275 1.91414L6.5 0Z"
    fill={props.resumeColor}/>
</svg></span>
                                                    <p className="education-name">{item.school}</p>
                                                    <span style={{color: props.resumeColor}}>
                                                      {moment(item.startDate).format("MMMM YYYY")}
                                                        <span className="mx-2">to</span>
                                                        {moment(item.endDate).format("MMMM YYYY")}
                                                      </span>
                                                </p>
                                                <p style={{borderLeft:1, borderLeftColor:props.resumeColor, borderLeftStyle: "solid" }} className="blue-line">
                                                    <div className="company-name"><p>{item.studyType}</p></div>
                                                    { item.location }
                                                </p>
                                            </>

                                        ))
                                        :
                                        <>
                                            <p className="star-content">
                                                  <span><svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path
    d="M6.5 0L9.725 1.91414L12.9952 3.75L12.95 7.5L12.9952 11.25L9.725 13.0859L6.5 15L3.275 13.0859L0.00480938 11.25L0.0500002 7.5L0.00480938 3.75L3.275 1.91414L6.5 0Z"
    fill={props.resumeColor}/>
</svg></span>
                                                <p className="education-name">ed-n</p>
                                                <span style={{color: props.resumeColor}}>Avg 18-July 19</span>
                                            </p>


                                            <p style={{borderLeft:1, borderLeftColor:props.resumeColor, borderLeftStyle: "solid" }} className="blue-line">
                                                <div className="company-name"><p>company name</p></div>
                                                {initialValue.isWritten
                                                    ? initialValue.phoneNumberInitialValue
                                                    : "Everything is a bit different nowadays. The word art has a special meaning. It means something beautiful."
                                                }
                                            </p>
                                        </>

                                }

                            </div>

                            <div className="experience">
                                <p style={{backgroundColor: props.resumeColor}}>experience</p>
                                {
                                    props.savedWorkExperiences.length ? props.savedWorkExperiences.map(item => (
                                            <>
                                                <p  className="star-content">
                                    <span> <div style={{backgroundColor: props.resumeColor}} className="blueLine"></div> <svg width="13" height="15" viewBox="0 0 13 15" fill="none"
                                                                                                                              xmlns="http://www.w3.org/2000/svg">
<path
    d="M6.5 0L9.725 1.91414L12.9952 3.75L12.95 7.5L12.9952 11.25L9.725 13.0859L6.5 15L3.275 13.0859L0.00480938 11.25L0.0500002 7.5L0.00480938 3.75L3.275 1.91414L6.5 0Z"
    fill={props.resumeColor}/>
</svg></span>
                                                    <p className="education-name">{item.companyName}</p>
                                                    <span style={{color: props.resumeColor}}>
                                                        {moment(item.startDate).format("MMMM YYYY")}
                                                        <span className="mx-2">to</span>
                                                        {moment(item.endDate).format("MMMM YYYY")}
                                                    </span>
                                                </p>
                                                <p  className="blue-line">
                                                    <div className="company-name"><p>{item.job}</p></div>
                                                    { item.description }
                                                </p>
                                            </>
                                        ))
                                        :
                                        <>
                                            <p  className="star-content">
                                    <span> <div style={{backgroundColor: props.resumeColor}} className="blueLine"></div> <svg width="13" height="15" viewBox="0 0 13 15" fill="none"
                                                                                                                              xmlns="http://www.w3.org/2000/svg">
<path
    d="M6.5 0L9.725 1.91414L12.9952 3.75L12.95 7.5L12.9952 11.25L9.725 13.0859L6.5 15L3.275 13.0859L0.00480938 11.25L0.0500002 7.5L0.00480938 3.75L3.275 1.91414L6.5 0Z"
    fill={props.resumeColor}/>
</svg></span>
                                                <p className="education-name">ed-n</p>
                                                <span style={{color: props.resumeColor}}>Avg 18-July 19</span>
                                            </p>
                                            <p  className="blue-line">
                                                <div className="company-name"><p>company name</p></div>
                                                {initialValue.isWritten
                                                    ? initialValue.phoneNumberInitialValue
                                                    : "Everything is a bit different nowadays. The word art has a special meaning. " +
                                                    "It means something beautiful."
                                                }
                                            </p>
                                        </>
                                }
                            </div>

                        </div>
                        <div className="pink-bottom-star">
                            <img src="./images/pink-bottom-star.svg" alt="star"/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default enhancer(ThirdTemplateResume);
