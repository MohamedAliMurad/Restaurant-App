import React from 'react'
import '../css/Dishes.css'
import url1 from '../assets/dish-1.png'
import url2 from '../assets/dish-2.png'
import url3 from '../assets/dish-3.png'
import url4 from '../assets/dish-4.png'
import url5 from '../assets/dish-5.png'

export default function Dishes() {
    return (
        <div className='dishes-view'>
            {/* <!-- Start Dishes --> */}
            <section className="dishes" id="Dishes">
                <div className="container">
                    {/* <!-- The basic title --> */}
                    <div className="title text-center">
                        <h2>Our Dishes</h2>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line1"></div>
                        <h3 className="py-5 text-center fw-bolder">POPULAR DISHES</h3>
                    </div>
                    {/* <!-- End basic title --> */}

                    {/* <!-- the grid --> */}
                    <div className="row gy-3">
                        {/* <!-- Dish Template Start --> */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="dish overflow-hidden p-5 text-center position-relative">
                                <div className="icon-dish d-flex">
                                    <div className="circle left-dish">
                                        <i className="fa-regular fa-eye"></i>
                                    </div>
                                    <div className="circle right-dish">
                                        <i className="fa-solid fa-heart"></i>
                                    </div>
                                </div>
                                <div
                                    className="image d-flex align-items-center justify-content-center"
                                >
                                    <img src={url1} alt="dish one" className="w-100" />
                                </div>
                                <h4 className="desc-dish">Tasty Food</h4>
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                                <div
                                    className="d-flex align-items-center justify-content-between mt-2"
                                >
                                    <span>$15.99</span>
                                    <button className="btn-add">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="dish overflow-hidden p-5 text-center position-relative">
                                <div className="icon-dish d-flex">
                                    <div className="circle left-dish">
                                        <i className="fa-regular fa-eye"></i>
                                    </div>
                                    <div className="circle right-dish">
                                        <i className="fa-solid fa-heart"></i>
                                    </div>
                                </div>
                                <div
                                    className="image d-flex align-items-center justify-content-center"
                                >
                                    <img src={url2} alt="dish one" className="w-100" />
                                </div>
                                <h4 className="desc-dish">Tasty Food</h4>
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                                <div
                                    className="d-flex align-items-center justify-content-between mt-2"
                                >
                                    <span>$15.99</span>
                                    <button className="btn-add">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="dish overflow-hidden p-5 text-center position-relative">
                                <div className="icon-dish d-flex">
                                    <div className="circle left-dish">
                                        <i className="fa-regular fa-eye"></i>
                                    </div>
                                    <div className="circle right-dish">
                                        <i className="fa-solid fa-heart"></i>
                                    </div>
                                </div>
                                <div
                                    className="image d-flex align-items-center justify-content-center"
                                >
                                    <img src={url3} alt="dish one" className="w-100" />
                                </div>
                                <h4 className="desc-dish">Tasty Food</h4>
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                                <div
                                    className="d-flex align-items-center justify-content-between mt-2"
                                >
                                    <span>$15.99</span>
                                    <button className="btn-add">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="dish overflow-hidden p-5 text-center position-relative">
                                <div className="icon-dish d-flex">
                                    <div className="circle left-dish">
                                        <i className="fa-regular fa-eye"></i>
                                    </div>
                                    <div className="circle right-dish">
                                        <i className="fa-solid fa-heart"></i>
                                    </div>
                                </div>
                                <div
                                    className="image d-flex align-items-center justify-content-center"
                                >
                                    <img src={url4} alt="dish one" className="w-100" />
                                </div>
                                <h4 className="desc-dish">Tasty Food</h4>
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                                <div
                                    className="d-flex align-items-center justify-content-between mt-2"
                                >
                                    <span>$15.99</span>
                                    <button className="btn-add">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="dish overflow-hidden p-5 text-center position-relative">
                                <div className="icon-dish d-flex">
                                    <div className="circle left-dish">
                                        <i className="fa-regular fa-eye"></i>
                                    </div>
                                    <div className="circle right-dish">
                                        <i className="fa-solid fa-heart"></i>
                                    </div>
                                </div>
                                <div
                                    className="image d-flex align-items-center justify-content-center"
                                >
                                    <img src={url5} alt="dish one" className="w-100" />
                                </div>
                                <h4 className="desc-dish">Tasty Food</h4>
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                                <div
                                    className="d-flex align-items-center justify-content-between mt-2"
                                >
                                    <span>$15.99</span>
                                    <button className="btn-add">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Repeat above block for other dishes --> */}
                    </div>
                </div>
            </section>
            {/* <!-- End Dishes --> */}
        </div>
    )
}
