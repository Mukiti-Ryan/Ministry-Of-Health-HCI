import React from 'react'
import './footer.css'
import KENYA from '../../assets/Coat_of_arms.png'
import {FaFacebook} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer id='footer'>
      
      <div className="Kenya">
        <a href="#" className='country__link'>REPUBLIC OF KENYA</a>
        <img src={KENYA} alt='Kenya'/>
        <br></br>
        <a href='#' className='moh__link'>Ministry Of Health Kenya</a>
      </div>

      {/* <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul> */}

      <div className='footer__socials'>
        <a href="https://facebook.com/MOH"><FaFacebook/></a>
        <a href="https://twitter.com/MOH_Kenya" target='_blank'><FaTwitter/></a>
        <a href="https://instagram.com/MOH"><FiInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ministry of Health. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer