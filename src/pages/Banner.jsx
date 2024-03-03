import React from 'react'
import Carousel from '../components/Carousel';

function Banner() {

    let slides = [
        {
            image: "/img/hero-bg-2.jpg",
            text: "Upgrade Your Style with our Men's Collection",
            icon: '/img/mens-fashion-1.png'
        },
        {
            image: "/img/hero-bg-2.jpg",
            text: "Step into Elegance with our Women's Fashion",
            icon: '/img/womens-fashion-1.png'
        },
        {
            image: "/img/hero-bg-2.jpg",
            text: "Dress Your Little Ones in Style with our Kids' Collection",
            icon: '/img/kids-fashion-1.png'
        }
    ];


    return (
        <div>
            <Carousel slides={slides} />
        </div>
    )
}

export default Banner