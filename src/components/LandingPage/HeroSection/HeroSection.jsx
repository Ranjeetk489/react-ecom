import React from 'react'
import Data from './Data'
import './HeroSection.css'
import { watchImg } from '../../../assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas, regular } from 'fontawesome.macro'
const HeroSection = () => {
    return (
        <>
            {
                Data.map(item => {
                    return (
                        <div className="container">
                            <div className="hero-container">
                                <div className="modal-container">
                                    <div className="modal-image">
                                        <img src={item.prodImg} alt="watch" className="hero-image" />
                                    </div>
                                    <div className="modal-title">{item.prodTitle}</div>
                                    <div className="underline-l ul-l"></div>
                                    <div className="modal-title2">
                                        {item.prodDesc}
                                    </div>
                                    <a href="#" className="modal-title3">{item.prodAction}</a>
                                    <div className="underline-s ul-s"></div>
                                    <div className="btns">
                                        <button className="modal-btn btn1"><FontAwesomeIcon className="cart-icon" icon={fas('cart-plus')}/>{item.Cta}</button>
                                        <button className="modal-btn btn2">{item.SecCta}</button>
                                    </div>
                                    <div className="hero-nav">
                                        <div className="hero-back m-nav-ic"><FontAwesomeIcon icon={fas('angle-left')}/></div>
                                        <div className="hero-next m-nav-ic"><FontAwesomeIcon icon={fas('angle-right')}/></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </>
    )
}

export default HeroSection