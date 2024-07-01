import React from 'react'
import '../css/Header.css'
import img from '../assets/home-img-1.png'

export default function Header() {
    return (
        <>
            {/* <!-- start header --> */}
            <header
                id="Home"
                className="d-flex align-items-center justify-content-center"
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div
                            className="col-md-6 col-sm-12 align-items-lg-start align-items-sm-center"
                        >
                            <div className="item justify-content-sm-center">
                                <p className="cap-photo">Our Special Dish</p>
                                <h1 className="head-photo">Spicy Noodles</h1>
                                <p className="par-photo">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    Ratione esse doloribus quam?
                                </p>
                                <button className="btn-photo">Order Now</button>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="container-img mt-2">
                                <img
                                    src={img}
                                    width="100%"
                                    height="100%"
                                    alt="dish food"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- End header --> */}
        </>
    )
}
