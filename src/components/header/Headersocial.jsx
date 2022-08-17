import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
const Headersocial = () => {
  return (
    <div className='header__social'>
        <a href="https://www.linkedin.com/in/habib-khairul-442800248/" target="https://www.linkedin.com/in/habib-khairul-442800248/"><BsLinkedin/></a>
        <a href="https://www.instagram.com/habib.khairul/" target="https://www.instagram.com/habib.khairul/"><BsInstagram/></a>
        <a href="https://github.com/dhabib69" target="https://github.com/dhabib69"><BsGithub/></a>
    </div>
  )
}

export default Headersocial