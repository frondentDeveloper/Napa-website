import React, {useEffect, useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import "./modal.scss"

function ModalCom(props) {

    const [modal, setModal] = useState(false);


    const toggle = () => {
        setModal(!modal)
    };

    const [company, setCompany] = useState("");
    const [job, setJob] = useState("");
    const [isComplete, setIsComplete] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [tagName, setTagName] = useState("");
    // const deleteJob = (index) => {
    //     const deleteState = state.dataList;
    //     deleteState.splice(index, 1);
    //     setState([...deleteState])
    // };
const [dataList, setDataList] = useState([]);

        const addTask = () =>{
            if (company.trim().length > 0, job.trim().length > 0, isComplete !== false, start !== "дд.мм.гггг", end !== "дд.мм.гггг",
            tagName.trim().length > 0){
                setModal(false);
                const newTask = dataList;
                let id = Date.now();
                newTask.push({id:id, company,job,isComplete,start,end,tagName});
                setDataList(newTask)
                setCompany(""); setTagName(""); setEnd(""); setStart(""); setJob("")
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
            <div>
                <p className="write-about">Work Experience</p>
                <p className="complete-your">
                    Freelancers who add their experience are twice as likely to win work.
                    But if you’re just starting out, you can still create a great profile.
                    Just head on to the next page.
                </p>

                    {
                         dataList.map((item, index)=>(
                           <div className="map-modal mt-2">
                           <div className="w-75">
                               <p className="comName">{item.company}</p>
                               <p className="tagName">{item.job}</p>
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
            </div>


            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Add Education History</ModalHeader>
                <ModalBody>
                    <input onChange={(e) => setCompany(e.target.value)} placeholder="Company name"
                           type="text" className="form-control mt-4 inputs-all1"/>
                    <input onChange={(e) => setJob( e.target.value)} placeholder="Job" type="text"
                           className="form-control mt-4 inputs-all1"/>
                    <input onChange={(e) => setIsComplete( e.target.value)} className="checkbox-in mt-4"
                           type="checkbox"/>
                    <span className="select-curr">I am currently working in this role</span>
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
                    <textarea onChange={(e)=>setTagName(e.target.value)} className="form-control mt-3" name="" id="" cols="30" rows="3"></textarea>
                </ModalBody>
                <ModalFooter>

                    <button className="btn btn-next-to-bac" onClick={toggle}>Cancel</button>
                    <button className="btn btn-next-to" onClick={addTask}>Save</button>

                </ModalFooter>
            </Modal>
        </>
    );
}

export default ModalCom;