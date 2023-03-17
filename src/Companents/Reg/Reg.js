import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Reg = props => {
    return ( 
        <React.Fragment>
            <div className="reg2">
                <Row className="reg-row">
                    <Col xxl={12}>
                        <h1>{props.teg}</h1>
                        <p>{props.teg2}</p>
                    </Col>
                    <Col xxl={4} className='reg-facebook'>
                        <div className="reg-card">
                            <img className="reg-logo"src={props.facebook}></img>
                            <span className="reg-text">{props.textfacebook}</span>
                        </div>
                    </Col>
                    <Col xxl={4} className='reg-goolge'>
                        <div className="reg-card">
                            <img className="reg-logo"src={props.google}></img>
                            <span className="reg-text">{props.textgoogle}</span>
                        </div>
                    </Col>
                    <Col xxl={4} className='reg-apple'>
                        <div className="reg-card">
                            <img className="reg-logo"src={props.apple}></img>
                            <span className="reg-text">{props.textapple}</span>
                        </div>
                    </Col>
                    <p>{props.sharh}</p>
                </Row>
            </div>
        </React.Fragment>
     );
}


export default Reg;