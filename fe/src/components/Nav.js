import './Nav.css'
import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

function Nav() {

    function toggleExpanded() {
        setExpanded(!expanded)
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
                    <button onClick={toggleExpanded}>≡</button>
                    <a href='#about' onClick={toggleExpanded}>about</a>
                    <a href='#schedule' onClick={toggleExpanded}>schedule</a>
                    <a href='#prizes' onClick={toggleExpanded}>prizes</a>
                    <a href='#sponsors' onClick={toggleExpanded}>sponsors</a>
                    <a href='#contact' onClick={toggleExpanded}>contact</a>
                    <a href='https://black-bear-hacks.devpost.com/' target='_blank' rel='noreferrer' onClick={toggleExpanded}>register</a>
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
