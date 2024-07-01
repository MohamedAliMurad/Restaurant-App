import React from 'react'
import '../css/About.css'
import img from '../assets/about-img.png'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      {/* <!-- Start About --> */}
      <section className="about mt-4" id="About">
        <div className="container">
          {/* <!-- The basic title --> */}
          <div className="title text-center">
            <h2>About Us</h2>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line1"></div>
            <h3 className="pt-3 text-center fw-bolder">WHY CHOOSE US?</h3>
          </div>
          {/* <!-- End basic title --> */}
          {/* <!-- the grid --> */}
          <div className="row">
            <div className="col-lg-6">
              <img src={img} alt="image about" className="w-100" />
            </div>
            <div className="col-lg-6 align-self-center gy-5 content">
              <h2>Best Food In The Country</h2>
              <p className=''>
                Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Dolore,
                Sequi Corrupti Corporis Quaerat Voluptatem Ipsam Neque Labore Modi
                Autem, Saepe Numquam Quod Reprehenderit Rem? Tempora Aut Soluta
                Odio Corporis Nihil! Lorem Ipsum Dolor Sit Amet, Consectetur
                Adipisicing Elit. Aperiam, Nemo. Sit Porro Illo Eos Cumque
                Deleniti Iste Alias, Eum Natus.
              </p>
              <div className="labels">
                <div className="label">
                  <i className="fas fa-shipping-fast"></i>
                  <span>Free Delivery</span>
                </div>
                <div className="label">
                  <i className="fas fa-dollar-sign"></i>
                  <span>Easy Payments</span>
                </div>
                <div className="label">
                  <i className="fas fa-headset"></i>
                  <span>24/7 Service</span>
                </div>
              </div>
              <Link to='/learn-more' className="btn-photo btn-learn mt-2">
                <button className='button'>Learn More</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End About --> */}
    </>
  )
}
