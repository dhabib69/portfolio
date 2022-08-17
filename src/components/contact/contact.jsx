import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {AiFillInstagram} from 'react-icons/ai'
import {RiWhatsappFill} from 'react-icons/ri'
const contact = () => {
  return (
    <section id ='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdEmail className='contact__option-icon'/>
            <h2>Email</h2>
            <a href="mailto:habib.khairul32@gmail.com" target={"mailto:habib.khairul32@gmail.com"}>
              <h1>Send Message</h1>
            </a>
          </article>
          <article className='contact__option'>
            <AiFillInstagram className='contact__option-icon'/>
            <h2>Instagram</h2>
            <a href="https://www.instagram.com/habib.khairul/" target={"https://www.instagram.com/habib.khairul/"}>
              <h1>Send Message</h1>
            </a>
          </article>
          <article className='contact__option'>
            <RiWhatsappFill className='contact__option-icon'/>
            <h2>WhatsApp</h2>
            <a href="https://wa.me/6282280485849" target={"https://wa.me/6282280485849"}>
              <h1>Send Message</h1>
            </a>
          </article>
        </div>
        {/*end of contact options*/}
      </div>
    
    </section>
  ) //berikan id kepada section
}

export default contact