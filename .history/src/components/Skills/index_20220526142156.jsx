import './drawChart.js'
import './skills.css'
const Skills = () => {
    return (
        <div id="skills" className="section-page">
            <div className="container">
                <div className="heading-about">
                    <div className="section-title">Skills</div>
                    <div className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div id="chartContainer" style="height: 370px; width: 100%;"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills