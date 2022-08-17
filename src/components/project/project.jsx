import React from 'react'
import './project.css'
import GRBL from '../../assets/GRBL.png'
import PKM from '../../assets/Picture4.png'
import proposal from '../../assets/Proposal - Pemonitor Over Heating pada Load Bank Penampil Pengukuran Besaran Listrik Terintegrasi ke Android (1).pdf'
import bluetooth from '../../assets/Picture1.png'
import proposal1 from '../../assets/SNIV22_HabibKhairul2.pdf'
import jurnalmotor from '../../assets/Picture2.png'
import proposal2 from '../../assets/SNIV22_Habib_Khairul.pdf'
import cnc from '../../assets/Picture3.png'
import cncBP from '../../assets/Blue_Print.pdf'
const projects = () => {
  return (
    <section id='projects'>
        <h5>My recent Work</h5>
        <h2> Portfolio </h2>
       
        <div className="container projects__container">
          <article  className='portfolio__item'> 
            <div className="portfolio__item-image">
              <img src={GRBL} alt=""/>
            </div >
            <h3> CNC Controller App </h3>
            <div className='tombol_PKM'>
              <a href="https://github.com/dhabib69/GRBL-Controller" className='button' target={"https://github.com/dhabib69/GRBL-Controller"}>Github</a>
            </div>
            
          </article>

          <article  className='portfolio__item'> 
            <div className="portfolio__item-image">
              <img src={PKM} alt=""/>
            </div>
            <h3>Pemonitor Suhu Genset berbasis Android </h3>
            <div className='tombol_PKM'>
              <a href={proposal} download className='button'>Proposal</a>
              <a href="https://www.youtube.com/watch?v=uW7YI-wwuQ8" className='button button-primary' target={"https://www.youtube.com/watch?v=uW7YI-wwuQ8"}>Youtube</a>
            </div>
          </article>

          <article  className='portfolio__item'> 
            <div className="portfolio__item-image">
              <img src={bluetooth} alt=""/>
            </div>
            <h3> jurnal komunikasi CNC</h3>
            <div className='tombol_PKM'>
              <a href={proposal1} download className='button'>Proposal</a>
            </div>
          </article>

          <article  className='portfolio__item'> 
            <div className="portfolio__item-image">
              <img src={jurnalmotor} alt=""/>
            </div>
            <h3> jurnal pengaturan kecepatan motor CNC</h3>
            <div className='tombol_PKM'>
              <a href={proposal2} download className='button'>Proposal</a>
            </div>
            
          </article>

          <article  className='portfolio__item'> 
            <div className="portfolio__item-image">
              <img src={cnc} alt=""/>
            </div>
            <h3> Project Mesin CNC PT.tepat Guna</h3>
            <div className="tombol_PKM">
              <a href={cncBP} download className='button'>Blue Print</a>  
              <a href="https://www.youtube.com/shorts/_jDWzTkwwWc" className='button button-primary' target={"https://www.youtube.com/shorts/_jDWzTkwwWc"}>Youtube</a>
            </div>
            
          </article>

        </div>
    </section>
  ) //berikan id kepada section
}

export default projects