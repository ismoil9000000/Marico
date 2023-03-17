import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo_2 from '../images/Logo_2.png'
import Jacob from '../images/Jacob.png'
import Daniel from '../images/Daniel.png'
import Ryan from '../images/Ryan.png'
import Started from "../Started/Started";
import Shape from '../images/Shape.png'
function About() {
    return ( 
        <React.Fragment>
            <div className="about-sarlavha">
                <Row className="about-row-top">
                    <Col xxl={12} className='about-logo'>
                        <img src={Logo_2} />
                        <span>Marico</span>
                    </Col>
                    <Col>
                        <p className="about-mission">OUR MISSION</p>
                        <h1>We exist to help creators <br />
                        own their audience.</h1>
                        <p>We believe that social platforms are taking advantage of creators. <br />
                        We want to change that and help creators fight back. </p>
                    </Col>
                </Row>
            </div>
            <div className="about-malumot">
                <div>
                    <p>Building a career on social platforms is like building a home on someone else's
                    land. While social platforms are great for discovering and reaching your audience,
                    your goal as a creator should be to convert your followers into email or text
                    message subscribers. Why? Look no further than TikTok. Almost overnight,
                    millions of creative people almost lost their careers. </p>
                    <p className="about-text1">If a platform removes your account, or their algorithm for distribution no longer
                    favours you, are you prepared? </p>
                    <p>If you want to build a career as a creator, your focus should be on building durable
                    distribution channels. Without distribution, you have no business. So how can you
                    build an audience that you actually own? With emails and phone numbers. These
                    distribution channels are direct. Instead of going through some algorithm, when
                    you share over email and text message, you know that your audience will see your
                    content. Even better is the fact that you own these lists. Instagram removes your
                    acount, you're ok. YouTube changes their algorithm, you're ok. You own your
                    audience. </p>
                    <p>We built Marico to make this process easy, fast, and effective. The traditional
                    solution to this problem involves spending days building a website or hiring
                    someone expensive to do it for you. But those days are gone. With Marico, you
                    get a portfolio that is always up-to-date and converts visitors into email or text
                    message subscribers. The best thing? It takes under 5 minutes to setup, and it
                    automatically updates whenever you post new content anywhere online. We
                    believe the best tools are the ones you don't even notice. Marico helps you build
                    your own audience, without any hassle or time commitment. All you have to do is
                    share your portfolio link with your audience, and we'll handle the rest. </p>
                    <p className="about-text1">You can also create posts from within Marico and share them in just a few clicks
                    to your portfolio, and to your email and text message subscribers. Since all of your
                    content is already in Marico, creating content takes minutes, not hours. </p>
                    <p>For too long, social platforms have taken advantage of creators. Fight back and
                    build an audience that you own. </p>
                    <p className="about-text2">- The Team Marico (Olivia, William, and Noah) </p>
                    <hr />
                </div>
            </div>
            <div className="about-hodimlar">
                <Row className="about-row-bottom">
                    <Col xxl={12}>
                        <p className="about-mission">OUR TEAM</p>
                        <h2>We love creators</h2>
                    </Col>
                    <Col>
                        <img src={Jacob} />
                        <h3>Jacob Mark</h3>
                        <p>CEO & Design</p>
                        <div>
                            <a href="">Twitter</a>
                            <img src={Shape} alt="" />
                        </div>
                    </Col>
                    <Col>
                        <img src={Daniel} alt="" />
                        <h3>Daniel</h3>
                        <p>CTO & Development</p>
                        <div>
                            <a href="">Twitter</a>
                            <img src={Shape} alt="" />
                        </div>
                    </Col>
                    <Col>
                        <img src={Ryan} alt="" />
                        <h3>Ryan Trump</h3>
                        <p>COO & Sales</p>
                        <div>
                            <a href="">Twitter</a>
                            <img src={Shape} alt="" />
                        </div>
                    </Col>
                </Row>
            </div>
            <Started/>
        </React.Fragment>
    );
}

export default About;