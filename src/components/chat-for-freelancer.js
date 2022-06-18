import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import RoutesPath from "../routes/routes";
import {connect, useDispatch} from "react-redux";
import {addSize, displayCircle, homeCircleVisible, showResume} from "../actions/careerAction";


const enhancer = connect(
    ({
         addCompany: {initialValue},

     }) => ({
        initialValue
    }), null);


const ChatForFreelancer = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {initialValue} = props;


    useEffect(() => {
        dispatch(displayCircle());
    }, []);


    return (
        <div className="chat-for-freelancer" id="">
            <div onClick={() => {
                dispatch(displayCircle());
                dispatch(homeCircleVisible(0));
                navigate(RoutesPath.home)
            }

            } className="forPrev">
                <img src="./images/my-resume-prev.png" alt=""/>
            </div>
            <div className="box-for-planshet">
                <div className="person-avatar">
                    <img src="./images/avatar2.png" alt=""/>
                </div>
                <div className="person-name">
                    Shuxratov Azamat
                </div>
                <div className="person-phone">
                    <img src="./images/icon-phone.png" alt=""/>
                </div>
            </div>

            <div className="    body-chats">
                <div className="chat-box-left">
                    <div className="chat-box">
                        <div className="freelancer-message-box">
                            <img src="./images/message-box.png" alt=""/>
                        </div>

                    </div>
                    <div className="send-message-box">
                        <div className="button-send-file">
                            <img src="./images/send-file.png" alt=""/>
                        </div>
                        <div className="button-send-text">
                            <input placeholder="Text massage" type="text"/>
                            <div className="box-icon-send">
                                <img src="./images/send-message.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="chat-box-right">
                    <div className="box-top">
                        <div className="company-name">
                            <div className="logo-company">
                                <img src="./images/companyAvatar.png" alt=""/>
                            </div>
                            <div className="name-company">
                                Napa
                                <div className="name-two">
                                    Automotive
                                </div>
                            </div>
                        </div>
                        <div className="about-company">
                            <div className="tittle-company">
                                About the company
                            </div>
                            The company offers services to improve the efficiency of other companies. With the help of our
                            highly qualified specialists and modern technologies, we integrate our knowledge and skills to
                            increase efficiency.
                        </div>
                        <div className="link-company">
                            <div className="link-title">
                                Link company
                            </div>
                            <div className="company-link">
                                https://www.behance.net/micheldesigner
                            </div>
                        </div>
                    </div>
                 <div className="box-bottom">

                     <div className="phone-company">
                         <div className="member-since">
                             <div className="title-since">
                                 Member since
                             </div>
                             Aug 27, 2013
                         </div>
                         <div className="contact-company">
                             <img src="./images/icon-grome.png" alt=""/>
                             <img src="./images/icon-phone.png" alt=""/>
                         </div>
                     </div>

                 </div>



                </div>

            </div>

        </div>
    );
};

export default enhancer(ChatForFreelancer);