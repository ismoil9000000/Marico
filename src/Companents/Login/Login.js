import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Reg from "../Reg/Reg";
import G_logo from '../images/G_logo.png'
import Facebook from '../images/Facebook.png'
import Apple_logo from '../images/Apple_logo.png'
function Login() {
    return ( 
        <React.Fragment>
            <div className="login-div">
                <Row className="login-row">
                    <Col xxl={12}>
                        <h1>Log in</h1>
                        <p>Login into existing account.</p>
                    </Col>
                    <Col xxl={6}>
                        <input type="text" placeholder="Username"/>
                        <i class="fa-regular fa-user"></i>
                    </Col>
                    <Col xxl={6}>
                        <input type="password" placeholder="Password"/>
                        <i class="fa-solid fa-eye"></i>
                    </Col>
                    <Col xxl={12}>
                        <button type="button" className="btn btn-primary">Log In</button>
                    </Col>
                </Row>
            </div>
            <Reg teg='Or' teg2='Log in with...' facebook={Facebook} textfacebook='Log in with Facebook'
                google={G_logo} textgoogle='Log in with Google'
                apple={Apple_logo} textapple='Log in with Apple'
                sharh="Don't have an account? Create One."/>
        </React.Fragment>
    );
}

export default Login;