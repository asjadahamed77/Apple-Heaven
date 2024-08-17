import React from 'react'
import { Link } from 'react-router-dom'
import './PhonesContainer.css'
const PhonesContainer = (props) => {
  const handleAddToCartClick = () => {
    window.scrollTo(0, 0);
  }

  return (
    <div className='phones-container'>
      <div className="image-phone">
        <img src={props.phone_image} alt="" />
      </div>
      <div className="info-phone">
        <h3>{props.model_name}</h3>
        <p>Rs. <span>{props.price_between}</span></p>
      </div>
      <div className="view-phone-button">
      <Link to={`/shop/${encodeURIComponent(props.model_name)}`}>
            <button onClick={handleAddToCartClick}>View Phone</button>
          </Link>
      </div>
    </div>
  )
}

export default PhonesContainer
