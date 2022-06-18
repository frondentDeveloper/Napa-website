import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import RoutesPath from "../routes/routes";
import {connect, useDispatch} from "react-redux";
import {addSize, displayCircle, homeCircleVisible, signedWizardNextSteps} from "../actions/careerAction";
import {useFormik} from "formik";
import {v4 as uuidv4} from "uuid";
import {addInitialValuesCompany} from "../actions/addCompanyActions";
import {Form} from "react-bootstrap";


const enhancer = connect(({addCompany: {initialValue,}}) => ({initialValue,}), null);


const AddCompany = (props) => {
    const [image, setImage] = useState(null);
    const [image2, setImage2] = useState(null);
    const {initialValue} = props;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(displayCircle());
    }, []);

    const onSubmit = (event) => {
        navigate(RoutesPath.profileCompany)
    };


    const formikTwo = useFormik({
        initialValues: {
            personAvatar: undefined,
            firstName: "",
            lastName: "",
            phoneNumber: "",
            avatar: undefined,
            companyName: "",
            companyLocation: "",
            companyLink: "",
            companyNumber: "",
            companyAbout: "",
            id: uuidv4(),
        },
        onSubmit: values => {
            dispatch(addInitialValuesCompany({...values}));
        },
    });

    const onUploadTwo = (event) => {
        const {target: {files}} = event;
        const file = files[0];

        function getBase64(file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                setImage(reader.result);
                formikTwo.setFieldValue("avatar", reader.result);
            };
            reader.onerror = function () {
                setImage(null);
                formikTwo.setFieldValue("avatar", "");
            };
        }

        getBase64(file); // prints the base64 string
    };

    const onUploadThree = (event) => {
        const {target: {files}} = event;
        const file = files[0];

        function getBase64(file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                setImage2(reader.result);
                formikTwo.setFieldValue("personAvatar", reader.result);
            };
            reader.onerror = function () {
                setImage2(null);
                formikTwo.setFieldValue("personAvatar", "");
            };
        }

        getBase64(file); // prints the base64 string
    };


    const navigate = useNavigate();


    const [information, setInformation] = useState(true);
    const [yourCompany, setYourCompany] = useState(false);
    const [aboutCompany, setAboutCompany] = useState(false);
    const [success, setSuccess] = useState(false);

    const [step1, setStep1] = useState(true);
    const [step2, setStep2] = useState(false);
    const [step3, setStep3] = useState(false);
    const [step4, setStep4] = useState(false);
    const [iconPerson, setIconPerson] = useState(true);


    return (
        <div className="add-company" id="">
            <div className="forSteps">
                <div className="circleForBrand">
                    <img src="./images/logo.png" alt="" className=""/>
                </div>

                <div className={step1 ? "step-for-informationActive" : "step-for-information"}>
                    <div className={step1 ? "ball-informationActive" : "ball-information"}>
                        <div className="ball2-information">
                            <div className={information ? "titleForStepsActive" : "titleForSteps"}>
                                Personal <br/>
                                information
                            </div>
                        </div>
                    </div>
                </div>

                <div className={step2 ? "step-for-informationActive" : "step-for-information"}>
                    <div className={step2 ? "ball-informationActive" : "ball-information"}>
                        <div className="ball2-information">
                            <div className={yourCompany ? "titleForStepsActive" : "titleForSteps"}>
                                Your company
                            </div>
                        </div>
                    </div>
                </div>

                <div className={step3 ? "step-for-informationActive" : "step-for-information"}>
                    <div className={step3 ? "ball-informationActive" : "ball-information"}>
                        <div className="ball2-information">
                            <div className={aboutCompany ? "titleForStepsActive" : "titleForSteps"}>
                                About company
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div onSubmit={formikTwo.handleSubmit}  className="company-main-mox">
                <div   className="left-box">

                    {information ? <div className="registration-page">

                        <div className="textWelcome">
                            Welcome!
                        </div>
                        <div className="textMain">
                            Complete your profile to join our global community of freelancers and start selling your
                            services to our growing network of businesses.
                        </div>


                        <div>
                            <div className="box-for-avatar" style={{backgroundImage: `url(${image2})`, backgroundSize: "cover"}}>

                                { formikTwo.values.personAvatar === undefined ?
                                    <img src="./images/profile.png" alt=""/> :  ""    }
                            </div>
                            <div className="BoxChoosePhoto">
                                + edit photo
                                <input
                                    onChange={e => onUploadThree(e)}
                                    id={uuidv4()}
                                    className="choosePhoto"
                                    accept="image/png, image/jpeg"
                                    type="file"/>
                            </div>
                        </div>


                        <div className="boxForInput">
                            <input  id={uuidv4()}  onChange={formikTwo.handleChange} value={formikTwo.values.firstName} placeholder="Name" name="firstName" className="form-control" type="text"/>
                            <input  id={uuidv4()}  onChange={formikTwo.handleChange} value={formikTwo.values.lastName} placeholder="Last Name" name="lastName" className="form-control" type="text"/>
                            <input  id={uuidv4()}  onChange={formikTwo.handleChange} value={formikTwo.values.phoneNumber} placeholder="+998 99 999 99 99" name="phoneNumber" className="form-control" type="text"/>
                        </div>

                        <div className="boxForButtons">
                            <button onClick={() => {
                                setStep1(false);
                                navigate(RoutesPath.login)
                            }} className="backButton btn btn-primary">Back
                            </button>
                            <button  className="nextButton btn btn-primary" onClick={() => {
                                setInformation(!information);
                                setYourCompany(!yourCompany);
                                setStep2(true);
                            }}>Next
                            </button>
                        </div>


                    </div> : ""}


                    {yourCompany ? <div className="registration-page">

                        <div className="mainBoxForCompany">
                            <div>
                                <div className="textCompany">
                                    Your company!
                                </div>
                                <div className="box-for-avatar" style={{backgroundImage: `url(${image})`, backgroundSize: "cover"}}>

                                    { formikTwo.values.avatar === undefined ?
                                        <img src="./images/companyAvatar.png" alt=""/> :  ""    }
                                </div>
                                <div className="BoxChoosePhoto">
                                    + edit photo
                                    <input
                                        onChange={e => onUploadTwo(e)}
                                        id={uuidv4()}
                                        className="choosePhoto"
                                        accept="image/png, image/jpeg"
                                        type="file"/>
                                </div>
                            </div>
                        </div>
                        <div className="inputBoxCompany">
                            <input id={uuidv4()}  onChange={formikTwo.handleChange} value={formikTwo.values.companyName}  placeholder="Name your company" name="companyName" className="form-control"
                                   type="text"/>
                            <input id={uuidv4()}  onChange={formikTwo.handleChange} value={formikTwo.values.companyLocation} placeholder="Location company" name="companyLocation" className="form-control"
                                   type="text"/>
                        </div>


                        <div className="boxForButtons">
                            <button className="backButton btn btn-primary" onClick={() => {
                                setStep2(false);
                                setYourCompany(false);
                                setInformation(true);
                            }}
                            >Back
                            </button>
                            <button className="nextButton btn btn-primary" onClick={() => {
                                setYourCompany(false);
                                setAboutCompany(true);
                                setStep3(true);
                            }}>Next
                            </button>
                        </div>

                    </div> : ""}


                    {aboutCompany ? <div className="registration-page">

                        <div className="textWelcome">
                            About your comopany
                        </div>
                        <div className="textMain">
                            Complete your profile to join our global community of freelancers and start selling your
                            services to our growing network of businesses.
                        </div>
                        <div className="boxForAboutCompany">
                            <input id={uuidv4()}  onChange={formikTwo.handleChange} value={formikTwo.values.companyLink} placeholder="Link company" name="companyLink" className="form-control" type="text"/>
                            <input id={uuidv4()}  onChange={formikTwo.handleChange} value={formikTwo.values.companyNumber} placeholder="Tel number company" name="companyNumber" className="form-control"
                                   type="text"/>
                            <textarea id={uuidv4()}  onChange={formikTwo.handleChange} value={formikTwo.values.companyAbout} placeholder="About the company" name="companyAbout" className="form-control"
                                      type="textarea"/>
                        </div>

                        <div className="boxForButtons">
                            <button className="backButton btn btn-primary" onClick={() => {

                                setAboutCompany(false);
                                setYourCompany(true);
                                setStep3(false);
                            }}

                            >Back
                            </button>
                            <button className="nextButton btn btn-primary" onClick={() => {
                                setAboutCompany(false);
                                setSuccess(true);
                                setStep4(true);
                                setIconPerson(false);
                            }}>Next
                            </button>
                        </div>

                    </div> : ""}


                    {success ? <div className="registration-page">

                        <div className="successPhoto">
                            <img src="./images/successPhoto1.png" alt=""/>
                        </div>
                        <div className="textSuccess">
                            Success!
                        </div>

                        <div  className="boxForSuccessBtn">

                            <button type="submit" onClick={() => {
                                onSubmit();
                                dispatch(displayCircle());
                                formikTwo.handleSubmit();
                            }}  className="successBtn btn">Done</button>
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

export default enhancer(AddCompany);