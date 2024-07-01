import React from 'react'
import Header from '../components/Header.jsx'
import Contact from '../components/Contact.jsx'
import Dishes from '../components/Dishes.jsx'
import About from './About.jsx'
import Menu from './Menu.jsx'
import Order from './Order.jsx'

export default function Home() {
    return (
        <>
            <Header />
            <Dishes />
            <About />
            <Menu />
            <Order />
            <Contact />

        </>
    )
}
