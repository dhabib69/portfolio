import React from 'react'
import Cv from '../../assets/CV_Habib_Khairul recent.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Cv} download className='button'>Download CV</a>
        <a href="#contact" className='button button-primary'>Let's Talk!</a>
    </div>
  )
}

export default CTA
