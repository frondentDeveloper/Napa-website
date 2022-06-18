import React, {useEffect, useState} from 'react';
import Login from "./components/Login";
import Steps from "./components/Steps";
import Resumes from "./components/Resumes";
import {connect, useDispatch} from "react-redux";
import PostJop from "./components/postJop/postJop";
import PostJop1 from "./components/postJop/postJop1";
import Personalization from "./components/Personalization";
import PersonalInformation from "./components/PersonalInformation";
import FormCarousel from "./components/FormCarousel";
import Home from "./components/Home";
import {Routes, Route, useNavigate, useLocation} from "react-router-dom";
import RoutesPath from "./routes/routes";
import MainLogin from "./components/MainLogin";
import AboutUs from "./components/AboutUs";
import {displayCircle, addSize, signedWizardNextSteps} from "./actions/careerAction";
import PostJop2 from "./components/postJop/postJop2";
import PostJop3 from "./components/postJop/postJop3";
import MyResume from "./components/my-resume";
import AddCompany from "./components/add-company";
import ProfileCompany from "./components/profile-company";
import Jops from "./components/postJop/Jops";
import BestMatches from "./components/postJop/BestMatches";
import NewJops from "./components/postJop/NewJops";
import SavedJops from "./components/postJop/SavedJops";
import {ToastContainer} from "react-toastify";
import NotFound from "./components/NotFound";
import MyCv from "./components/my-cv";
import EditPassword from "./components/edit-password";
import ChatForFreelancer from "./components/chat-for-freelancer";
import ChatForCompany from "./components/chat-for-company";
import Talants from "./components/talants/talants";
import BestMatchesTalants from "./components/talants/bestMatches";
import NewTalants from "./components/talants/NewTalants";
import Saved from "./components/talants/Saved";
import SignUpPage from "./components/sign-up-page";

const enhancer = connect(
    ({resumes: {doneResumes}}) =>
        ({doneResumes}), null);

const App = props => {
    const dispatch = useDispatch();
    const [topSpace, setTopSpace] = useState(0);

  const addedTopMargin = (num) => {
    setTopSpace(num)
    // if (num === 0) setTopSpace(true)
    // if (num < 0) setTopSpace(false)
  };

    return (
        <div className="app-wrapper">
            <Steps topSpace={topSpace}/>
            <Routes>
                <Route path={RoutesPath.home} element={<Home addedTopMargin={addedTopMargin}/>}/>
                <Route path={RoutesPath.login} element={<Login/>}/>
                <Route path={RoutesPath.templates} element={<Personalization/>}/>
                <Route path={RoutesPath.postJop} element={<PostJop/>}/>
                <Route path={RoutesPath.postJop2} element={<PostJop2/>}/>
                <Route path={RoutesPath.postJop3} element={<PostJop3/>}/>
                <Route path={RoutesPath.jop} element={<BestMatches/>}/>
                <Route path={RoutesPath.newJops} element={<NewJops/>}/>
                <Route path={RoutesPath.savedJops} element={<SavedJops/>}/>
                <Route onClick={()=>{ dispatch(displayCircle()) }} path={RoutesPath.postJop1} element={<PostJop1/>}/>
                <Route onClick={()=>{ dispatch(displayCircle()) }} path={RoutesPath.aboutUs} element={<AboutUs/>}/>
                <Route path={RoutesPath.aboutUs} element={<AboutUs/>}/>
                <Route path={RoutesPath.myResume} element={<MyResume/>}/>
                <Route path={RoutesPath.addCompany} element={<AddCompany/>}/>
                <Route path={RoutesPath.profileCompany} element={<ProfileCompany/>}/>
                <Route element={<NotFound/>}/>
                <Route path={RoutesPath.myCv} element={<MyCv/>}/>
                <Route path={RoutesPath.editPassword} element={<EditPassword/>}/>
                <Route path={RoutesPath.chatForFreelancer} element={<ChatForFreelancer/>}/>
                <Route path={RoutesPath.chatForCompany} element={<ChatForCompany/>}/>
                <Route path={RoutesPath.talants} element={<Talants/>}/>
                <Route path={RoutesPath.bestMatches} element={<BestMatchesTalants/>}/>
                <Route path={RoutesPath.NewTalants} element={<NewTalants/>}/>
                <Route path={RoutesPath.Saved} element={<Saved/>}/>
                <Route path={RoutesPath.signUpPage} element={<SignUpPage/>}/>

                {/*<div className="done-resumes">*/}
                {/*  <Resumes/>*/}
                {/*</div>*/}
            </Routes>
            <ToastContainer/>
        </div>
    );
};

export default enhancer(App);