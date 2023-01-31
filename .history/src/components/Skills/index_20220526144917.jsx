import { useEffect } from 'react'
import './skills.css'

const Skills = () => {
    useEffect(() => {
        window.setTimeout(function () {
            document.querySelector('.skill-progress').classNameList.add("go");
            console.log('dsaa');
        }, 1000);
    }, [])
    return (
        <div id="skills" classNameName="section-page">
            <div classNameName="container">
                <div classNameName="heading-about">
                    <div classNameName="section-title">Skills</div>
                    <div classNameName="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                </div>
                <div classNameName="row">
                    <div classNameName="col-12">
                        <div classNameName="skill-wrapper">
                            <div classNameName="skill-progress">
                                <div classNameName="circle">
                                    <div classNameName="mask"></div>
                                    <div classNameName="mask"></div>
                                </div>
                                <div classNameName="inset">
                                    <div classNameName="numbers"></div>
                                </div>
                            </div>
                            <div classNameName="skill-progress">
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