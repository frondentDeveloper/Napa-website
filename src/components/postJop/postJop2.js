import React from 'react';
import Jop from "./Jop";
import {displayCircle} from "../../actions/careerAction";
import {useDispatch, connect} from "react-redux";
import {Button, Form} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import RoutesPath from "../../routes/routes";
import {useFormik} from 'formik'
import {jobDescriptionValues} from "../../actions/jopAction";

const enhancer = connect(({job: {price, description}}) => ({price, description}), null);


const PostJop2 = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    dispatch(displayCircle());

    const changePrice = (e) => {
        console.log(e.target.value);
        props.updateState({price: e.target.value})
    };
    const changeDescription = (e) => {
        console.log(e.target.value);
        props.updateState({description: e.target.value})
    };

    const formik = useFormik({
        initialValues: {
            price: "",
            description: ""
        },

        onSubmit: values => {
            dispatch(jobDescriptionValues({...values}))
        }
    });

    return (
        <Jop>
            <div className="freelans1 bg-white position-absolute" style={{zIndex: "10"}}>
                <h5>About the work</h5>
                <p className="">Price for project and description</p>
                <form onSubmit={formik.handleSubmit}>
                    <Form.Group>
                        <Form.Control
                            id="price"
                            name="price"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.price}
                            placeholder="$9999.00"
                            className="form-control"
                        />
                    </Form.Group>
                    <Form.Group>
                        <textarea
                            id="description"
                            name="description"
                            onChange={formik.handleChange}
                            value={formik.values.description}
                            placeholder="Description"
                            className="form-control mt-3 w-100"
                            // width="500px"
                            rows="5"
                            style={{resize: "none"}}
                        />
                    </Form.Group>
                    <div className="d-flex justify-content-end mt-3">
                        <Link to={RoutesPath.postJop1} className="bg-dark rounded bg-opacity-10 text-black d-flex justify-content-center align-items-center p-2 px-3 me-3">Back</Link>
                        <Button className="custom-btn" type="submit" onClick={() => {
                            navigate(RoutesPath.postJop3);
                            formik.handleSubmit();
                            // dispatch(displayCircle())
                        }}>Next</Button>
                    </div>
                </form>
            </div>
        </Jop>
    );
};


export default enhancer(PostJop2);