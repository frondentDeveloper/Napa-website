import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import RoutesPath from "../routes/routes";
import {connect, useDispatch} from "react-redux";
import {useFormik} from "formik";
import {v4 as uuidv4} from "uuid";
import {addInitialValuesCompany} from "../actions/addCompanyActions";
import {displayCircle} from "../actions/careerAction";



const enhancer = connect(({addCompany: {initialValue}}) =>
    ({initialValue}), null);


const EditPassword = (props) => {
    const {initialValue} = props;
    const dispatch = useDispatch();

    const onSubmit = (event) => {
        navigate(RoutesPath.profileCompany)
    };
    useEffect(() => {
        dispatch(displayCircle());
    }, []);


    const formikTwo = useFormik({
        initialValues: {
            email: "",
            password: "",
            enterCode: "",
            newPassword: "",
            testNewPassword: "",
            id: uuidv4(),
        },
        onSubmit: values => {
            dispatch(addInitialValuesCompany({...values}));
        },
    });

    const navigate = useNavigate();


    const [information, setInformation] = useState(true);
    const [yourCompany, setYourCompany] = useState(false);
    const [aboutCompany, setAboutCompany] = useState(false);
    const [success, setSuccess] = useState(false);

    const [step1, setStep1] = useState(true);
    const [step2, setStep2] = useState(false);
    const [step3, setStep3] = useState(false);
    const [iconPerson, setIconPerson] = useState(true);


    return (
        <div className="edit-password-main-box" id="">
            <div className="forSteps">
                <div className="circleForBrand">
                    <img src="./images/logo.png" alt="" className=""/>
                </div>

                <div className={step1 ? "step-for-informationActive" : "step-for-information"}>
                    <div className={step1 ? "ball-informationActive" : "ball-information"}>
                        <div className="ball2-information">
                            <div className={information ? "titleForStepsActive" : "titleForSteps"}>
                                Edit Profile
                            </div>
                        </div>
                    </div>
                </div>

                <div className={step2 ? "step-for-informationActive" : "step-for-information"}>
                    <div className={step2 ? "ball-informationActive" : "ball-information"}>
                        <div className="ball2-information">
                            <div className={yourCompany ? "titleForStepsActive" : "titleForSteps"}>
                                Password
                            </div>
                        </div>
                    </div>
                </div>

                <div className={step3 ? "step-for-informationActive" : "step-for-information"}>
                    <div className={step3 ? "ball-informationActive" : "ball-information"}>
                        <div className="ball2-information">
                            <div className={success ? "titleForStepsActive done" : "titleForSteps done"}>
                                Done
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div onSubmit={formikTwo.handleSubmit} className="edit-password-main-box-two">
                <div className="left-box">

                    {information ? <div className="edit-password-page">
                        <div  className="for-x">
                            <img onClick={ ()=>{
                                navigate(RoutesPath.profileCompany)
                            } } src="./images/my-resume-prev.png" alt=""/>
                        </div>
                        <div className="textWelcome">
                            Edit profile
                        </div>
                        <div className="textMain">
                            Don’t have an account? <p onClick={ ()=>{
                            dispatch(displayCircle());
                            navigate(RoutesPath.addCompany)
                        } }>Sign Up Now</p>
                        </div>
                        <div className="boxForInput">
                            <input id={uuidv4()} onChange={formikTwo.handleChange} value={formikTwo.values.email}
                                   placeholder="Email" name="email" className="form-control" type="text"/>
                            <input id={uuidv4()} onChange={formikTwo.handleChange} value={formikTwo.values.password}
                                   placeholder="Password" name="password" className="form-control" type="text"/>
                            <input id={uuidv4()} onChange={formikTwo.handleChange} value={formikTwo.values.enterCode}
                                   placeholder="Enter code" name="enterCode" className="form-control" type="text"/>
                        </div>

                        <div className="boxForButtons">
                            <div className="box-forgot-password">
                            </div>
                            <button className="nextButton btn btn-primary" onClick={() => {
                                setInformation(!information);
                                setYourCompany(!yourCompany);
                                setStep2(true);
                            }}>
                                Continue
                            </button>


                        </div>


                    </div> : ""}


                    {yourCompany ? <div className="edit-password-page">

                        <div className="mainBoxForCompany">
                            <div>
                                <div className="textCompany">
                                    Edit Profile
                                </div>
                                <div className="text-edit-profile">
                                    Complete your profile to join our global community of freelancers and start selling
                                    your services to our growing network of businesses.
                                </div>
                            </div>
                        </div>
                        <div className="inputBoxCompany">
                            <input id={uuidv4()} onChange={formikTwo.handleChange} value={formikTwo.values.newPassword}
                                   placeholder="New pasword" name="newPassword" className="form-control"
                                   type="text"/>
                            <input id={uuidv4()} onChange={formikTwo.handleChange}
                                   value={formikTwo.values.testNewPassword} placeholder="New password"
                                   name="testNewPassword" className="form-control"
                                   type="text"/>
                        </div>


                        <div className="boxForButtons">
                            <button className="backButton btn btn-primary" onClick={() => {
                                setYourCompany(false);
                                setInformation(true);
                                setStep2(false);
                            }}

                            >Back
                            </button>
                            <button className="nextButton btn btn-primary" onClick={() => {
                                setYourCompany(false);
                                setSuccess(true);
                                setStep3(true);
                                setIconPerson(false);
                            }}>Next
                            </button>
                        </div>

                    </div> : ""}


                    {success ? <div className="edit-password-page">

                        <div className="successPhoto">
                            <img src="./images/successPhoto1.png" alt=""/>
                        </div>
                        <div className="textSuccess">
                            Success!
                        </div>

                        <div className="boxForSuccessBtn">

                            <button type="submit" onClick={() => {
                                onSubmit();
                                formikTwo.handleSubmit();
                                dispatch(displayCircle());
                            }} className="successBtn btn">Done
                            </button>
                        </div>

                    </div> : ""}


                </div>
                <div className="right-box">
                    {iconPerson ? <img src="./images/person-for-add-company-page.png" alt=""/> :
                        <img src="./images/successPhoto2.png" alt=""/>}
                </div>
            </div>
            <div className="pattern2">
                <img src="./images/white-ell1.svg" alt="pattern"/>
                <img src="./images/white-ell2.svg" alt="pattern"/>
                <img src="./images/white-ell3.svg" alt="pattern"/>
                <img src="./images/white-ell4.svg" alt="pattern"/>
                <img src="./images/white-ell5.svg" alt="pattern"/>
            </div>
        </div>
    );
}

export default enhancer(EditPassword);