import React from 'react'
import '../css/Menu.css'
import img1 from '../assets/menu-1.jpg'
import img2 from '../assets/menu-2.jpg'
import img3 from '../assets/menu-3.jpg'
import img4 from '../assets/menu-4.jpg'
import img5 from '../assets/menu-5.jpg'
import img6 from '../assets/menu-6.jpg'
import img7 from '../assets/menu-7.jpg'

export default function Menu() {
    return (
        <>
            {/* <!-- Start Menu --> */}
            <section className="menus py-5 " id="Menu">
                <div className="container">
                    {/* <!-- The basic title --> */}
                    <div className="title text-center">
                        <h2>Our Menu</h2>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line1"></div>
                        <h3 className="pt-3 text-center fw-bolder">TODAY'S SPECIALITY</h3>
                    </div>
                    {/* <!-- End basic title --> */}
                    <div className="row gy-3 mt-4">
                        {/* <!-- Menu item template start --> */}
                        <div className="col-xl-3 col-md-4">
                            <div className="menu-item w-100 h-100">
                                <img
                                    src={img1}
                                    alt="menu image"
                                    className="menu-img h-50 w-100"
                                />
                                <div className="desc p-3">
                                    <h4>Special Menu 1</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Fugit, quod.
                                    </p>
                                    <div className="d-flex justify-content-between">
                                        <span>$15.99</span>
                                        <button className="btn-order rounded-1">Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4">
                            <div className="menu-item w-100 h-100">
                                <img
                                    src={img2}
                                    alt="menu image"
                                    className="menu-img h-50 w-100"
                                />
                                <div className="desc p-3">
                                    <h4>Special Menu 1</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Fugit, quod.
                                    </p>
                                    <div className="d-flex justify-content-between">
                                        <span>$15.99</span>
                                        <button className="btn-order rounded-1">Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4">
                            <div className="menu-item w-100 h-100">
                                <img
                                    src={img3}
                                    alt="menu image"
                                    className="menu-img h-50 w-100"
                                />
                                <div className="desc p-3">
                                    <h4>Special Menu 1</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Fugit, quod.
                                    </p>
                                    <div className="d-flex justify-content-between">
                                        <span>$15.99</span>
                                        <button className="btn-order rounded-1">Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4">
                            <div className="menu-item w-100 h-100">
                                <img
                                    src={img4}
                                    alt="menu image"
                                    className="menu-img h-50 w-100"
                                />
                                <div className="desc p-3">
                                    <h4>Special Menu 1</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Fugit, quod.
                                    </p>
                                    <div className="d-flex justify-content-between">
                                        <span>$15.99</span>
                                        <button className="btn-order rounded-1">Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4">
                            <div className="menu-item w-100 h-100">
                                <img
                                    src={img5}
                                    alt="menu image"
                                    className="menu-img h-50 w-100"
                                />
                                <div className="desc p-3">
                                    <h4>Special Menu 1</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Fugit, quod.
                                    </p>
                                    <div className="d-flex justify-content-between">
                                        <span>$15.99</span>
                                        <button className="btn-order rounded-1">Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4">
                            <div className="menu-item w-100 h-100">
                                <img
                                    src={img6}
                                    alt="menu image"
                                    className="menu-img h-50 w-100"
                                />
                                <div className="desc p-3">
                                    <h4>Special Menu 1</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Fugit, quod.
                                    </p>
                                    <div className="d-flex justify-content-between">
                                        <span>$15.99</span>
                                        <button className="btn-order rounded-1">Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4">
                            <div className="menu-item w-100 h-100">
                                <img
                                    src={img7}
                                    alt="menu image"
                                    className="menu-img h-50 w-100"
                                />
                                <div className="desc p-3">
                                    <h4>Special Menu 1</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Fugit, quod.
                                    </p>
                                    <div className="d-flex justify-content-between">
                                        <span>$15.99</span>
                                        <button className="btn-order rounded-1">Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Repeat above block for other menu items --> */}
                    </div>
                </div>
            </section>
            {/* <!-- End Menu --> */}
        </>
    )
}
