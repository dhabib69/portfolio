import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Habib</a>
      <ul className='permalinks'>
        <li><a href="#"><h2>Home</h2></a></li>
        <li><a href="#"><h2>About</h2></a></li>
        <li><a href="#"><h2>Skills</h2></a></li>
        <li><a href="#"><h2>Projects</h2></a></li>
        <li><a href="#"><h2>Contacts</h2></a></li>
      </ul>
      <div className="footer__social">
        <a href="https://www.linkedin.com/in/habib-khairul-442800248/" target="https://www.linkedin.com/in/habib-khairul-442800248/"><BsLinkedin/></a>
        <a href="https://www.instagram.com/habib.khairul/" target="https://www.instagram.com/habib.khairul/"><BsInstagram/></a>
        <a href="https://github.com/dhabib69" target="https://github.com/dhabib69"><BsGithub/></a>
      </div>
      <div className="footer__copyright">
          <small>&copy;Copyright Habib Khairul</small>
      </div>
    </footer>
  )
}

export default footer