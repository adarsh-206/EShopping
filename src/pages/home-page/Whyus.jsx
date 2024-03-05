import React from 'react'
import { FaShippingFast } from "react-icons/fa"
import { BiSolidOffer } from "react-icons/bi"
import { GiReturnArrow } from "react-icons/gi";

function Whyus() {
    return (
        <div className="why-us-container">
            <div className="why-us-box">
                <FaShippingFast size={34} />
                <h3>Free Shipping</h3>
            </div>
            <div className="why-us-box">
                <BiSolidOffer size={34} />
                <h3>Exclusive Offers</h3>
            </div>
            <div className="why-us-box">
                <GiReturnArrow size={34} />
                <h3>Easy Returns</h3>
            </div>
        </div>
    )
}

export default Whyus