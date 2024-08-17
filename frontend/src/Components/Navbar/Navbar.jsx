import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import apple_heaven_logo from '../../Assets/Icons/Apple-heaven.png'
import cart_icon from '../../Assets/Icons/shopping-cart.png'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-logo">
      <Link to={'/'}><img src={apple_heaven_logo} alt="" /></Link>
      </div>
      <div className="button-cart">
      <div className="button">
        <Link to={'/login'}><button>login</button></Link>
      </div>
      <div className="cart-icon">
      <Link to='/cart'><img src={cart_icon} alt="" /></Link> 
      </div>
      </div>
    </div>
  )
}

export default Navbar
