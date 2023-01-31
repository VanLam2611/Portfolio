import React from "react"
import { useEffect } from "react"
import './header.css'
const Header = () => {
    const setHeader = () => {
        const header = document.querySelector('#header')
        // const screenHeight = window.innerHeight
        let offset = window.pageYOffset
        window.addEventListener('scroll', () => {
            offset = window.pageYOffset
            offset > 0 ?
                header.classList.add('bgColor') : header.classList.remove('bgColor')
        })
    }

    useEffect(() => {
        // setHeader()
    }, [])
    return (
        <div id="header">
            <div id="home"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-3 col-sm-2">
                        <div className="logo-header">
                            <button className="toggle-header"></button>
                            <a className="logo" href="#home">Profile</a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-9 col-sm-10 nav">
                        <nav className="nav-header">
                            <ul>
                                <li className="nav-item"><a className="nav-sub" href="#about">About</a></li>
                                <li className="nav-item"><a className="nav-sub" href="#skills">Skills</a></li>
                                <li className="nav-item"><a className="nav-sub" href="#service">SERVICES</a></li>
                                <li className="nav-item"><a className="nav-sub" href="#portfolio">PORTFOLIO</a></li>
                                <li className="nav-item"><a className="nav-sub" href="#resume">RESUME</a></li>
                                <li className="nav-item"><a className="nav-sub" href="#contact">CONTACT</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header