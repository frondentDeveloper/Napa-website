import React, {useState} from 'react'
import image from "./image/image.png"
import "./ffff.scss"
import ModalCom from "./completeModal/ModalCom";
import ComEducat from "./completeEducation/ComEducat";


function progressfirst(){
    var firstCard = document.getElementById("first-card");
    var secondCard = document.getElementById("second-card");
    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var text = document.getElementById("progress-text1");
    var text2 = document.getElementById("progress-text2");
    text.style.opacity = "0";
    text2.style.opacity = "1";
    one.style.top = "33.4%";
    one.style.backgroundColor = "#1D71B8";
    one.style.border = "3px solid #FFFFFF";
    firstCard.style.bottom = "110%";
    secondCard.style.bottom = "20%";
    two.style.top = "60%";
    two.style.backgroundColor = "#FFFFFF";
    two.style.border = "7px solid #4169E1"
}
function progresssecond(){
    var secondCard = document.getElementById("second-card");
    var thirdCard = document.getElementById("third-card");
    var two = document.getElementById("two");
    var three = document.getElementById("three");
    var text2 = document.getElementById("progress-text2");
    var text3 = document.getElementById("progress-text3");
    text2.style.opacity = "0";
    text3.style.opacity = "1";
    two.style.top = "35.4%";
    two.style.backgroundColor = "#1D71B8"
    two.style.border = "3px solid #FFFFFF"
    secondCard.style.bottom = "110%"
    thirdCard.style.bottom = "10%"
    three.style.top = "60%"
    three.style.backgroundColor = "#FFFFFF"
    three.style.border = "7px solid #4169E1"
}
function progressthird(){
    var fourthCard = document.getElementById("fourth-card");
    var thirdCard = document.getElementById("third-card");
    var four = document.getElementById("four");
    var three = document.getElementById("three");
    var text4 = document.getElementById("progress-text4");
    var text3 = document.getElementById("progress-text3");
    text3.style.opacity = "0";
    text4.style.opacity = "1";
    three.style.top = "37.4%"
    three.style.backgroundColor = "#1D71B8"
    three.style.border = "3px solid #FFFFFF"
    thirdCard.style.bottom = "110%";
    fourthCard.style.bottom = "20%";
    four.style.top = "60%"
    four.style.backgroundColor = "#FFFFFF"
    four.style.border = "7px solid #4169E1"
}
function progressfourth(){
    var fourthCard = document.getElementById("fourth-card");
    var fifthCard = document.getElementById("fifth-card");
    var four = document.getElementById("four");
    var five = document.getElementById("five");
    var text4 = document.getElementById("progress-text4");
    var text5 = document.getElementById("progress-text5");
    text5.style.opacity = "1";
    text4.style.opacity = "0";
    four.style.top = "39.4%"
    four.style.backgroundColor = "#1D71B8"
    four.style.border = "3px solid #FFFFFF"
    fourthCard.style.bottom = "110%";
    fifthCard.style.bottom = "30%";
    five.style.top = "60%"
    five.style.backgroundColor = "#FFFFFF"
    five.style.border = "7px solid #4169E1"
}
function progressfifth(){
    var sixthCard = document.getElementById("sixth-card");
    var fifthCard = document.getElementById("fifth-card");
    var six = document.getElementById("six");
    var five = document.getElementById("five");
    var text6 = document.getElementById("progress-text6");
    var text5 = document.getElementById("progress-text5");
    text5.style.opacity = "0";
    text6.style.opacity = "1";
    five.style.top = "41.4%"
    five.style.backgroundColor = "#1D71B8"
    five.style.border = "3px solid #FFFFFF"
    fifthCard.style.bottom = "110%";
    sixthCard.style.bottom = "30%";
    six.style.top = "60%"
    six.style.backgroundColor = "#FFFFFF"
    six.style.border = "7px solid #4169E1"
}
function progresssixth(){
    var sixthCard = document.getElementById("sixth-card");
    var seventhCard = document.getElementById("seventh-card");
    var six = document.getElementById("six");
    var seven = document.getElementById("seven");
    var text6 = document.getElementById("progress-text6");
    var text7 = document.getElementById("progress-text7");
    text7.style.opacity = "1";
    text6.style.opacity = "0";
    six.style.top = "43.3%"
    six.style.backgroundColor = "#1D71B8"
    six.style.border = "3px solid #FFFFFF"
    seventhCard.style.bottom = "50%";
    sixthCard.style.bottom = "110%";
    seven.style.top = "60%"
    seven.style.backgroundColor = "#FFFFFF"
    seven.style.border = "7px solid #4169E1"
}
function progressseventh(){
    var eighthCard = document.getElementById("eighth-card");
    var seventhCard = document.getElementById("seventh-card");
    var eight = document.getElementById("eight");
    var seven = document.getElementById("seven");
    var text8 = document.getElementById("progress-text8");
    var text7 = document.getElementById("progress-text7");
    var secondline = document.getElementById("secondline");
    secondline.style.opacity = "0";
    text7.style.opacity = "0";
    text8.style.opacity = "1";
    seven.style.top = "45.1%"
    seven.style.backgroundColor = "#1D71B8"
    seven.style.border = "3px solid #FFFFFF"
    eighthCard.style.bottom = "50%";
    seventhCard.style.bottom = "110%";
    eight.style.top = "60%"
    eight.style.backgroundColor = "#FFFFFF"
    eight.style.border = "7px solid #4169E1"
}
function progresssecondback(){
    var firstCard = document.getElementById("first-card");
    var secondCard = document.getElementById("second-card");
    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var text = document.getElementById("progress-text1");
    var text2 = document.getElementById("progress-text2");
    text.style.opacity = "1";
    text2.style.opacity = "0";
    one.style.top = "60%";
    one.style.backgroundColor = "#FFFFFF";
    one.style.border = "7px solid #4169E1";
    firstCard.style.bottom = "17%";
    secondCard.style.bottom = "-75%";
    two.style.top = "81%";
    two.style.backgroundColor = "#1D71B8";
    two.style.border = "3px solid #FFFFFF"
}
function progressthirdback(){
    var secondCard = document.getElementById("second-card");
    var thirdCard = document.getElementById("third-card");
    var two = document.getElementById("two");
    var three = document.getElementById("three");
    var text2 = document.getElementById("progress-text2");
    var text3 = document.getElementById("progress-text3");
    text2.style.opacity = "1";
    text3.style.opacity = "0";
    two.style.top = "60%";
    two.style.backgroundColor = "#FFFFFF"
    two.style.border = "7px solid #4169E1"
    secondCard.style.bottom = "20%"
    thirdCard.style.bottom = "-90%"
    three.style.top = "83.8%"
    three.style.backgroundColor = "#1D71B8"
    three.style.border = "3px solid #FFFFFF"
}
function progressfourthback(){
    var fourthCard = document.getElementById("fourth-card");
    var thirdCard = document.getElementById("third-card");
    var four = document.getElementById("four");
    var three = document.getElementById("three");
    var text4 = document.getElementById("progress-text4");
    var text3 = document.getElementById("progress-text3");
    text4.style.opacity = "0";
    text3.style.opacity = "1";
    three.style.top = "60%";
    three.style.backgroundColor = "#FFFFFF"
    three.style.border = "7px solid #4169E1"
    thirdCard.style.bottom = "18%"
    fourthCard.style.bottom = "-75%"
    four.style.top = "86%"
    four.style.backgroundColor = "#1D71B8"
    four.style.border = "3px solid #FFFFFF"
}
function progressfifthback(){
    var fourthCard = document.getElementById("fourth-card");
    var fifthCard = document.getElementById("fifth-card");
    var four = document.getElementById("four");
    var five = document.getElementById("five");
    var text4 = document.getElementById("progress-text4");
    var text5 = document.getElementById("progress-text5");
    text4.style.opacity = "1";
    text5.style.opacity = "0";
    four.style.top = "60%";
    four.style.backgroundColor = "#FFFFFF"
    four.style.border = "7px solid #4169E1"
    fourthCard.style.bottom = "20%"
    fifthCard.style.bottom = "-75%"
    five.style.top = "88.6%"
    five.style.backgroundColor = "#1D71B8"
    five.style.border = "3px solid #FFFFFF"
}
function progresssixthback(){
    var sixthCard = document.getElementById("sixth-card");
    var fifthCard = document.getElementById("fifth-card");
    var six = document.getElementById("six");
    var five = document.getElementById("five");
    var text6 = document.getElementById("progress-text6");
    var text5 = document.getElementById("progress-text5");
    text6.style.opacity = "0";
    text5.style.opacity = "1";
    five.style.top = "60%";
    five.style.backgroundColor = "#FFFFFF"
    five.style.border = "7px solid #4169E1"
    fifthCard.style.bottom = "50%"
    sixthCard.style.bottom = "-75%"
    six.style.top = "91%"
    six.style.backgroundColor = "#1D71B8"
    six.style.border = "3px solid #FFFFFF"
}
function progressseventhback(){
    var sixthCard = document.getElementById("sixth-card");
    var seventhCard = document.getElementById("seventh-card");
    var six = document.getElementById("six");
    var seven = document.getElementById("seven");
    var text6 = document.getElementById("progress-text6");
    var text7 = document.getElementById("progress-text7");
    text6.style.opacity = "1";
    text7.style.opacity = "0";
    six.style.top = "60%";
    six.style.backgroundColor = "#FFFFFF"
    six.style.border = "7px solid #4169E1"
    sixthCard.style.bottom = "50%"
    seventhCard.style.bottom = "-55%"
    seven.style.top = "93.6%"
    seven.style.backgroundColor = "#1D71B8"
    seven.style.border = "3px solid #FFFFFF"
}
function progresseighthback(){
    var eighthCard = document.getElementById("eighth-card");
    var seventhCard = document.getElementById("seventh-card");
    var eight = document.getElementById("eight");
    var seven = document.getElementById("seven");
    var text8 = document.getElementById("progress-text8");
    var text7 = document.getElementById("progress-text7");
    var secondline = document.getElementById("secondline");
    secondline.style.opacity = "1";
    text8.style.opacity = "0";
    text7.style.opacity = "1";
    seven.style.top = "60%";
    seven.style.backgroundColor = "#FFFFFF"
    seven.style.border = "7px solid #1D71B8"
    seventhCard.style.bottom = "50%"
    eighthCard.style.bottom = "-75%"
    eight.style.top = "96%"
    eight.style.backgroundColor = "#1D71B8"
    eight.style.border = "3px solid #FFFFFF"
}


function CompleteForm() {

    const [user, setUser] = useState({
        firstName:"",
        name:"",
        image:""
    });

    const [inputList, setInputList] = useState([{language:"", level:""}])

    function handleClikMore() {
        setInputList([...inputList, {language:"", level:""}])
    }

    const handleInputChange = (e, index) =>{
        const {name, value} = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list)
    };

    const handleRemove = (index) =>{
        const list=[...inputList];
        list.splice(index,1);
        setInputList(list)
    };

    const [icon, setIcon] = useState(false);

    function baseImage (event) {
        let files = event.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (e) => {
            setUser({
                ...user,
                image: e.target.result,
            });
        }
        setIcon(true)
    }

    const [tags, setTags] = useState([])
    const [hobs, setHobs] = useState([])

    function handleKeyDown(e) {
        if (e.key !== 'Enter')return;
        const value = e.target.value;
        if (!value.trim())return;
        setTags([...tags, value]);
        e.target.value = ""
    }

    function handleKeyHop(e) {
        if (e.key !== 'Enter')return;
        const value = e.target.value;
        if (!value.trim())return;
        setHobs([...hobs, value]);
        e.target.value = ""
    }

    function removeTag(index) {
        setTags(tags.filter((el, i) => i !== index))
    }
    function removeHop(index) {
        setHobs(hobs.filter((el, i) => i !== index))
    }
    
  return (
    <>
        <div className="animations-image-all">
            <img className="image image1" src="./images/white-ell1.svg" alt="pattern"/>
            <img className="image image2" src="./images/white-ell2.svg" alt="pattern"/>
            <img className="image image3" src="./images/white-ell3.svg" alt="pattern"/>
            <img className="image image4" src="./images/white-ell4.svg" alt="pattern"/>
            <img className="image image5" src="./images/white-ell5.svg" alt="pattern"/>
        </div>
    <div className="wrapper">
            <div className="main-content">
                <div className="first-card card1" id="first-card">
                    <div onChange={baseImage} className="upload-image">
                        {
                            icon ? <><img className="img-in-upload" src={user.image} alt=""/></> : <><img className="img-in-upload1" src={image} alt=""/></>
                        }
                        <input  className="img-file-up" type="file"/>
                    </div>
                    <p className="add-your-prifile">Add your profile photo</p>
                    <div className="all-r-l-input">
                        <div className="right-input">
                            <div>
                                <label className="mt-4 label-style" htmlFor="">Firstname</label>
                                <input onChange={(e)=>setUser({...user, firstName: e.target.value})} className="form-control inputs-all" type="text" placeholder="Firstname"/>
                            </div>
                            <div>
                                <label className="mt-4 label-style" htmlFor="">E-mail</label>
                                <input className="form-control inputs-all" type="e-mail" placeholder="E-mail"/>
                            </div>
                        </div>
                        <div className="left-input">
                            <div>
                                <label className="mt-4 label-style" htmlFor="">Lastname</label>
                                <input  onChange={(e)=>setUser({...user, firstName: e.target.value})} className="form-control inputs-all" type="text" placeholder="Lastname"/>
                            </div>
                            <div>
                                <label className="mt-4 label-style" htmlFor="">Phone number</label>
                                <input className="form-control inputs-all" type="number" placeholder="+xxx (xx) xxx- xx-xx"/>
                                <button className="btn btn-next-to1 mt-3" onClick={progressfirst}>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="second-card card1" id="second-card">
                    <p className="name-top-input">
                        Welcome  {user.firstName}
                    </p>
                    <p className="complete-your">
                        Complete your profile to join our global community of freelancers and start selling your services to our growing network of businesses.
                    </p>
                    <div className="all-r-l-input">
                        <div className="right-input">
                            <label className="mt-4 label-style" htmlFor="">Living address</label>
                            <select className="form-select  form-control inputs-all" name="" id="">
                                <option value="">Uzbekistan</option>
                                <option value="">USA</option>
                                <option value="">Russia</option>
                            </select>
                        </div>
                        <div className="left-input">
                            <div>
                                <label className="mt-4 label-style" htmlFor="">Region</label>
                                <select className="form-select form-control inputs-all" name="" id="">
                                    <option value="">Toshken</option>
                                    <option value="">Andijon</option>
                                    <option value="">Fargona</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="mt-4 label-style" htmlFor="">Street, apartment</label>
                        <input placeholder="Street, apartment" className="form-control inputs-all1" type="text"/>
                    </div>
                    <div className="all-btn-d-flex">
                        <button className="btn btn-next-to-bac" onClick={progresssecondback}>Back</button>
                        <button className="btn btn-next-to" onClick={progresssecond}>Next</button>
                    </div>
                </div>
                <div className="third-card card1" id="third-card">
                    <p className="write-about">
                        Write a little about yourself
                    </p>
                    <div className="all-r-l-input">
                        <div className="right-input">
                            <label className="mt-4 label-style" htmlFor="">Select your Positions</label>
                            <select className="form-select form-control inputs-all" name="" id="">
                                <option value="">Frontend</option>
                                <option value="">Backend</option>
                                <option value="">Web designer</option>
                            </select>
                        </div>
                        <div className="left-input">
                            <div>
                                <label className="mt-4 label-style" htmlFor="">Date of birth</label>
                                <input type="date" className="form-control inputs-all"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="label-style mt-4" htmlFor="">Write down your skills</label>
                        <div>
                            <div className="tag-input-box form-control">
                                {
                                    tags.map((tag, index)=>(
                                        <div className="tag-item " key={index}>
                                            <span className="text">{tag}</span>
                                            <span onClick={()=>removeTag(index)} className="close">x</span>
                                        </div>
                                    ))
                                }
                                <input onKeyDown={handleKeyDown} className="tag-input" type="text" placeholder="Type something"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="label-style mt-4" htmlFor="">Hobbies</label>
                        <div>
                            <div className="hob-input-box inputs-all1 form-control">
                                {
                                    hobs.map((hobs, index)=>(
                                        <div className="hob-item" key={index}>
                                            <span className="textH">{hobs}</span>
                                            <span onClick={()=>removeHop(index)} className="closeH">x</span>
                                        </div>
                                    ))
                                }
                                <input onKeyDown={handleKeyHop} type="text" className="hobbies-input" placeholder="Type hobbies"/>
                            </div>

                        </div>
                    </div>
                    <div>
                        <textarea  className="form-control mt-4 " placeholder="Describe yourself to buyers" name="" id="" cols="30" rows="6"></textarea>
                    </div>
                    <div className="all-btn-d-flex">
                        <button className="btn btn-next-to-bac" onClick={progressthirdback}>Back</button>
                        <button className="btn btn-next-to" onClick={progressthird}>Next</button>
                    </div>
                </div>
                <div className="fourth-card card1" id="fourth-card">
                    <p className="write-about">Write what languages you speak</p>
                    <p className="complete-your">
                        The more languages ​​you know, <br/>
                        the more  foreign employers will contact you.
                    </p>
                    <label className="mt-4 label-style" htmlFor="">Language</label>
                    {
                        inputList.map((x, i)=> (
                            <div className="all-r-l-input mt-3">
                                <div className="right-input">

                                    <select onChange={e => handleInputChange(e, i)} className="form-select form-control inputs-all"
                                            name="language" id="">
                                        <option value="">English</option>
                                        <option value="">Russian</option>
                                        <option value="">Uzbek</option>
                                    </select>
                                </div>
                                {
                                    inputList.length!==1 &&
                                    <button onClick={()=>handleRemove(i)} className="remove-btn">-</button>
                                }
                                <div className="left-input">
                                    <div>
                                        <select onChange={e => handleInputChange(e, i)}
                                                className="form-select form-control inputs-all " name="level" id="">
                                            <option value="">A-1 Beginner</option>
                                            <option value="">A-2 Elementary</option>
                                            <option value="">B-1 Intermediate</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        ))}

                    <button value="add" onClick={handleClikMore} className="bnt mt-4 btn-success1 inputs-all1">
                        +Add new
                    </button>
                    <div className="all-btn-d-flex">
                        <button className="btn btn-next-to-bac" onClick={progressfourthback}>Back</button>
                        <button className="btn btn-next-to" onClick={progressfourth}>Next</button>
                    </div>

                </div>
                <div className="fifth-card card1" id="fifth-card">
                    <div>
                        <div>
                            <ModalCom/>
                        </div>
                    </div>
                    <div className="all-btn-d-flex">
                        <button className="btn btn-next-to-bac" onClick={progressfifthback}>Back</button>
                        <button className="btn btn-next-to" onClick={progressfifth}>Next</button>
                    </div>
                </div>
                <div className="sixth-card card1" id="sixth-card">
                   <ComEducat/>
                   <div className="all-btn-d-flex">
                       <button className="btn btn-next-to-bac" onClick={progresssixthback}>Back</button>
                       <button className="btn btn-next-to" onClick={progresssixth}>Next</button>
                   </div>
                </div>
                <div className="seventh-card card1" id="seventh-card">
                    Contacts Card
                    <div className="all-btn-d-flex">
                        <button className="btn btn-next-to-bac" onClick={progressseventhback}>Back</button>
                        <button className="btn btn-next-to" onClick={progressseventh}>Next</button>
                    </div>
                </div>
                <div className="eighth-card card1" id="eighth-card">
                    Resume Card
                    <div className="all-btn-d-flex">
                        <button className="btn btn-next-to-bac" onClick={progresseighthback}>Back</button>
                        <button className="btn btn-next-to" >Next</button>
                    </div>
                </div>
            </div>
            <div className="container-circle-all">
                <div className="container">
                    <div className="career">
                        <p className="my-career-text">My Career</p>
                    </div>
                    <div className="one dot" id="one"></div>
                    <div className="two dot" id="two"></div>
                    <div className="three dot" id="three"></div>
                    <div className="four dot" id="four"></div>
                    <div className="five dot" id="five"></div>
                    <div className="six dot" id="six"></div>
                    <div className="seven dot" id="seven"></div>
                    <div className="eight dot" id="eight"></div>
                    <p id="progress-text1" className="progress-text1 progress-text">Personal Information</p>
                    <p id="progress-text2" className="progress-text2 progress-text">Address</p>
                    <p id="progress-text3" className="progress-text3 progress-text">About Yourself and Skills</p>
                    <p id="progress-text4" className="progress-text4 progress-text">Language</p>
                    <p id="progress-text5" className="progress-text5 progress-text">Experience</p>
                    <p id="progress-text6" className="progress-text6 progress-text">Educations</p>
                    <p id="progress-text7" className="progress-text7 progress-text">Contacts</p>
                    <p id="progress-text8" className="progress-text8 progress-text">Resume</p>

                    <div className="firstline"></div>
                    <div className="secondline" id="secondline"></div>
                </div>
            </div>
     </div>
</>
  )
}

export default CompleteForm;