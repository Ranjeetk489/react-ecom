import React from 'react'
import {pymImg} from './Data'
import './Footer.css'
const PaymentBar = () => {
  return (
    <div class="main-container">
      <div class="container-bg">
        <div class="pay-items">
          {pymImg.map(img => {
            return (
                <img src={img} alt="img" className="pay-item" />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PaymentBar