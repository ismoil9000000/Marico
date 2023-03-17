import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Reg from "../Reg/Reg";
import G_logo from '../images/G_logo.png'
import Facebook from '../images/Facebook.png'
import Apple_logo from '../images/Apple_logo.png'
function Signup() {
    return ( 
        <React.Fragment>
            <div className="signup-div">
                <Row className="signup-row">
                    <Col xxl={12}>
                        <h1>Sign up</h1>
                        <p>Fill all field for create an account.</p>
                    </Col>
                    <Col xxl={12} className="signup-col">
                        <div>
                            <input type="text" placeholder="Username"/>
                            <i class="fa-regular fa-user"></i>
                        </div>
                        <div>
                            <input type="email" placeholder="Email Address"/>
                            <i class="fa-solid fa-at"></i>
                        </div>
                    </Col>
                    <Col xxl={12} className="signup-col">
                        <div>
                            <input type="password" placeholder="Password"/>
                            <i class="fa-solid fa-eye"></i>
                        </div>
                        <div>
                            <button type="button" className="btn btn-primary">Sign Up</button>
                        </div>
                    </Col>
                </Row>
            </div>
            <Reg teg='Or' teg2='Sign up with...' facebook={Facebook} 
                textfacebook='Sign up with Facebook'
                google={G_logo} textgoogle='Sign up with Google'
                apple={Apple_logo} textapple='Sign up with Apple'
                sharh="Already have an account? Please Log in."/>
        </React.Fragment>
    );
}

export default Signup;