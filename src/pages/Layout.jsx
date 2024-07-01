import React from 'react'
import { Outlet } from 'react-router-dom' // Assuming 'Outlet' is from react-router-dom
import '../css/Layout.css'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'

export default function Layout() {
    return (
        <>
            <Nav />
            <div className="outlet">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}
