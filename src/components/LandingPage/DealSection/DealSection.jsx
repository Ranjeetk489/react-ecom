import { React, useState } from 'react'
import './DealSection.css'
import { Data, DealsData } from './Data'
import { featImg1, featImg2 } from '../../../assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas, regular } from 'fontawesome.macro'

const DealSection = () => {
    const [wishlist, toggleWishlist] = useState(true)
    const handleToggle = (key) => {
        DealsData.map(item => {
            if(item.key === key) {
                toggleWishlist(!wishlist)
                item.wishlisted = wishlist
            }
        })
    }

    return (
        <div className="container">
            <div className="features-container">
                {
                    Data.map((item, index) => {
                        return (
                            <div className="feature-container">
                                <div className="feature-title">{item.prodclassName} <span className="feature-str">{item.prodGenre}</span></div>
                                <div className="feature-desc">{item.prodTagLine}</div>
                                <a href="#" className="feature-link">{item.prodAction}</a>
                                <div className="underline-l f-ul"></div>
                                <img src={item.prodImg} alt="glasses" className="feature-img" />
                            </div>
                        )
                    })

                }
            </div>
            <div className="main-container">
                <span className="container-type">Monthly Deals</span>
                <div className="underline-s"></div>
                <div className="deals-container">
                    {
                        DealsData.map((item, index) => {
                            return (
                                <div className="deal-container">
                                    <img src={item.prodImg} alt="image" className="deal-image" />
                                    <span className="deal-title">{item.prodTitle}</span>
                                    <span className="deal-disc">{item.prodDisc}</span>
                                    <span className="line-thr">
                                        <span className="deal-pre-price">{item.prodPrePrice}</span>
                                    </span>
                                    <span className="deal-sec-price">{item.prodDiscPrice}</span>
                                    <span className="shop-container hide">
                                        <span className="wishlist" onClick={() => handleToggle(item.key)} key = {item.key}>
                                            {item.wishlisted ? <FontAwesomeIcon className="wishlist-icon" icon={fas('heart')} />
                                        : <FontAwesomeIcon className="wishlist-icon" icon={fas('heart-circle-plus')} /> }</span>
                                        <span className="add-cart-btn">Add To Cart</span>
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default DealSection