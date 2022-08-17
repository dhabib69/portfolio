import React from 'react'
import './about.css'
import Me from '../../assets/GN7.jpeg'
import {MdSchool} from 'react-icons/md'
import {FaAward} from 'react-icons/fa'
import {IoLogoElectron} from 'react-icons/io5'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me!</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Me} alt='About Image'/>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <MdSchool className = 'about__icon' />
              <h5>Education</h5>
              <div><small>State Polytechnic Of Jakarta</small></div>
              <div><small>Associate degree in Electronics Control</small></div> 
            </article>
            <article className='about__card'>
              <FaAward className = 'about__icon' />
              <h5>Experiences</h5>
                <div className='experience'>
                  <small>- PT. KAI - intern </small>
                </div>
                <div className='experience'>
                   <small >- Ripple.Inc - intern </small>
                </div>
                <div className='experience'>
                   <small>- PT.Tepat Guna - freelance</small>
                </div>
            </article>
            <article className='about__card'>
              <IoLogoElectron className = 'about__icon' />
              <h5>Projects</h5>
              <div className='project'>
                  <small>-3 Dimensional Laser CNC Machine </small>
              </div>
              <div className='project'>
                  <small>-Train Generator Monitoring system based on android </small>
              </div>
              <div className='project'>
                <small>- final project website</small>
              </div>
              <div className='project'>
                <small>- CNC control App</small>
              </div>
              
            </article>
          </div>
          <p className='p'>
            Hi! Im Habib Khairul an Electrical engineer who wants to shift his career to a programmer. I live in indonesia
            and have a degree in Electronics Control from State polytechnic of jakarta. I start learning about Web development 2 months ago
            and and complete this website within 10 days. Even though im not new in programming and have been coding in C for 3 years of college I still have a lot to learn in web development
            </p>
            <div className='talk'>
            <a href="#contact" className='button button-primary'>Let's Talk!</a>
            </div>
            
          
        </div>
      </div>
    </section>
  ) 
}

export default About