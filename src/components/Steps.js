import React from 'react';
import {connect} from "react-redux";

const enhancer = connect(({size: {size, resume, wizardSteps, displayNone, scrollDown}}) => ({
  size,
  resume,
  wizardSteps,
  displayNone,
  scrollDown
}));

const Steps = (props) => {
  console.log("props")
  console.log(props)
  // const {wizardSteps} = props;
  const {wizardSteps, topSpace} = props;
  console.log(props.size)
  return (
    <div className={props.displayNone ? "stepsNone" : "stepsShow"}>
      <div className={!props.resume ? "steps-wrapper steps-wrapper-show" : "steps-wrapper steps-wrapper-hide"}>
        <div className="steps">
          <div className={props.size ? "circle-show" : "circle-hide"}>
            <div className="logo">
              <img src="./images/logo.png" alt="logo"/>
            </div>
            <div className="logo-title">
              <img src="./images/by Napa.png" alt=""/>
            </div>
          </div>
          {
            wizardSteps.map((step, idx) => (
              <div key={idx} className={props.size ? "steps-hide steps-shell" : "steps-show steps-shell"}>
                <div className={step.active ? "stick active" : "stick"}/>
                <div className={step.active ? "ball active" : "ball"}>
                  <div className="inside-ball"/>
                  <div className="steps-title">{step.title}</div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>

  );

};

export default enhancer(Steps);