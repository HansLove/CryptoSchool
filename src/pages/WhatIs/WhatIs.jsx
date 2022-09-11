import React from 'react'
import Logo from '../../componentes/image/logo_deccert.png'
import './estilo.css'

function WhatIs() {
  return (
    <div className='div_what_is'>
        <h1>What is Deccert?</h1>

        <img 
        src={Logo} 
        alt="logo"  />

        <p>
        Deccert is a protocol that verified Resume NFT platform that turns people’s skills into blocks 
        of unique NFTs. 
        The minted NFTs are available on our database connected into the Job Bank  for employers and recruiters 
        to hire or search for a talent with a desired profile 
        Employers and Recruiters can choose to view complete resume details base on in the holding of the digital assets. 
        
        </p>
    </div>
  )
}

export default WhatIs