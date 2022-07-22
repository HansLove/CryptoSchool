import React, { useEffect } from 'react';
import {GiBookshelf, GiTeacher, GiWorld,GiMedal} from 'react-icons/gi'
import Fondo1 from '../image/fondo_2.png'
import Partners from '../../pages/Partners/Partners'
import Boton from '../Boton/Boton'
import './estilo.css'
import Div from '../Div/Div'
import Trends from '../../pages/Trends/Trends'
import WhatIs from '../../pages/WhatIs/WhatIs'
import Roadmap from '../../containers/roadmap/Roadmap';
import FactDeccertOne from '../../containers/fact/FactDeccertOne';
import FactDeccertTwo from '../../containers/fact/FactDeccertTwo';
import FactDeccertThree from '../../containers/fact/FactDeccertThree';
import FactDeccertFour from '../../containers/fact/FactDeccertFour';




export default function Welcome() {


  useEffect(async() => {
    let objeto=new ObjetoDeccert()
    await objeto.load()
    let total=await objeto.getTotal()
    console.log('total nfts: ',total)
  }, [])
  
  

  return (
      <div className='div_main_welcome'>

        <img 
        className='imagen_fondo_welcome'
        src={Fondo1} alt="" />


            <div className='div_header_welcome'>

              <p className='p_texto_principal'>
                
              Certificates NFT for the decentralization 
              of the education
              </p>

              <a href='./test'>
              <Boton 
              // onClick={async()=>await window.open('https://deccert.com/')}
              marginTop='10%'
              marginLeft='5%'
              fontSize='1.5rem'
              borderRadius='10%'
              padding2='1%'
              colorBorder='blue'
              color1='navy'
              color2='darkmagenta'
              display='inline-block'
              text='First certification'
              fontWeight='bold'
              />
              </a>

            </div>
          
          
          <>
            <div className='div_part_welcome'>
              <GiWorld size={95} style={{display:'block',margin:'auto'}}/>

                <h2>Ilimited Access</h2>
                
                <p>World Reach using blockchain</p>
                
            </div>

            <div className='div_part_welcome'>
              <GiBookshelf size={95} style={{display:'block',margin:'auto'}}/>

                <h2>Our Courses</h2>
                

                <p>Automatic decentralized update</p>
                
                

            </div>


            <div className='div_part_welcome'>
              <GiTeacher size={95} style={{display:'block',margin:'auto'}}/>

                <h2>Work with us</h2>
                <p>Use 2.0 NFT´s for your academic process</p>
    
                
            </div>

            
            <div className='div_part_welcome'>
              <GiMedal size={95} style={{display:'block',margin:'auto'}}/>
              
                <h2>NFT´s 2.0 and Learning</h2>
                
                <p>Blockchain in digital schools</p>
                
            </div>

          </>

    
      <Div View={<WhatIs/>}/>

      <Div View={<Trends/>}/>


      <Div View={<Partners/>}/>

      <Roadmap/>

      <FactDeccertOne/>

      <FactDeccertTwo/>

      <FactDeccertThree/>

      <FactDeccertFour/>
      </div>
  )
}

