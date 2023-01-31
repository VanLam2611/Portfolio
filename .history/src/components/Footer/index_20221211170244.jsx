import './footer.css'

const Footer = ({temp}) => {
    return(
        <div id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="info-left">All rights reserved &copy; Profile 2017</div>
                    </div>
                    <div className="col-6">
                        <div className="social">
                            <div className="item"><a href="#"><i className='bx bxl-facebook'></i></a></div>
                            <div className="item"><a href=""><i className='bx bxl-twitter'></i></a></div>
                            <div className="item"><a href=""><i className='bx bxl-telegram'></i></a></div>
                            <div className="item"><a href=""><i className='bx bxl-tiktok'></i></a></div>
                            <div className="item"><a href=""><i className='bx bxl-instagram' ></i></a></div>
                            <div className="item"><a href=""><i className='bx bxl-steam' ></i></a></div>
                        </div>
                    </div>
                </div>
            </div>
            <a className='back_top' href="#top"></a>
        </div>
    )
}
export default Footer