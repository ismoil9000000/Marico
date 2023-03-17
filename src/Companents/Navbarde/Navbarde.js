import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

function Navbarde() {
    return ( 
        <React.Fragment>
            <div className='navbar'>
                <Row className='rowde'>
                    <Col className='logomarico'>
                        <Link to='/'>
                            <img src={logo}/>
                            <span>Marico</span>
                        </Link>
                    </Col>
                    <Col className='linklar'>
                        <NavDropdown title="Use Cases" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Something else here
                        </NavDropdown.Item>
                        </NavDropdown>
                        <Link to={'./about'}>About</Link>
                        <Nav.Link href="#action2">Pricing</Nav.Link>
                        <Nav.Link href="#action3">Blog</Nav.Link>
                    </Col>
                    <Col className='reg'>
                        <Link to={'/login'}  style={{color: '#707070'}}>Login</Link>
                        <Link to={'/signup'}><Button variant="primary">Sign Up</Button>{' '}</Link>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
     );
}

export default Navbarde;