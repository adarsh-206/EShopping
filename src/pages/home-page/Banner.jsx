import React, { useState, useEffect } from 'react';

function Banner() {
    const [contentIndex, setContentIndex] = useState(0);

    const contentData = [
        {
            text: "Step up your style game with our latest men's fashion collection.",
            image: "/img/mens-fashion-1.png"
        },
        {
            text: "Discover elegance and sophistication in every stitch with our women's fashion line.",
            image: "/img/womens-fashion-1.png"
        },
        {
            text: "Let your little ones shine bright with our adorable and comfortable kids wear range.",
            image: "/img/kids-fashion-1.png"
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setContentIndex(prevIndex => (prevIndex + 1) % contentData.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [contentData.length]);

    return (
        <div className='banner-image'>
            <div className='banner-div1'>
                <div className='banner-div1_1'>
                    <p>{contentData[contentIndex].text}</p>
                    <button className='banner-div1_1-btn'>Shop Now</button>
                </div>
                <div className='banner-div1_2'>
                    <img src={contentData[contentIndex].image} alt="Fashion" className='banner-div1_2-img' />
                </div>
            </div>
        </div>
    );
}

export default Banner;