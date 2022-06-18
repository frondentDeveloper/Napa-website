import React from 'react';
import Jop from "./Jop";
import {useDispatch, connect} from "react-redux";
import {displayCircle} from "../../actions/careerAction";
import {Button, Form} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import RoutesPath from "../../routes/routes";
import CreatableSelect from "react-select/creatable";
import {useFormik} from "formik";
import {addAboutYourselfNewSkills} from "../../actions/appendActions";
import {toast} from "react-toastify";
import {jobSkillsValues} from "../../actions/jopAction";


const PostJop3 = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    dispatch(displayCircle());

    const options = [
        {value: 'figma', label: 'Figma'},
        {value: 'photoshop', label: 'Adobe Photoshop'},
        {value: 'Illustrator', label: 'Adobe Illustrator'},
        {value: 'redux', label: 'Redux'},
        {value: 'html', label: 'SQL'},
        {value: 'java', label: 'Java'},
        {value: 'python', label: 'Python'},
        {value: 'javascript', label: 'Javascript'},
    ];
    const formik = useFormik(
        {
            initialValues: {
                skill: options[0],
            },

            onSubmit: (values) => {
                console.log("Skills");
                console.log(values);
                dispatch(jobSkillsValues({...values}));
            },

        });


    return (
        <Jop>
            <div className="freelans1 bg-white position-absolute" style={{zIndex: "10"}}>
                <h5>Required skills</h5>
                <p className="">Price for project and description</p>
                <form className="custom-form" onSubmit={formik.handleSubmit}>
                    {/*<Form.Group>*/}
                        <CreatableSelect
                            id="overflow-y-scroll"
                            name="skill"
                            isMulti
                            onChange={(x) => {
                                formik.setFieldValue("skill", x);
                                console.log(x)
                            }}
                            options={options}
                            placeholder="Skills"
                            className="custom-form-control"
                        />
                    {/*</Form.Group>*/}
                    <div className="d-flex justify-content-end mt-3">
                        <Link to={RoutesPath.postJop2} className="bg-dark rounded bg-opacity-10 text-black d-flex justify-content-center align-items-center p-2 px-3 me-3">Back</Link>
                        <Button className="custom-btn" onClick={() => {
                            toast.success("Success !!!");
                            navigate(RoutesPath.jop);
                            formik.handleSubmit();
                            // dispatch(displayCircle())
                        }}>Next</Button>
                    </div>
                </form>
            </div>
        </Jop>
    );
};

export default connect(null, null)(PostJop3);