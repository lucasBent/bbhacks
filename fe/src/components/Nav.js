import './Nav.css'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

function Nav() {

    function toggleExpanded() {
        setExpanded(!expanded)
    }

    function onIsTabletOrMobileChange(value) {
        const nav = document.getElementById('navbar')
        nav.style.setProperty("--dropdown-height", `calc(${nav.querySelector('a').offsetHeight * 6}px + 4rem)`)
        setMobile(value)
    }

    const [expanded, setExpanded] = useState(false)
    const [mobile, setMobile] = useState(true)
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' }, undefined, onIsTabletOrMobileChange)

    return (
        <div id='navbar' className={expanded ? 'expanded' : 'contracted'}>
            {mobile ? (
                <>
                    <button onClick={toggleExpanded}>≡</button>
                    <a href='#about'>about</a>
                    <a href='#schedule'>schedule</a>
                    <a href='#prizes'>prizes</a>
                    <a href='#sponsors'>sponsors</a>
                    <a href='#contact'>contact</a>
                    <a href='https://black-bear-hacks.devpost.com/' target='_blank' rel='noreferrer'>register</a>
                </>
            ) : (
                <>
                    <a href='#about'>about</a>
                    <a href='#schedule'>schedule</a>
                    <a href='#prizes'>prizes</a>
                    <a href='#sponsors'>sponsors</a>
                    <a href='#contact'>contact</a>
                    <a href='https://black-bear-hacks.devpost.com/' target='_blank' rel='noreferrer'>register</a>
                </>
            )}
        </div >
    )
}

export default Nav
