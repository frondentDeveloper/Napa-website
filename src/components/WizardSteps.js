import React, { useState } from 'react';
import RoutesPath from "../routes/routes";

const WizardSteps = () => {

  const [arr, setArr] = useState([
    {active: true, title: ''},
    {active: false, title: 'Templates'},
    {active: false, title: 'Personal information'},
    {active: false, title: 'Address'},
    {active: false, title: 'About yourself and skills'},
    {active: false, title: 'Contacts'},
    {active: false, title: 'Experience'},
    {active: false, title: 'Educations'},
    {active: false, title: 'Interests'}
  ])
  const [currentIdx, setCurrentIdx] = useState(0)

  const onPrev = () => {
    const _activeArr = arr.filter(item => item.active)
    if (_activeArr.length <= 1) return;
    const _newArr = [...arr];
    _newArr[currentIdx].active = false;
    setArr(_newArr);
    setCurrentIdx(currentIdx - 1)
  }

  const onNext = () => {
    if (currentIdx >= arr.length - 1) return
    const _newArr = [...arr]
    _newArr[currentIdx + 1].active = true
    setArr(_newArr)
    setCurrentIdx(currentIdx + 1)
  }

  return (
    <div className="d-flex justify-content-around">
      {arr.map((item, idx) => (
        <div key={idx} className={item.active ? "active" : ""}>
          <span>{item.title}</span>
        </div>
      ))}
      <button onClick={onPrev} >prev</button>
      <button onClick={onNext}>next</button>
      {currentIdx}
    </div>
  );
}

export default WizardSteps;