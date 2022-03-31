import {React, useState} from 'react';
import './Header.css'
import brandIcon from '../../assets/brand.svg'
import searchIcon from '../../assets/search.svg'
import userIcon from '../../assets/user.svg'
import cartIcon from '../../assets/cart.svg'
import CartModal from './CartModal/CartModal'



const Header = () => {
    const [showModal, setShowModal] = useState(false)
    const showModalToggle = () => {setShowModal(false)}

    const handleSubmit = () => { }
    return (
        <header className = "container">
            <nav className="navbar">
                <a href="../../App.js" className="brand-icon">
                    <img src={brandIcon} alt="Matoa" className="brand-icon" />
                </a>
                <div className="nav-links">
                    <a href="#" className="nav-link">All Products</a>
                    <a href="#" className="nav-link">Watches</a>
                    <a href="#" className="nav-link">Eyewear</a>
                    <a href="#" className="nav-link">Accessories</a>
                </div>
                <div className="sec-nav-links nav-links">
                    <form className="search-bar" onSubmit={handleSubmit}>
                        <input type="text" className="search-input" placeholder='search here' />
                        <button className="search-btn">
                            <img src={searchIcon} alt="" className="search-icon"  />
                        </button>
                    </form>
                    <a href="/components/UserManagement/login.html" className="user-icon-link nav-link">
                        <img src={userIcon} alt="" className="user-icon nav-link" />
                        <span className="nav-link-title">Login</span>
                    </a>
                    <span className=" cart-link-icon" onClick={() => setShowModal(!showModal)}>
                        <img src={cartIcon} alt="" className="cart-icon " />
                        <div className="nav-cart-item">0</div>
                    </span>
                    {
                        showModal && <CartModal showModalToggle = {showModalToggle}/>
                    }
                    
                </div>
            </nav>
        </header>
    )
}

export default Header