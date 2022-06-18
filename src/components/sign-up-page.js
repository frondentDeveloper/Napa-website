import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import RoutesPath from "../routes/routes";

const SignUpPage = () => {
    const dispatch = useDispatch();

    return (
        <div className="main_jop h-100">
            <div className="container">
                <div className="circle-show1"> </div>
                <div className="position-absolute" style={{top: "10%", left: "10%"}}>
                    <div className="logo">
                        <img src="./images/logo.png" alt="logo"/>
                    </div>
                    <div className="logo-title mt-3">
                        <img src="./images/by Napa.png" alt=""/>
                    </div>
                </div>
                <Link to={RoutesPath.home} className="w-100 d-flex justify-content-end post_back">
                    <div><img src="/images/back.png" className="me-2 mt-2" alt=""/></div>
                    <p className="back text-black">back</p>
                </Link>
                <div className="row komputer">
                    <div className="col-6">
                        <Link onClick={() => {
                        }} to={RoutesPath.login} className="text-black card_jop">
                            <div className="d-flex align-items-center">
                                <div className="me-3"><img className="w-100" src="/images/clock.png" alt=""/></div>
                                <h6 className="mt-1">Freelancer</h6>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut et ex iusto magni numquam
                                quaerat.</p>
                        </Link>
                        <Link to={RoutesPath.addCompany} className="card_jop1 text-black">
                            <div className="d-flex align-items-center">
                                <div className="me-3"><img className="w-100" src="/images/comp.png" alt=""/></div>
                                <h6>Company</h6>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut et ex iusto magni numquam
                                quaerat.</p>
                        </Link>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <img className="" style={{zIndex: "10", marginBottom: "20%"}} width="80%" src="/images/komputer.svg" alt="Error"/>
                    </div>
                </div>
                <div className="pattern1">
                    <img src="./images/white-ell1.svg" alt="pattern"/>
                    <img src="./images/white-ell2.svg" alt="pattern"/>
                    <img src="./images/white-ell3.svg" alt="pattern"/>
                    <img src="./images/white-ell4.svg" alt="pattern"/>
                    <img src="./images/white-ell5.svg" alt="pattern"/>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;