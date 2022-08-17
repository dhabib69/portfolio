import React from 'react'
import './navigation.css'
import {ImHome3} from 'react-icons/im'
import {FaUserAlt} from 'react-icons/fa'
import {BsFillLightbulbFill} from 'react-icons/bs'
import {BsFillTelephoneInboundFill} from 'react-icons/bs'
import {GiWrench} from 'react-icons/gi' /*import icon dari ract icon*/
import { useState } from 'react'

const Navigation = () => {
  const [Activenav,Setactivenav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=>Setactivenav('#')} className={Activenav === '#'?'active':''}><ImHome3/></a>
      <a href="#about" onClick={()=>Setactivenav('#about')}className={Activenav === '#about'?'active':''}><FaUserAlt/></a>
      <a href="#skills"onClick={()=>Setactivenav('#skills')} className={Activenav === '#skills'?'active':''}><BsFillLightbulbFill/></a>
      <a href="#projects"onClick={()=>Setactivenav('#projects')} className={Activenav === '#projects'?'active':''}><GiWrench/></a>
      <a href="#contact"onClick={()=>Setactivenav('#contact')} className={Activenav === '#contact'?'active':''}><BsFillTelephoneInboundFill/></a>
    </nav>
  ) /*hubungkan(referensikan) antara ikon dengan \ID*/
}

export default Navigation