import './Home.css'
import Nav from './components/Nav.js'

function Home() {
    return (
        <>
            <Nav />
            <div id='top'>
                <h1>bbhacks</h1>
                <h2>Black Bear Hacks.</h2>
                <div id="top-bottom"></div>
            </div>
            <div id='about'>
                <h2>about</h2>
            </div>
        </>
    )
}

export default Home
