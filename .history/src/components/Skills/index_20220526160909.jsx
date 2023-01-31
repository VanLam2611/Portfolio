import { useEffect } from 'react'
import './skills.css'
import $ from "jquery";

const Skills = () => {
    useEffect(() => {
        window.setTimeout(function () {
            $('.skill-progress').addClass("go");
        }, 1000);
    }, [])
    return (
       <></>
    )
}
export default Skills