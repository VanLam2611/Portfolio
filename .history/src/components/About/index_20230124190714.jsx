import './about.css'
import imgUser from '../../images/user.jpg'

const About = () => {
    return (
        <div id="about" className='section-page'>
            <div className="container">
                <div className="heading-about">
                    <div className="section-title">ABOUT ME</div>
                    <div className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                </div>
                <div className="content">
                    <div className="row">
                        <div className="col-5 d-flex justify-content-center p-5 pt-0">
                            <div className="owner-img">
                                <img src="{imgUser}" className="img-fluid profile-img" alt="Img Owner" />
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="info-owner">
                                <div className="name">Jone Doe</div>
                                <div className="job">Web developer</div>
                                <div className="content">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolores error odit dicta reprehenderit sequi sapiente officiis officia dignissimos, ea dolorum! Amet, quos? Nesciunt ullam sunt nobis perferendis, maxime asperiores!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolores error odit dicta reprehenderit sequi sapiente officiis officia dignissimos, ea dolorum! Amet, quos? Nesciunt ullam sunt nobis perferendis, maxime asperiores!
                                    <br /><br />
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolores error odit dicta reprehenderit sequi sapiente officiis officia dignissimos, ea dolorum! Amet, quos? Nesciunt ullam sunt nobis perferendis, maxime asperiores!
                                </div>
                                <div className="btn btn-download">Download resume</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About