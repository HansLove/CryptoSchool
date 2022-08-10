import React from 'react'
import Text from '../../componentes/Texto/Text'
import Search from '../../componentes/search-bar/Search'

import './estilo.css'

function Header() {
  return (
    <div className='job-bank-header'>
      <div className='fact-content'>

        <Text text={"Lorem ipsum dolor"}
          fontSize={"1.5rem"}
          textColor={"snow"} margin={"0"} fontWeight={"500"} />
        <Text text={"Lorem ipsum dolor sit amet consectetur"} fontSize={"4rem"} textColor={"white"} margin={"0"} />

        <Text text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
          fontSize={"20px"}
          textColor={"white"}
          margin={"2rem 40vw 2rem 0"}
        />

        <Search
          name="name"
          type="text"
          jobBankSearch={true}
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
        />


      </div>

    </div>
  )
}

export default Header