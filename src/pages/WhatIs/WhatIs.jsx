import React from 'react'
import Logo from '../../componentes/image/logo_deccert.png'
import './estilo.css'

function WhatIs() {
  return (
    <div className='div_what_is'>
        <h1>What is Deccert?</h1>

        <img 
        src={Logo} 
        alt=""  />

        <p>
        DECCERT is the world’s first AI-enabled Verified Resume NFT platform that turns people’s resumes into unique NFTs. 
        The minted NFTs are available on our Marketplace for employers and recruiters to buy and trade for fees.
        The minted NFTs are also directly matched with relevant open jobs using our proprietary AI engine. 
        Employers and Recruiters can choose to view complete resume details after paying fees. 
        Nearly all of the fee collected is directly transferred to the Job Seeker/NFT owner, thereby empowering people for sharing their Verified Data.
        </p>
    </div>
  )
}

export default WhatIs