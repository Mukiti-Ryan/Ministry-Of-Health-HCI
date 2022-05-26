import React from 'react'
import './header.css'
import CTA from './CTA'
import MOH1 from '../../assets/healthcare.jpg'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>WELCOME TO</h5>
        <h1>THE MINISTRY OF HEALTH KENYA</h1>
        <h5 className="text_light">SELF SERVICE PORTAL</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="moh">
          <img src={MOH1} alt='moh'/>
          {/* <img src={MOH} alt='moh'/>
          <img src={MOH} alt='moh'/> */}
        </div>
      </div>
    </header>
  )
}

export default Header