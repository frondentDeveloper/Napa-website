import React, {useEffect} from 'react';
import {Button, Card, Form} from 'react-bootstrap';
import {Link, useNavigate} from "react-router-dom";
import {connect, useDispatch} from "react-redux";
import {addSize, displayCircle, signedWizardNextSteps} from "../actions/careerAction";
import {setAuthEmailValue, setAuthPasswordValue} from "../actions/authAction";
import RoutesPath from "../routes/routes";

const enhancer = connect(({size: {size}, auth: {authEmailInitialValue, authPasswordInitialValue}}) => ({
    size,
    authEmailInitialValue,
    authPasswordInitialValue,
}), null);


const Login = props => {
    const dispatch = useDispatch()

    const navigate = useNavigate();

    useEffect(() => {
        // dispatch(displayCircle());
    }, []);

    const handleEmailValue = event => {
        dispatch(setAuthEmailValue(event.target.value))
    };
    const handlePasswordValue = event => {
        dispatch(setAuthPasswordValue(event.target.value))
    };

    return (
        <div className="login">
            <div className={props.size ? "sign-in sign-in-card-show" : "sign-in sign-in-card-hide"}>
                <Card>
                    <Card.Body>
                        <Card.Title>Log in</Card.Title>
                        <Card.Text>Still don’t have an account?<Link to="#"> Sign Up Now !</Link></Card.Text>
                        <Form>
                            <Form.Group className="form-shell">
                                <Form.Control
                                    type="email"
                                    id="authEmail"
                                    placeholder="Email"
                                    onChange={handleEmailValue}
                                    value={props.authEmailInitialValue}
                                />
                            </Form.Group>
                            <Form.Group className="form-shell">
                                <Form.Control
                                    type="password"
                                    id="authPassword"
                                    placeholder="Password"
                                    onChange={handlePasswordValue}
                                    value={props.authPasswordInitialValue}
                                />
                            </Form.Group>
                        </Form>

                        <div className="bottom-fields">
                            <Button className="custom-btn" onClick={() => {
                                dispatch(addSize(props.size));
                                dispatch(signedWizardNextSteps());
                                navigate("/complete")
                            }}>
                                Continue
                            </Button>
                        </div>
                        <div className="bottom-title">Or continue with</div>
                        <div className="bottom-icons">
                            <div className="icon"><img src="./images/facebook-3 logo.svg" alt=""/></div>
                            <div className="icon"><img src="./images/github logo.svg" alt=""/></div>
                            <div className="icon"><img src="./images/Google logo.svg" alt=""/></div>
                            <div className="icon"><img src="./images/Group 244.svg" alt=""/></div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            <div className={props.size ? "anime-carousel-wrapper carousels-show" : "anime-carousel-wrapper carousels-hide"}>
                <div className="anime-carousel">
                    <div className="marquee">
                        <div className="marquee--inner">
    <span>
      <div className="orb"><img src="./images/first-resume.png" alt=""/></div>
      <div className="orb"><img src="./images/second-resume.png" alt=""/></div>
      <div className="orb"><img src="./images/third-resume.png" alt=""/></div>
      <div className="orb"><img src="./images/fourth-resume.png" alt=""/></div>
      <div className="orb"><img src="./images/fifth-resume.png" alt=""/></div>
      <div className="orb"><img src="./images/sixth-resume.png" alt=""/></div>
      <div className="orb"><img src="./images/first-resume.png" alt=""/></div>
    </span>
                            <span>
      <div className="orb"><img src="./images/sixth-resume.png" alt=""/></div>
      <div className="orb"><img src="./images/fifth-resume.png" alt=""/></div>
      <div className="orb"><img src="./images/fourth-resume.png" alt=""/></div>
      <div className="orb"><img src="./images/third-resume.png" alt=""/></div>
      <div className="orb"><img src="./images/first-resume.png" alt=""/></div>
      <div className="orb"><img src="./images/second-resume.png" alt=""/></div>
      <div className="orb"><img src="./images/first-resume.png" alt=""/></div>
    </span>
                        </div>
                    </div>
                </div>

                <div className="anime-carousel anime-carousel-second">
                    <div className="marquee">
                        <div className="marquee--inner">
    <span>
      <div className="orb"><img src="./images/first-resume.png" alt=""/></div>
      <div className="orb"><img src="./images/second-resume.png" alt=""/></div>
      <div className="orb"><img src="./images/third-resume.png" alt=""/></div>
      <div className="orb"><img src="./images/fourth-resume.png" alt=""/></div>
      <div className="orb"><img src="./images/fifth-resume.png" alt=""/></div>
      <div className="orb"><img src="./images/sixth-resume.png" alt=""/></div>
      <div className="orb"><img src="./images/first-resume.png" alt=""/></div>
    </span>
                            <span>
      <div className="orb"><img src="./images/sixth-resume.png" alt=""/></div>
      <div className="orb"><img src="./images/fifth-resume.png" alt=""/></div>
      <div className="orb"><img src="./images/fourth-resume.png" alt=""/></div>
      <div className="orb"><img src="./images/third-resume.png" alt=""/></div>
      <div className="orb"><img src="./images/first-resume.png" alt=""/></div>
      <div className="orb"><img src="./images/second-resume.png" alt=""/></div>
      <div className="orb"><img src="./images/first-resume.png" alt=""/></div>
    </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default enhancer(Login);