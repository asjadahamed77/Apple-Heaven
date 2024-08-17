import React from 'react'
import './Footer.css'
import whatsapp_icon from '../../Assets/Icons/Whatsapp.png'
import facebook_icon from '../../Assets/Icons/facebook.png'
import instagram_icon from '../../Assets/Icons/instagram.png'
import email_icon from '../../Assets/Icons/email.png'
import footer_logo from '../../Assets/Icons/Apple-heaven.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-left">
        <div className="footer-left-logo">
            <img src={footer_logo} alt="" />
        </div>
        <div className="footer-contact-details">
            <div className="image-contact">
                <img src={email_icon} alt="" />
            </div>
            <div className="detail-contact">
                <p>appleheaven2024@icloud.com</p>
            </div>
        </div>
        <div className="footer-contact-details">
            <div className="image-contact">
                <img src={facebook_icon} alt="" />
            </div>
            <div className="detail-contact">
                <p>Apple Heaven</p>
            </div>
        </div>
        <div className="footer-contact-details">
            <div className="image-contact">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="detail-contact">
                <p>@apple_heaven</p>
            </div>
        </div>
        <div className="footer-contact-details">
            <div className="image-contact">
                <img src={whatsapp_icon} alt="" />
            </div>
            <div className="detail-contact">
                <p>+94 76 125 7751</p>
            </div>
        </div>
      </div>
      <div className="footer-right">
<h1>Subscribe to our News Letter</h1>
<div className="input-news-letter">
    <input type="text" placeholder='Enter your email...' />
    <button>Subscribe</button>
</div>
      </div>
    </div>
  )
}

export default Footer
