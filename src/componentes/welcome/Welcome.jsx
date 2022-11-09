import React, { useEffect } from 'react';
import {GiTeacher, GiAudioCassette,GiMedal} from 'react-icons/gi'
import {FaBitcoin,FaNetworkWired} from 'react-icons/fa'
import Partners from '../../pages/Partners/Partners'
import Boton from '../Boton/Boton'
import Div from '../Div/Div'
import Trends from '../../pages/Trends/Trends'
import WhatIs from '../../pages/WhatIs/WhatIs'
import Roadmap from '../../containers/roadmap/Roadmap';
import FactDeccertOne from '../../containers/fact/FactDeccertOne';
import FactDeccertFour from '../../containers/fact/FactDeccertFour';
import OurConcept from '../../containers/fact/ourConcept/OurConcept';
import WhatWeAreDoing from '../../containers/fact/WhatWeAreDoing';
import './estilo.css'


export default function Welcome() {



  return (
      <div className='div_main_welcome'>
            <div className='div_header_welcome'>
              <p className='p_texto_principal'>NFT Certification Protocol</p>

              <a href='./test'>
                
              <Boton 
              // onClick={async()=>await window.open('https://deccert.com/')}
              marginTop='10%'
              marginLeft='5%'
              fontSize='1.4rem'
              borderRadius='7%'
              padding2='1%'
              colorBorder='transparent'
              color1='black'
              color2='darkblue'
              display='inline-block'
              text={"Certifications NFT"}
              fontWeight='300'
              />
              </a>

            </div>
          
          
          <>
            <div className='div_part_welcome'>
              <GiAudioCassette size={95} style={{display:'block',margin:'auto'}}/>

                <h2>NFTs 2.0</h2>
                
                <p>Utility base digital asset</p>
                
            </div>

            <div className='div_part_welcome'>
              <FaBitcoin size={95} style={{display:'block',margin:'auto'}}/>
                <h2>The Goal</h2>

                <p>Monetize your skills</p>
            </div>


            <div className='div_part_welcome'>
              <FaNetworkWired size={95} style={{display:'block',margin:'auto'}}/>

                <h2>Find the job</h2>
                <p>Use Deccert and find what you are looking</p>
    
                
            </div>

            
            <div className='div_part_welcome'>
              <GiMedal size={95} style={{display:'block',margin:'auto'}}/>
              
                <h2>Proof of Learning</h2>
                
                <p>Blockchain keeps track of the learning process</p>
                
            </div>

          </>

    
      <Div View={<WhatIs/>}/>

      <Div View={
      <Trends/>}/>


      <Roadmap/>

      <FactDeccertOne/>
      
      <Div View={
      <OurConcept/>}/>

      <WhatWeAreDoing/>
      
      <Div View={
      <FactDeccertFour/>}/>

      <Div View={<Partners/>}/>

      </div>
  )
}

