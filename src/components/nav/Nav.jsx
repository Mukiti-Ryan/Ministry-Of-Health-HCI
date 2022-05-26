import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {FaQuestionCircle} from 'react-icons/fa'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#faq" onClick={() => setActiveNav('#faq')} className={activeNav === '#faq' ? 'active' : ''}><FaQuestionCircle/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav