import './service.css'

const Service = () => {
    return (
        <div id="service" className='section-page'>
            <div className="container">
                <div className="heading-about">
                    <div className="section-title">Services</div>
                    <div className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="service-item">
                            <div className="icon">
                                <i class='bx bx-slider-alt'></i>
                            </div>
                            <div className="job"></div>
                            <div className="sub"></div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="service-item">
                            <div className="icon">
                                <i class='bx bx-brush'></i>
                            </div>
                            <div className="job"></div>
                            <div className="sub"></div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="service-item">
                            <div className="icon">
                                <i class='bx bx-paint'></i>
                            </div>
                            <div className="job"></div>
                            <div className="sub"></div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="service-item">
                            <div className="icon">
                                <i class='bx bx-pie-chart-alt' ></i>
                            </div>
                            <div className="job"></div>
                            <div className="sub"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Service