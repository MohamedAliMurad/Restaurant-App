import React from 'react'
import '../css/Order.css'

export default function Order() {
  return (
    <>
      {/* <!-- Start Order --> */}
      <section className="order" id="Order">
        <div className="container">
          {/* <!-- The basic title --> */}
          <div className="title text-center">
            <h2>Order Now</h2>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line1"></div>
            <h3 className="pt-3 text-center fw-bolder">FREE AND FAST</h3>
          </div>
          {/* <!-- End basic title --> */}
          <form action="" className="form pt-5 pb-3">
            <div className="row">
              <div className="col-lg-6">
                <div className="input-group mb-3">
                  <span className="input-group-text"
                  ><i className="fas fa-user"></i
                  ></span>
                  <input type="text" className="form-control" placeholder="Enter Your Name" />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text"
                  ><i className="fa-solid fa-utensils "></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Order"
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text"
                  ><i className="fas fa-phone"></i
                  ></span>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Number of orders"
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text"
                  ><i className="fas fa-phone"></i
                  ></span>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text"
                  ><i className="fas fa-envelope"></i
                  ></span>
                  <input type="email" className="form-control" placeholder="Email" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="input-group mb-3">
                  <span className="input-group-text"
                  ><i className="fa-solid fa-utensils "></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Additional Food"
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text"
                  ><i className="fa-regular fa-calendar"></i>
                  </span>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Additional Quantity"
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text"
                  ><i className="fas fa-map-marker-alt"></i
                  ></span>
                  <input type="text" className="form-control" placeholder="Address" />
                </div>
                <textarea
                  className="form-control mb-3"
                  placeholder="Your Message"
                ></textarea>
                <button className="btn-order w-100">Order Now</button>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* <!-- End Order --> */}
    </>
  )
}
