import React, {useState, useRef, useEffect} from 'react';
import Slider from "react-slick";
import PersonalInformationFormCard from "./PersonalInformationFormCard";
import AddressFormCard from "./AddressFormCard";
import AboutYourselfFormCard from "./AboutYourselfFormCard";
import {connect} from "react-redux";
import ContactsFormCard from "./ContactsFormCard";
import ExperienceFormCard from "./ExperienceFormCard";
import EducationsFormCard from "./EducationsFormCard";
import InterestsFormCard from "./InterestsFormCard";
import {useNavigate, useLocation} from "react-router-dom";

const enhancer = connect(({size: {resume}}) => ({resume}));
const FormCarousel = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const sliderRef = useRef(null);
  const [slideStep, setSlideStep] = useState(0);
  useEffect(() => {
    navigate(location.pathname, {state: {
      step: slideStep
      }})
  }, [slideStep]);
  useEffect(() => {
    sliderRef.current.slickGoTo(location?.state?.step)
  }, [])
  console.log("location ", location);

  const goToNextStep = (hasNext) => {
    sliderRef.current.slickGoTo(getStep(hasNext))
  };

  const getStep = hasNext => {
    return hasNext ? slideStep + 1 : slideStep - 1
  }

  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    pause: false,
    pauseOnHover: false,
    speed: 500,
    autoplaySpeed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    vertical: true,
    verticalSwiping: true,
    draggable: false,
    adaptiveHeight: true,
    beforeChange: (currentSlide, nextSlide) => setSlideStep(nextSlide)
  };

  return (
    <div className={ !props.resume ? "forms form-carousel-show" : "forms form-carousel-hide" }>
      <Slider ref={sliderRef} {...settings}>
        <div className="forms-slider-child">
          <PersonalInformationFormCard goToNextStep={goToNextStep}/>
        </div>
        <div className="forms-slider-child">
          <AddressFormCard goToNextStep={goToNextStep}/>
        </div>
        <div className="forms-slider-child">
          <AboutYourselfFormCard goToNextStep={goToNextStep}/>
        </div>
        <div className="forms-slider-child">
          <EducationsFormCard goToNextStep={goToNextStep}/>
        </div>
        <div className="forms-slider-child">
          <ExperienceFormCard goToNextStep={goToNextStep}/>
        </div>
        <div className="forms-slider-child">
          <ContactsFormCard goToNextStep={goToNextStep}/>
        </div>
        <div className="forms-slider-child">
          <InterestsFormCard goToNextStep={goToNextStep}/>
        </div>
      </Slider>
    </div>
  );
}

export default enhancer(FormCarousel);