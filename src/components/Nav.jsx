import React, { useState } from 'react'
import '../css/Nav.css'
import { Link } from 'react-router-dom'

export default function Nav() {
    const [login, setLogin] = useState(true)
    const [active, setActive] = useState('home')
    const [search, setSearch] = useState(false)

    const handleLinkClick = (link) => {
        setActive(link);
    }

    const clickLogo = () => {
        setActive('home');
    }

    const HandleLogin = () => {
        setLogin(true);
    }

    const HandleLogout = () => {
        setLogin(false);
    }

    const ViewSearch = () => {
        setSearch(!search);
    }

    return (
        <>
            <nav
                className="navbar navbar-light shadow-lg navbar-expand-lg bg-body-tertiary w-100"
            >
                <div className="container w-100">
                    {/* <!-- LOGO --> */}
                    <Link className="logo d-flex align-items-center justify-content-start w-25" to='' onClick={clickLogo}>
                        <i className="fa-solid fa-utensils "></i>
                        <span>Resto.</span>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {login &&
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex align-items-center justify-content-start w-50">
                                <li className={`nav-item ${active === 'home' ? 'active' : ''}`}>
                                    <Link className="nav-link" to="" onClick={() => handleLinkClick('home')}>Home</Link>
                                </li>
                                <li className={`nav-item ${active === 'dishes' ? 'active' : ''}`}>
                                    <Link className="nav-link" to="dishes" onClick={() => handleLinkClick('dishes')}>Dishes</Link>
                                </li>
                                <li className={`nav-item ${active === 'about' ? 'active' : ''}`}>
                                    <Link className="nav-link" to="about" onClick={() => handleLinkClick('about')}>About</Link>
                                </li>
                                <li className={`nav-item ${active === 'order' ? 'active' : ''}`}>
                                    <Link className="nav-link" to="order" onClick={() => handleLinkClick('order')}>Order</Link>
                                </li>
                            </ul>}
                        <div className={`icons d-flex ${login ? 'w-25' : 'w-100 justify-content-end'}`}>
                            {login &&
                                <>
                                    <div className="circle">
                                        <div onClick={ViewSearch}><i className="fa-solid fa-search"></i></div>
                                    </div>
                                    {search ?
                                        <>
                                            <div className="circle">
                                                <Link to="contact"><i className="fa-solid fa-envelope"></i></Link>
                                            </div>
                                            <div className="circle">
                                                <Link to="favorites"><i className="fa-solid fa-heart"></i></Link>
                                            </div>
                                            <div className="circle">
                                                <Link to="shopping"><i className="fa-solid fa-cart-shopping"></i></Link>
                                            </div>
                                        </> :
                                        <div className="input-group w-100">
                                            <input type="text" className="form-control" placeholder="Search..." />
                                        </div>
                                    }
                                </>}
                            <div className="login">
                                {!login ?
                                    <Link className='nav-link' to="login" style={{ color: '#ff4e00', fontWeight: 'bold' }} onClick={HandleLogin}>Login</Link>
                                    :
                                    <Link className='nav-link ms-3' to="login" style={{ color: '#ff4e00', fontWeight: 'bold' }} onClick={HandleLogout}>Logout</Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
