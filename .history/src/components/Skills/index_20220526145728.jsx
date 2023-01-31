import { useEffect } from 'react'
import './skills.scss'
import $ from "jquery";

const Skills = () => {
    useEffect(() => {
        window.setTimeout(function(){
            $('.skill-progress').addClass("go");
        }, 1000);
    }, [])
    return (
        <div id="skills" className="section-page">
            <div className="container">
                <div className="heading-about">
                    <div className="section-title">Skills</div>
                    <div className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="skill-wrapper">
                            <div className="skill-progress">
                                <div className="circle">
                                    <div className="mask"></div>
                                    <div className="mask"></div>
                                </div>
                                <div className="inset">
                                    <div className="numbers"></div>
                                </div>
                            </div>
                            <div className="skill-progress">
                                <div className="circle">
                                    <div className="mask"></div>
                                    <div className="mask"></div>
                                </div>
                                <div className="inset">
                                    <div className="numbers"></div>
                                </div>
                            </div>

                            <div className="skill-progress">
                                <div className="circle">
                                    <div className="mask"></div>
                                    <div className="mask"></div>
                                </div>
                                <div className="inset">
                                    <div className="numbers"></div>
                                </div>
                            </div>

                            <div className="skill-progress">
                                <div className="circle">
                                    <div className="mask"></div>
                                    <div className="mask"></div>
                                </div>
                                <div className="inset">
                                    <div className="numbers"></div>
                                </div>
                            </div>

                            <div className="skill-progress">
                                <div className="circle">
                                    <div className="mask"></div>
                                    <div className="mask"></div>
                                </div>
                                <div className="inset">
                                    <div className="numbers"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills