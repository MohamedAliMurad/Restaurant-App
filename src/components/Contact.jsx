import React from "react"
import "../css/Contact.css"

export default function Contact() {
    return (
        <>
            {/* <!-- Start Contact --> */}
            <section className="contact  w-100" id="Contact">
                <div className="container">
                    {/* <!-- The basic title --> */}
                    <div className="title text-center">
                        <h2>Contact Us</h2>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line1"></div>
                        <h3 className="pt-3 text-center fw-bolder">STAY CONNECTED</h3>
                    </div>
                    {/* <!-- End basic title --> */}
                    <form action="" className="form pt-5 pb-3">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="input-group mb-3">
                                    <span className="input-group-text">
                                        <i className="fas fa-user"></i>
                                    </span>
                                    <input type="text" className="form-control" placeholder="Name" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">
                                        <i className="fas fa-phone"></i>
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Phone Number"
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">
                                        <i className="fas fa-envelope"></i>
                                    </span>
                                    <input type="email" className="form-control" placeholder="Email" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="input-group mb-3">
                                    <span className="input-group-text">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </span>
                                    <input type="text" className="form-control" placeholder="Address" />
                                </div>
                                <textarea
                                    className="form-control mb-3"
                                    placeholder="Your Message"
                                ></textarea>
                                <button className="btn-contact w-100">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            {/* <!-- End Contact --> */}
        </>
    )
}
