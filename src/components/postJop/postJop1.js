import React from 'react';
import Jop from "./Jop";
import {Link, useNavigate} from "react-router-dom"
import {Form, Button} from "react-bootstrap";
import RoutesPath from "../../routes/routes";
import {useDispatch, connect} from "react-redux";
import {displayCircle} from "../../actions/careerAction";
import {jobInitialValues} from "../../actions/jopAction";
import {useFormik} from 'formik'

const enhancer = connect(({job: {search,location}}) => ({search,location}), null);


const PostJop1 = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    dispatch(displayCircle());

    const formik = useFormik({
        initialValues: {
            search: "",
            location: "",
        },

        onSubmit: values => {
            console.log(values);
            dispatch(jobInitialValues({...values}))
        }
    });

    return (
        <Jop history={props.history}>
            <div className="freelans position-absolute" style={{zIndex: "10"}}>
                <h5>Welcome!</h5>
                <p className="">Post job for freelancer</p>
                <form onSubmit={formik.handleSubmit}>
                    <Form.Group>
                        <Form.Control
                            id="search"
                            name="search"
                            type="text"
                            required={true}
                            onChange={formik.handleChange}
                            value={formik.values.search}
                            placeholder="Search freelancer"
                            className="form-control required"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            id="location"
                            name="location"
                            type="text"
                            required={true}
                            onChange={formik.handleChange}
                            value={formik.values.location}
                            placeholder="Location"
                            className="form-control mt-3 w-100 required"
                            width="500px"
                        />
                    </Form.Group>
                    <div className="d-flex justify-content-end mt-5">
                        <Link to={RoutesPath.postJop} className="bg-dark rounded bg-opacity-10 text-black d-flex justify-content-center align-items-center p-2 px-3 me-3">Back</Link>
                        <Button type="submit" className="custom-btn" onClick={() => {
                            navigate(RoutesPath.postJop2);
                            formik.handleSubmit();
                            // dispatch(displayCircle())
                        }}>Next</Button>
                    </div>
                </form>
            </div>
        </Jop>
    );
};


export default enhancer(PostJop1);