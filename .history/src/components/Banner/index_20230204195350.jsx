import React from "react"
import { useEffect } from "react"
import './banner.css'
import './danhchu'
const Banner = () => {
    useEffect(()=>{
        const banner = document.querySelector('.content')
        document.addEventListener('load', (event) => {
            banner.classList.add('animation-load')
        });
    },[])
    return (
        <div id="banner">
            <div className="content">
                <div className="sub-content">
                    <div className="heading wavy">Welcome to my site!</div>
                    <div className="sub-title">
                        <span className="danh_chu" data-timestemp="1500" data-word='["HI, I AM VAN LAM", "I AM A WEB DEVELOPER", "I HAVE 4 YEARS EXPERIENCE" ,"I AM VERY HARD WORKER"]'></span>
                        <span className="action-word">|</span>
                    </div>
                    <div className="more"><a className="btn btn-more" href="/">More about me</a></div>
                </div>
            </div>
        </div>
    )
}
export default Banner