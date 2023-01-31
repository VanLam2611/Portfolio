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
                                    <i class='bx bx-briefcase-alt-2'></i>
                                </div>
                                <div className="data-number">320</div>
                                <div className="note">Projects Done</div>
                            </div>
                        </div>
                        <div className="status-item col-lg-3 col-md-3 col-sm-12">
                            <div className="content">
                                <div className="icon">
                                    <i class='bx bx-time'></i>
                                </div>
                                <div className="data-number">213213</div>
                                <div className="note">Project</div>
                            </div>
                        </div>
                        <div className="status-item col-lg-3 col-md-3 col-sm-12">
                            <div className="content">
                                <div className="icon">
                                    <i class='bx bx-smile'></i>
                                </div>
                                <div className="data-number">213213</div>
                                <div className="note">Project</div>
                            </div>
                        </div>
                        <div className="status-item col-lg-3 col-md-3 col-sm-12">
                            <div className="content">
                                <div className="icon">
                                    <i class='bx bx-bell'></i>
                                </div>
                                <div className="data-number">213213</div>
                                <div className="note">Project</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Status