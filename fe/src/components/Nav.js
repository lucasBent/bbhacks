import './Nav.css'
import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

function Nav() {

    const maxMobileWidth = 1224

    function toggleExpanded() {
        setExpanded(!expanded)
    }

    function onIsTabletOrMobileChange(value) {
        console.log(value)
        const nav = document.getElementById('navbar')
        nav.style.setProperty("--dropdown-height", `calc(${nav.querySelector('a').offsetHeight * 6}px + 4rem)`)
        setMobile(value)
    }

    const [expanded, setExpanded] = useState(false)

    useEffect(() => {
        if (window.innerWidth <= maxMobileWidth)
            setMobile(true)
        else
            setMobile(false)
    }, [])

    const [mobile, setMobile] = useState(false)
    const isTabletOrMobile = useMediaQuery({ query: `(max-width: ${maxMobileWidth}px)` }, undefined, onIsTabletOrMobileChange)

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
