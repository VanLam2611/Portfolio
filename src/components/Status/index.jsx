import './status.css'

const Status = () => {
    return (
        <div id="status" className='section-page'>
            <div className="banner-status">
                <div className="container px-5">
                    <div className="row">
                        <div className="status-item col-lg-3 col-md-3 col-sm-12">
                            <div className="content">
                                <div className="icon">
                                    <i className='bx bx-briefcase-alt-2'></i>
                                </div>
                                <div className="data-number">320</div>
                                <div className="note">Projects Done</div>
                            </div>
                        </div>
                        <div className="status-item col-lg-3 col-md-3 col-sm-12">
                            <div className="content">
                                <div className="icon">
                                    <i className='bx bx-time'></i>
                                </div>
                                <div className="data-number">3011</div>
                                <div className="note">Hours of Work</div>
                            </div>
                        </div>
                        <div className="status-item col-lg-3 col-md-3 col-sm-12">
                            <div className="content">
                                <div className="icon">
                                    <i className='bx bx-smile'></i>
                                </div>
                                <div className="data-number">622</div>
                                <div className="note">Happy Clients</div>
                            </div>
                        </div>
                        <div className="status-item col-lg-3 col-md-3 col-sm-12">
                            <div className="content">
                                <div className="icon">
                                    <i className='bx bx-bell'></i>
                                </div>
                                <div className="data-number">12</div>
                                <div className="note">Awards Won</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Status