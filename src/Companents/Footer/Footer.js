import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../images/logo.png'
import Nav from 'react-bootstrap/Nav';

function Footer() {
    return ( 
        <React.Fragment>
            <div className='footer'>
                <Row className='footer-row'>
                    <Col className='footer-logo'>
                        <div>
                            <img src={logo}/>
                            <span>Marico</span>
                        </div>
                        <p>info@marico.co</p>
                    </Col>
                    <Col className='footer-link'>
                        <Nav.Link href="#action1">About</Nav.Link>
                        <Nav.Link href="#action2">Pricing</Nav.Link>
                        <Nav.Link href="#action3">Blog</Nav.Link>
                        <Nav.Link href="#action3">Sign in</Nav.Link>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    );
}

export default Footer;