import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Smile_emoji from '../images/Smile_emoji.png'
import Happy_emoji from '../images/Happy_emoji.png'
import Party_emoji from '../images/Party_emoji.png'
import Image_4 from '../images/Image_4.png'
import Mobile from '../images/Mobile.png'
import Image from '../images/Image.png'
import immage from '../images/immage.png'

function Asosiy() {
    return ( 
        <React.Fragment>
            <div className='headerde'>
                <Row className='asosiy'>
                    <Col xxl={12} className='sarlavha'>
                        <h1>Own your audience. <br></br> <span>So you don't lose them.</span></h1>
                    </Col>
                    <Col>
                        <Row>
                            <Col xxl={12} className='turnyour'>
                                <h4>Turn your audience into email and text message subscribers.</h4>
                            </Col>
                            <Col className='asosiy-buttons'>
                                <div>
                                    <Button variant="primary">Get Started Now</Button>{' '}
                                    <Button variant="outline-secondary">View A Demo</Button>{' '}
                                </div>
                                <p><span>1000+</span>creators have already started</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            <section className='section1'>
                <Row className='sectionbir'>
                    <Col className='emojis' xxl={12}>
                        <Row>
                        <h2>Why Creators Love Marico</h2>
                            <Col xxl={4} className='emoji'>
                                <div>
                                    <img src={Smile_emoji}/>
                                    <span>Reduced Anxiety</span>
                                </div>
                                <p>Never worry about losing your audience.</p>
                            </Col>
                            <Col xxl={4} className='emoji'>
                                <div>
                                    <img src={Happy_emoji}/>
                                    <span>Lower Workload</span>
                                </div>
                                <p>Just share one link. We'll handle the rest.</p>
                            </Col>
                            <Col xxl={4} className='emoji'>
                                <div>
                                    <img src={Party_emoji}/>
                                    <span>More Time</span>
                                </div>
                                <p>Spend less time on marketing tools</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xxl={12} className='step1'>
                        <p className='qq'>STEP 1</p>
                        <h2>Connect Your Content</h2>
                        <p>Bring all of your content together and get a Homepage that
                        automatically updates whenever you create anywhere online.</p>
                        <Button variant="outline-secondary">View Avaliable Sources</Button>{' '}
                    </Col>
                </Row>
            </section>
            <section className='section2'>
                <Row className='sectionikki'>
                    <Col xxl={6} className='onespot'>
                        <div className='papading'>
                            <p>Your Homepage</p>
                            <h2>Your Content. <br></br>All in <span>One Spot</span></h2>
                            <div className='ss'><span className='aylana'>1</span><span className='aylanaspan'>Bring all of your content together into one homepage.</span></div>
                            <div className='ss'><span className='aylana'>2</span><span className='aylanaspan'>Your page automatically updates whenever you create.</span></div>
                            <div className='sec2button'>
                                <Button variant="primary">Get Started Now</Button>{' '}
                                <Button variant="outline-secondary">View A Demo</Button>{' '}
                            </div>
                        </div>
                    </Col>
                    <Col xxl={6} className='spoty'>
                        <img src={Image_4}/>
                    </Col>
                </Row>
            </section>
            <section className='section3'>
                <Row className='sectionuch'>
                    <Col xxl={12} className='step2'>
                        <h6>STEP 2</h6>
                        <h2>Share Your Homepage</h2>
                        <p>Share your Wavium homepage link with your followers, and
                        we'll handle the rest.</p>
                    </Col>
                    <Col xxl={12} className='mobilecol'>
                        <Row className='mobile'>
                            <Col xxl={6} className='onelink onelinkimag'>
                                <p>One Link</p>
                                <h2>ALL You Create. <br/><span>One Link</span></h2>
                                <img src={Mobile}/>
                            </Col>
                            <Col xxl={6} className='onelink'>
                                <p>Collect Subscribers</p>
                                <h2>Emails. <br/> Phone #s.<br/><span>All Yours.</span> </h2>
                            </Col>
                        </Row>
                        <div className='qs'>
                            <Button variant="primary">Get Started </Button>{' '}
                        </div>
                    </Col>
                </Row>
            </section>
            <section className='section4'>
                <Row className='sectiontor'>
                <Col xxl={12} className='step2'>
                        <h6>STEP 3</h6>
                        <h2>Send Emails & Text Messages</h2>
                        <p>No more going through a social platform. Reach and engage
                        your audience directly over email and text massage.</p>
                    </Col>
                    <Col xxl={6} className='onespot4'>
                        <div className='papading4'>
                            <p>Your Homepage</p>
                            <h2>Reach Your <br></br>Audience <span>Directly</span></h2>
                            <div className='ss4'><span className='aylana4'>1</span><span className='aylanaspan'>Embed content or create something new to share.</span></div>
                            <div className='ss4'><span className='aylana4'>2</span><span className='aylanaspan'>Share content over email, text message or your homepage.</span></div>
                            <div className='sec2button4'>
                                <Button variant="primary">Get Started Now</Button>{' '}
                                <Button variant="outline-secondary">View A Demo</Button>{' '}
                            </div>
                        </div>
                    </Col>
                    <Col xxl={6} className='spoty4'>
                        <img src={Image}/>
                    </Col>
                </Row>
            </section>
            <section className='section5'>
                <Row className='sectionbesh'>
                    <Col xxl={12}>
                        <h2>Experts Agree</h2>
                    </Col>
                    <Col xxl={12} className='team'>
                        <img src={immage}/>
                    </Col>
                </Row>
            </section>
        </React.Fragment>
     );
}

export default Asosiy;