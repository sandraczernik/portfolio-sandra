import React from 'react'
import './Header.css'
import CTA from './CTA'
import Me from './../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    
<header>
  <div className="header_container">
    <h5>Hello I'm</h5>
    <h1>Sandra</h1>
    <h5 className="text-light">Full-Stack Developer</h5>
    <CTA />
    <HeaderSocials />

    <div className="me">
      <img src={Me} alt="Image of me" />
    </div>

    <a href="#contact" className='scroll_down'>Scroll Down</a>
  </div>
</header>
    
  )
}

export default Header