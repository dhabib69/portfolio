import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/awaksss.png'
import Headersocial from './Headersocial'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <div ><h1 >Welcome!</h1></div>
        <div ><h1 className='namo' >I'm Habib Khairul</h1></div>
        <h1></h1>
        <h4 className="text-light">∙Front End Developer∙│∙Electrical engineer∙</h4>
        <CTA/>
        <Headersocial/>
        <div className="me">
          <img src={Me} alt="me"/>
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header