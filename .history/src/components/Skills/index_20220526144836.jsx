import { useEffect } from 'react'
import './skills.css'

const Skills = () => {
    useEffect(() => {
        window.setTimeout(function () {
            document.querySelector('.skill-progress').classList.add("go");
            console.log('dsaa');
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
                        <div class="skill-wrapper">
                            <div class="skill-progress">
                                <div class="circle">
                                    <div class="mask"></div>
                                    <div class="mask"></div>
                                </div>
                                <div class="inset">
                                    <div class="numbers"></div>
                                </div>
                            </div>
                            <div class="skill-progress">
                                <div class="circle">
                                    <div class="mask"></div>
                                    <div class="mask"></div>
                                </div>
                                <div class="inset">
                                    <div class="numbers"></div>
                                </div>
                            </div>

                            <div class="skill-progress">
                                <div class="circle">
                                    <div class="mask"></div>
                                    <div class="mask"></div>
                                </div>
                                <div class="inset">
                                    <div class="numbers"></div>
                                </div>
                            </div>

                            <div class="skill-progress">
                                <div class="circle">
                                    <div class="mask"></div>
                                    <div class="mask"></div>
                                </div>
                                <div class="inset">
                                    <div class="numbers"></div>
                                </div>
                            </div>

                            <div class="skill-progress">
                                <div class="circle">
                                    <div class="mask"></div>
                                    <div class="mask"></div>
                                </div>
                                <div class="inset">
                                    <div class="numbers"></div>
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