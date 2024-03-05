import React from 'react'
import Navbar from '../components/Navbar'
import Banner from './home-page/Banner'
import Mens from './home-page/Mens'
import Whyus from './home-page/Whyus'

function Home() {
    return (
        <>
            <Navbar />
            <Banner />
            <Whyus />
            <Mens />
        </>
    )
}

export default Home