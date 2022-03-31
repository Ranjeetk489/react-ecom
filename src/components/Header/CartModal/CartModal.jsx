import { React, useState } from 'react'
import './CartModal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas , regular} from 'fontawesome.macro'
import {iImg1} from '../../../assets'

const CartModal = ({showModalToggle}) => {
  const [count, setCount] = useState(2)

  return (
    <div className="cart-modal">
      <span className="cart-close" onClick = {showModalToggle}><FontAwesomeIcon icon={fas('circle-xmark')} /></span>
      <span className="cart-item">
        <span className="cart-img-container">
          <img src={iImg1} alt="" className="cart-modal-img " />
        </span>

        <span className="cart-item-content ">
          <span className="cart-item-name">Semaitron</span>
          <span className="cart-item-price">Rs 45,000</span>
          <span className="cart-item-type">Custom Engrave</span>
          <span className="cart-item-msg">Happy | Birthday | from</span>
        </span>
        <span className="cart-item-log">
          <span className="cart-item-logistic">Select Packaging</span>
          <span className="cart-item--chlog" >Premium Wooden Packaging  <FontAwesomeIcon icon={fas('caret-down')} /></span>
          <span className="cart-item-final-cost">
            <span className="cart-item-btn btn-add" onClick={() => setCount(count - 1)}><FontAwesomeIcon icon={fas('minus')} /></span>
            <span className="cart-item-count">{count}</span>
            <span className="cart-item-btn btn-rv" onClick={() => setCount(count + 1)}><FontAwesomeIcon icon={fas('plus')} /></span>
            <span className="cart-item-total-amount">Rs 90,000</span>
          </span>
        </span>
      </span>
      <div className="str-line"></div>
      <span className="cart-item cart-bill">
        <form className="cart-item-promo">
          <label className="cart-item-promo-lbl">Discount Code</label>
          <input type="text" className="cart-item-promo-inp" placeholder="WINTER35" />
          <span className="cart-item-promo-disc">15% OFF</span>
        </form>
        <span className="cart-item-subtotal">
          <span className="sb-text">Subtotal</span>
          <div className="strikethrough">
            <span className="cart-item-pre-total">Rs 1,78,000</span>
          </div>
          <span className="cart-item-fin-total">Rs 1,16,000</span>
        </span>
        <a href="/components/checkout/checkout.html" className="cart-item-chkout-btn-link">Checkout</a>
      </span>
    </div>
  )
}

export default CartModal