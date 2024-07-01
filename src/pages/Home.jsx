import React from 'react'
import Header from '../components/Header.jsx'
import Contact from '../components/Contact.jsx'
import Dishes from '../components/Dishes.jsx'
import About from './About.jsx'

export default function Home() {
    return (
        <>
            <Header />
            <Dishes />
            <About />
            <Contact />

        </>
    )
}
