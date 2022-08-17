import React from 'react'
import './skills.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const skills = () => {
  return (
    <section id='skills'>
      <h2>My skills</h2>
      <div className='container skills__container'>


        <div className='softskills'>
          <h2> Hardskills </h2>
          <div className="skills__content">
            <article className='skilss__detail'>
              <BsPatchCheckFill/>
              <h4> HTML</h4>
              <small>Basic</small>
            </article>
            <article className='skilss__detail'>
              <BsPatchCheckFill/>
              <h4> Phyton</h4>
              <small>Intermediate</small>
            </article>
            <article className='skilss__detail'>
              <BsPatchCheckFill/>
              <h4> CSS</h4>
              <small>Intermediate</small>
            </article>
            <article className='skilss__detail'>
              <BsPatchCheckFill/>
              <h4>React</h4>
              <small>Intermediate</small>
            </article>
            <article className='skilss__detail'>
              <BsPatchCheckFill/>
              <h4> Bootstrap</h4>
              <small>Basic</small>
            </article>
            <article className='skilss__detail'>
              <BsPatchCheckFill/>
              <h4> Node JS</h4>
              <small>Intermediate</small>
            </article>
          </div>
        </div>



        <div className="hardskills">
        <h2> Soft skills</h2>
          <div className="skills__content">
            <article className='skilss__detail'>
              <BsPatchCheckFill/>
              <h4> English </h4>
              <small>9/10</small>
            </article>
            <article className='skilss__detail'>
              <BsPatchCheckFill/>
              <h4> Problem Solving</h4>
              <small>8/10</small>
            </article>
            <article className='skilss__detail'>
              <BsPatchCheckFill/>
              <h4> Communicating</h4>
              <small>9/10</small>
            </article>
            <article className='skilss__detail'>
              <BsPatchCheckFill/>
              <h4>Leadership</h4>
              <small>8/10</small>
            </article>
          </div>
        </div>

      </div>
    </section>
  ) //berikan id kepada section
}

export default skills