import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import RoutesPath from "../routes/routes";
import {connect, useDispatch} from "react-redux";
import {addSize, displayCircle, homeCircleVisible} from "../actions/careerAction";
import divWithClassName from "react-bootstrap/esm/divWithClassName";
import {addEducation} from "../actions/appendActions";

const enhancer = connect(
    ({
        addCompany:{initialValue},

     }) => ({
        initialValue
    }), null);




const ProfileCompany = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {initialValue} = props;


    useEffect(() => {
        dispatch(displayCircle());
    }, []);


    return (
        <div className="profile-company" id="">
            <div onClick={() => {
                dispatch(displayCircle());
                dispatch(homeCircleVisible(0));
                navigate(RoutesPath.home)
            }

            } className="forPrev">
                <img src="./images/my-resume-prev.png" alt=""/>
            </div>


            <div className="about-company">
                <div className="company-box-left">
                    <div className="for-title">
                        My information
                        <img src="./images/edit-profile.png" alt=""/>
                    </div>
                    <div className="line-black">

                    </div>
                    <div className="for-title2">
                        Account
                    </div>

                    <div className="person-profile">
                        <div className="person-avatar">
                            <img src={initialValue.personAvatarInitialValue} alt=""/>
                        </div>
                        <div className="box-names">
                            <div className="person-name">{initialValue.firstNameInitialValue}</div>
                            <div className="person-name-company">{initialValue.lastNameInitialValue}</div>
                        </div>

                    </div>

                    <div className="for-contact">
                        <div className="for-gmail">
                            <img src="./images/icon-grome.png" alt=""/>
                           gmail.com
                        </div>
                        <div className="for-number">
                            <img src="./images/icon-phone.png" alt=""/>
                            {initialValue.phoneNumberInitialValue}
                        </div>
                    </div>

                    <div className="for-title3">
                        Company
                        <img src="./images/edit-profile.png" alt=""/>
                    </div>
                    <div className="line-black">

                    </div>
                    <div className="person-profile">
                        <div className="person-avatar">
                            <img src={initialValue.avatarInitialValue} alt=""/>
                        </div>
                        <div className="box-names">
                            <div className="person-name">{initialValue.companyNameInitialValue}</div>
                        </div>

                    </div>

                    <div className="for-contact-company">
                        <div className="for-gmail-company">
                            <img src="./images/icon-grome.png" alt=""/>
                            {initialValue.emailInitialValue}
                        </div>
                        <div className="for-number-company">
                            <img src="./images/icon-phone.png" alt=""/>
                            {initialValue.companyNumberInitialValue}
                        </div>
                        <div className="for-location-company">
                            <img src="./images/location.png" alt=""/>
                            {initialValue.companyLocationInitialValue}
                        </div>
                    </div>

                    <div className="about-company-box">
                        <div className="company-box-left-text">
                            <div className="title-about-text">
                                About the company
                            </div>
                            <div className="main-text-about">
                                {initialValue.companyAboutInitialValue}
                            </div>
                        </div>
                        <div className="company-box-right-text">
                            <div className="title-about-text">
                                Link company
                            </div>
                            <div className="for-link-company">
                                {initialValue.companyLinkInitialValue}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="company-box-right">
                    <div onClick={() => {
                        navigate(RoutesPath.editPassword)
                        dispatch(displayCircle());
                    }
                    } className="edit-password">
                       Edit my password   <img src="./images/edit-profile.png" alt=""/>
                    </div>
                    <div className="search">
                        <input placeholder="Search" type="text"/>
                        <img src="./images/search.png" alt=""/>
                    </div>

                    <div className="person-profile">
                        <div className="person-photo">
                            <img src="./images/person-profile.png" alt=""/>
                        </div>
                        <div className="person-name">
                            <div className="line-one">
                                <div className="Name-Person">
                                    Abdulaziz A
                                </div>
                                <div className="data-for-person">
                                    12:51
                                </div>
                            </div>
                            <div className="line-two">
                                The company offers services to improve the efficiency of other companies....
                            </div>
                        </div>
                    </div>
                    <div className="person-profile">
                        <div className="person-photo">
                            <img src="./images/person-profile.png" alt=""/>
                        </div>
                        <div className="person-name">
                            <div className="line-one">
                                <div className="Name-Person">
                                    Abdulaziz A
                                </div>
                                <div className="data-for-person">
                                    12:51
                                </div>
                            </div>
                            <div className="line-two">
                                The company offers services to improve the efficiency of other companies....
                            </div>
                        </div>
                    </div>
                    <div className="person-profile">
                        <div className="person-photo">
                            <img src="./images/person-profile.png" alt=""/>
                        </div>
                        <div className="person-name">
                            <div className="line-one">
                                <div className="Name-Person">
                                    Abdulaziz A
                                </div>
                                <div className="data-for-person">
                                    12:51
                                </div>
                            </div>
                            <div className="line-two">
                                The company offers services to improve the efficiency of other companies....
                            </div>
                        </div>
                    </div>
                    <div className="person-profile">
                        <div className="person-photo">
                            <img src="./images/person-profile.png" alt=""/>
                        </div>
                        <div className="person-name">
                            <div className="line-one">
                                <div className="Name-Person">
                                    Abdulaziz A
                                </div>
                                <div className="data-for-person">
                                    12:51
                                </div>
                            </div>
                            <div className="line-two">
                                The company offers services to improve the efficiency of other companies....
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className="company-box-bottom">
                <button className="btn createBtn">
                    Create new account
                </button>
                <button className="btn closeBtn">
                    Close account
                </button>
            </div>
        </div>
    );
};

export default enhancer(ProfileCompany);