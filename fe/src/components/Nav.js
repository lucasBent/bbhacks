import './Nav.css'
import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

function Nav() {

    function doNav(id) {
        setExpanded(false)
        const sectionTop = document.getElementById(id).getBoundingClientRect().top
        const navbarOffset = document.getElementById('navbar').getBoundingClientRect().height
        window.scrollTo(0, window.scrollY + sectionTop - navbarOffset)
    }

    function onIsTabletOrMobileChange(value) {
        setMobile(value)
    }

    const [expanded, setExpanded] = useState(false)

    useEffect(() => {
        if (window.matchMedia('(max-width: 100vh)').matches === true)
            setMobile(true)
        else
            setMobile(false)
    }, [])

    const [mobile, setMobile] = useState(false)
    const isTabletOrMobile = useMediaQuery({ query: `(max-width: 100vh)` }, undefined, onIsTabletOrMobileChange)

    return (
        <div id='navbar' className={expanded ? 'expanded' : 'contracted'}>
            {mobile ? (
                <>
                    <button id='menu' onClick={() => setExpanded(!expanded)}>≡</button>
                    <button onClick={() => doNav('about')}><u>a</u>bout</button>
                    <button onClick={() => doNav('schedule')}><u>s</u>chedule</button>
                    <button onClick={() => doNav('prizes')}><u>p</u>rizes</button>
                    <button onClick={() => doNav('sponsors')}><u>s</u>ponsors</button>
                    <button onClick={() => doNav('contact')}><u>c</u>ontact</button>
                    <a id='register' href='https://black-bear-hacks.devpost.com/' target='_blank' rel='noreferrer' onClick={() => setExpanded(!expanded)}><u>r</u>egister</a>
                </>
            ) : (
                <>
                    <button onClick={() => doNav('about')}><u>a</u>bout</button>
                    <button onClick={() => doNav('schedule')}><u>s</u>chedule</button>
                    <button onClick={() => doNav('prizes')}><u>p</u>rizes</button>
                    <button onClick={() => doNav('sponsors')}><u>s</u>ponsors</button>
                    <button onClick={() => doNav('contact')}><u>c</u>ontact</button>
                    <a id='register' href='https://black-bear-hacks.devpost.com/' target='_blank' rel='noreferrer' onClick={() => setExpanded(!expanded)}><u>r</u>egister</a>
                </>
            )}
        </div >
    )
}

export default Nav
