import React, {useEffect, useState,useRef} from 'react';
import { useReactToPrint } from 'react-to-print';
import {useNavigate} from "react-router-dom";
import RoutesPath from "../routes/routes";
import {connect, useDispatch} from "react-redux";
import {addSize, displayCircle, homeCircleVisible, showResume} from "../actions/careerAction";
import divWithClassName from "react-bootstrap/esm/divWithClassName";
import {addEducation} from "../actions/appendActions";
import FirstTemplateResume from "./resumeTemplates/FirstTemplateResume";
import SecondTemplateResume from "./resumeTemplates/SecondTemplateResume";
import ThirdTemplateResume from "./resumeTemplates/ThirdTemplateResume";
import FourthTemplateResume from "./resumeTemplates/FourthTemplateResume";
import FifthTemplateResume from "./resumeTemplates/FifthTemplateResume";
import SixthTemplateResume from "./resumeTemplates/SixthTemplateResume";


const enhancer = connect(
    ({size: {resume, resumeNumbers}, auth: {initialValue}}) =>
    ({resume, initialValue,resumeNumbers}), null);




const MyCv = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {initialValue} = props;
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });


    useEffect(() => {
        dispatch(displayCircle());
    }, []);


    return (
        <div className="profile-cv" id="">
            <div onClick={() => {
                dispatch(displayCircle());
                dispatch(homeCircleVisible(0));
                navigate(RoutesPath.home)
            }

            } className="forPrev">
                <img src="./images/my-resume-prev.png" alt=""/>
            </div>


            <div className="Cv">
                <div className="cv-box">

                    <div   className="box-for-resume">
                        <div
                            className={props.resume ? "card-resume resume-show" : "card-resume resume-hide"}
                        >
                            {
                                props.resumeNumbers === "first" ?  <div ref={componentRef} className="card-resume"> <FirstTemplateResume/> </div>  : ""
                            }
                            {
                                props.resumeNumbers === "second" ? <div ref={componentRef}><SecondTemplateResume /></div>   : ""
                            }
                            {
                                props.resumeNumbers === "third" ? <div ref={componentRef} ><ThirdTemplateResume /></div>  : ""
                            }
                            {
                                props.resumeNumbers === "fourth" ? <div ref={componentRef} ><FourthTemplateResume /></div>   : ""
                            }
                            {
                                props.resumeNumbers === "fifth" ? <div ref={componentRef} > <FifthTemplateResume /></div>  : ""
                            }
                            {
                                props.resumeNumbers === "sixth" ? <div ref={componentRef} > <SixthTemplateResume /></div>  : ""
                            }
                        </div>
                        <div onClick={handlePrint} className="download-resume">
                            <img src="./images/download-icon.png" alt=""/>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default enhancer(MyCv);