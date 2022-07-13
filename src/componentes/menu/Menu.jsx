import React, { useEffect, useState,useContext } from 'react'
import Logo from '../image/logo_deccert.png'
// import {langContext}from '../../context/langContext'
import './estilo.css'
import Banderas from '../Banderas/Banderas'
import {
  NavLink
} from "react-router-dom";
import {Link as ScrollLink} from 'react-scroll'
import Cadenas from '../Cadenas/Cadenas'



function Menu() {

  // const idioma=useContext(langContext)
  const [visible, setvisible] = useState(false)


  return (
      <nav className='nav_menu'>

        <NavLink
        style={{marginLeft:'2%'}}
        id="RouterNavLink" 
        to='/mint'>
          <img 
          width='7%' 
          src={Logo}/>
        </NavLink>

        <NavLink
        id="RouterNavLink" 
        onClick={()=>setvisible(true)}
        to='/'>
            HOME
        </NavLink> 
        


        <NavLink 
        id="RouterNavLink" 
        onClick={()=>setvisible(false)}
        to='/profile'>
              PROFILE
        </NavLink>



        <NavLink
        id="RouterNavLink" 
        onClick={()=>setvisible(false)}
        to='/certifications'>
            CERTIFICATIONS  
        </NavLink>  

        {visible&&
        <ScrollLink
            activeClass="active"
            to="id_trends"
            spy={true}
            smooth={true}
            offset={5}
            duration={1000}>      
            About
          </ScrollLink>}
        

        {/* <Banderas idioma={idioma}/> */}

        <Cadenas/>

      </nav>



       
    
  )
}

export default Menu