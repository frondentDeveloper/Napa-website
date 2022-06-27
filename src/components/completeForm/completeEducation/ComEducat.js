import React, {useState} from 'react';
import "./education.scss"
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

function ComEducat(props) {

    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal)
    };

    const [school, setSchool] = useState("");
    const [degree, setDegree] = useState("");
    const [isComplete, setIsComplete] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [tagName, setTagName] = useState("");


    const [dataList, setDataList] = useState([]);

    const addTask = () =>{
        if (school.trim().length > 0, degree.trim().length > 0, isComplete !== false, start !== "дд.мм.гггг", end !== "дд.мм.гггг",
        tagName.trim().length > 0){
            setModal(false);
            const newTask = dataList;
            let id = Date.now();
            newTask.push({id:id, school,degree,isComplete,start,end,tagName});
            setDataList(newTask)
            setSchool(""); setTagName(""); setEnd(""); setStart(""); setDegree("")
        }
        else {
            alert("Fo'rmani to'ldiring !!!")
        }
    };


    const deleteTask = (id)=>{
        const index = dataList.findIndex(item=> item.id == id);
        const myData = [...dataList];
        myData.splice(index,1);
        setDataList(myData)
    };


    return (
        <>
            <p className="write-about">Educations</p>
            <p className="complete-your">
                Freelancers who add their experience are twice as likely to win work.
                But if you’re just starting out, you can still create a great profile.
                Just head on to the next page.
            </p>
            {
                dataList.map((item, index)=>(
                    <div className="map-modal mt-2">
                        <div className="w-75">
                            <p className="comName">{item.school}</p>
                            <p className="tagName">{item.degree}</p>
                        </div>
                        <div className="modal-image-e-d">
                            <img src="image/edit (1).png" alt=""/>

                            <img onClick={()=>deleteTask(item.id)} src="image/trash-2.png" alt=""/>
                        </div>
                    </div>
                ))
            }
            <button onClick={toggle} className="form-control inputs-all1 add-bnt- mt-3">
                + Add new
            </button>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Add Education History</ModalHeader>
                <ModalBody>
                    <input onChange={(e) => setSchool(e.target.value)} placeholder="School name"
                           type="text" className="form-control inputs-all1 "/>
                    <select className="form-select inputs-all1 mt-3" name="" id="" onChange={(e) => setDegree( e.target.value)}>
                        <option value="">Bachelor</option>
                    </select>
                    <input onChange={(e) => setDegree(e.target.value)} placeholder="Type of study"
                    type="text" className="form-control inputs-all1 mt-4"/>
                    <input onChange={(e) => setDegree(e.target.value)} placeholder="Location of school"
                           type="text" className="form-control inputs-all1 mt-4"/>
                    <div className="all-r-l-input">
                        <div className="right-input">
                            <label className="mt-4 select-curr" htmlFor="">Date from</label>
                            <input onChange={(e)=>setStart(e.target.value)} type="date" className="form-control inputs-all"/>
                        </div>
                        <div className="left-input">
                            <div>
                                <label className="mt-4 select-curr" htmlFor="">to</label>
                                <input onChange={(e)=>setEnd(e.target.value)} type="date" className="form-control inputs-all"/>
                            </div>
                        </div>
                    </div>

                </ModalBody>
                <ModalFooter className="modal-footer1">
                    <div className="checkbox-in-m1">
                        <input onChange={(e) => setIsComplete( e.target.value)} className="checkbox-in-m mt-4"
                               type="checkbox"/>
                        <span className="select-curr1">I am currently working in this role</span>
                    </div>
                    <div className="all-btn-d-flex">
                        <button className="btn btn-next-to-bac" onClick={toggle}>Cancel</button>
                        <button className="btn btn-next-to" onClick={addTask}>Save</button>
                    </div>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default ComEducat;