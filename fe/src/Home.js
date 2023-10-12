import './Home.css'
import Nav from './components/Nav.js'

function Home() {
    return (
        <>
            <Nav />
            <div id='top'>
                <h1>bbhacks</h1>
                <h2>black bear hacks.</h2>
                <div className='slant' id="top-bottom"></div>
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
                <div className='slant' id="about-bottom"></div>
            </div>

            <div className='section' id='schedule'>
                <h2>schedule</h2>
                <div className='page-contents' id='schedule-items'>
                    <div className='two-columns'>
                        <span className='left'>9:30AM:</span>
                        <span className='right'>registration</span>
                    </div>

                    <div className='two-columns'>
                        <span className='left'>10:00AM:</span>
                        <span className='right'>breakfast</span>
                    </div>

                    <div className='two-columns'>
                        <span className='left'>10:30AM:</span>
                        <span className='right'>opening ceremony</span>
                    </div>
                </div>
                <div className='slant' id="schedule-bottom"></div>
            </div>

            <div className='section' id='prizes'>
                <h2>prizes</h2>
                <div className='page-contents' id='schedule-items'>
                    <div className='two-columns'>
                        <span className='left' style={{ color: '#31CD32' }}>first place:</span>
                        <span className='right'>something cool</span>
                    </div>

                    <div className='two-columns'>
                        <span className='left' style={{ color: '#3196cd' }}>second place:</span>
                        <span className='right'>something slightly less cool</span>
                    </div>

                    <div className='two-columns'>
                        <span className='left' style={{ color: '#8c04fb' }}>third place:</span>
                        <span className='right'>something slightly less less cool</span>
                    </div>
                </div>
                <div className='slant' id="prizes-bottom"></div>
            </div>

            <div className='section' id='sponsors'>
                <h2 style={{ color: '#8C04FB' }}>sponsors</h2>
                <h3>thanks so much to our supporters!</h3>
                <div className='page-contents' id='sponsor-list'>
                    <a href='https://www.wolframalpha.com/' className='two-columns' target='_blank' rel='noreferrer'>
                        <span className='left' style={{ color: '#31CD32' }}><img src='/bbhacks/wolfram.png' alt='Wolfram Alpha logo' /></span>
                        <span className='right'>Wolfram Alpha</span>
                    </a>

                    <a href='https://1password.com/' className='two-columns' target='_blank' rel='noreferrer'>
                        <span className='left' style={{ color: '#3196cd' }}><img src='/bbhacks/1password.png' alt='1Password logo' /></span>
                        <span className='right'>1Password</span>
                    </a>
                </div>
                <div className='slant' id="sponsors-bottom"></div>
            </div>

            <div className='section' id='contact'>
                <h2>contact</h2>
                <div className='page-contents' id='contact-list'>
                    <div className='two-columns'>
                        <span className='left'>email:</span>
                        <span className='right'>blackbearhacks23@gmail.com</span>
                    </div>

                    <div className='two-columns'>
                        <span className='left'>discord:</span>
                        <span className='right'><a href='https://discord.gg/qyC7Upf3' target='_blank' rel='noreferrer'>https://discord.gg/qyC7Upf3</a></span>
                    </div>
                </div>
                <div className='slant' id="contact-bottom"></div>
            </div>
        </>
    )
}

export default Home
