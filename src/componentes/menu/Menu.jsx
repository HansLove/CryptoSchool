import React, { useEffect, useState, useContext } from 'react'
import Logo from '../image/logo_deccert.png'
import './estilo.css'
import {
  NavLink
} from "react-router-dom";
import styled from 'styled-components'
import { Link as ScrollLink } from 'react-scroll'
import Cadenas from '../Cadenas/Cadenas'
import Search from '../search-bar/Search'



function Menu() {


  return (
    <nav className='nav_menu'>

      <NavLink
        style={{ marginLeft: '2%' }}
        id="RouterNavLink"
        to='/mint'>
        <img
          width='7%'
          src={Logo} />
      </NavLink>

      <NavLink
        id="RouterNavLink"
        to='/'>
        HOME
      </NavLink>



      <NavLink
        id="RouterNavLink"
        to='/profile'>
        PROFILE
      </NavLink>

      <NavLink
        id="RouterNavLink"
        to='/job-bank'>
        JOB BANK
      </NavLink>



      <NavLink
        id="RouterNavLink"
        to='/certifications'>
        CERTIFICATIONS
      </NavLink>


      {/* <Search
        name="name"
        type="text"
        placeholder={"Search"}
        placeholderColor={"#AFAFAF"}
        fontSize={"16px"}
        padding={"15px 100px 15px 24px"}
        textColor={"white"}
        backgroundColor={"transparent"}
        borderRadius={"10px"}
        margin={"0"}
        border={"1px solid white"}
        paddingButtom={"15px 24px"}
        marginButtom={"0 0 0 -100px"}
      /> */}


      <Cadenas />

    </nav>





  )
}

export default Menu