import {
  NavLink
} from "react-router-dom";
import Search from '../search-bar/Search'
import './estilo.css'
import ButtonConnect from '../ButtonConnect/ButtonConnect';


function Menu() {

  return (
    <nav className='nav_menu'>
      {/* <img
        className='img_logo_menu'
        src={Logo} /> */}

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

      <ButtonConnect/>

    </nav>





  )
}

export default Menu