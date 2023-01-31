import './contact.css'

const Contact = () => {
    return (
        <div id="contact" className="section-page">
            <div className="container">
                <div className="heading-about">
                    <div className="section-title">Contact</div>
                    <div className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                </div>
                <div className="row">
                    <div className="detail-contact col-lg-5 col-md-12 col-sm-12">
                        <div className="content-left">
                            <div className="heading">Details</div>
                            <p className="sub-heading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ratione laudantium enim ab doloremque incidunt quas labore provident dolorum? Nemo, sunt fugit eligendi praesentium nobis veritatis molestias nisi mollitia eaque.</p>
                            <p className="add-item address">
                                <i className='bx bx-home-alt-2'></i>
                                <span>1234 Classen Blvd. OK, USA</span>
                            </p>
                            <p className="add-item phone">
                                <i className='add-item bx bx-phone'></i>
                                <span>0123124124</span>
                            </p>
                            <p className="add-item email">
                                <i className='bx bx-envelope'></i>
                                <span>vanlam@brozz.com</span>
                            </p>
                            <p className="add-item website">
                                <i className='bx bx-share-alt'></i>
                                <span>www.portfolio.com</span>
                            </p>
                        </div>
                    </div>
                    <div className="detail-contact col-lg-7 col-md-12 col-sm-12">
                        <div className="content-right">
                            <form action="#">
                                <div className="form-group">
                                    <input type="text" className='form-controls' placeholder='Your name' required/>
                                </div>
                                <div className="form-group">
                                    <input type="email" className='form-controls' placeholder='Your email' required/>
                                </div>
                                <div className="form-group">
                                    <input type="tel" className='form-controls' placeholder='Your phone number' required/>
                                </div>
                                <div className="form-group">
                                    <textarea id="message" className='form-controls' rows="10" placeholder='Your message'></textarea>
                                </div>
                                <button type="submit" className='btn btn-more'>send message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact