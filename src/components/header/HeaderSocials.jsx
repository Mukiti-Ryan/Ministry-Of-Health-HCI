import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://facebook.com' target="_blank"><FaFacebook/></a>
        <a href='https://twitter.com/MOH_Kenya' target="_blank"><FaTwitter/></a>
        <a href='https://instagram.com/moh_kenya' target="_blank"><FiInstagram/></a>
    </div>
  )
}

export default HeaderSocials