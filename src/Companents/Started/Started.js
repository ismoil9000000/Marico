import Logo_2 from '../images/Logo_2.png'
import Button from 'react-bootstrap/Button';

function Started() {
    return ( 
        <section className='section7'>
            <div>
                <img src={Logo_2}/>
                <h2>Get Started Now</h2>
                <h5>Setup is easy and takes under 5 minutes.</h5>
                <Button variant="primary">Get Started Now</Button>{' '}
                <p>1000+ <span>creators have already started</span></p>
            </div>
        </section>
    );
}

export default Started;