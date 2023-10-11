import './Home.css'
import Nav from './components/Nav.js'

function Home() {
    return (
        <>
            <Nav />
            <div id='top'>
                <h1>bbhacks</h1>
                <h2>black bear hacks.</h2>
                <div id="top-bottom"></div>
            </div>

            <div className='section' id='about'>
                <h2>about</h2>
                <div className='page-contents' id='about-bullets'>
                    <div className='two-columns'>
                        <span className='left'>location:</span>
                        <span className='right'>orono, maine</span>
                    </div>

                    <div className='two-columns'>
                        <span className='left'>venue:</span>
                        <span className='right'>wells conference center
                            <br />
                            the university of maine</span>
                    </div>

                    <div className='two-columns'>
                        <span className='left'>date:</span>
                        <span className='right'>november 18th
                            <br />
                            9:30AM - 9:30PM</span>
                    </div>
                </div>
                <p>
                    we'll have some about information here. probably a little writeup of some sort. let's make it a little longer for some testing. yup, these are some words, all right. what do we think about the lowercase aesthetic?
                </p>
                <h3>FAQ</h3>
                <p id='faq-wrap'>
                    <span className='question'>this is a question. what is the answer?</span>
                    <span className='answer'>well - I must say - I don't know, my friend!</span>
                    <span className='question'>this is a another question. what is the answer?</span>
                    <span className='answer'>well - I must say - I STILL don't know, my friend!</span>
                </p>
                <div id="about-bottom"></div>
            </div>

            <div className='section' id='schedule'>
                <h2>schedule</h2>
                <p>8am - stuff</p>
            </div>
        </>
    )
}

export default Home
