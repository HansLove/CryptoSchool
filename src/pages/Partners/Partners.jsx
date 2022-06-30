import React from 'react'
import {FormattedMessage} from 'react-intl'
import ListaPartners from '../../data/partners.json'
import {motion,MotionConfig} from 'framer-motion/dist/framer-motion'
import SinglePartner from './SinglePartner'
import ButtonLaser from '../../componentes/Boton/ButtonLaser/ButtonLaser'
import './estilo.css'


export default function Partners({setcurso}) {

  return (
    <MotionConfig transition={{ duration: 0.8 }}>
    <motion.div 
    id='seccion_cursos'
    style={{color:'white',marginTop:'10%'}}
    initial={{width:0}}
    animate={{width:'100%'}}
    exit={{x:window.innerWidth}}>
        <ButtonLaser 
        fontSize='2rem'
        color='skyblue'
        id='join_us'
        texto='Join us'/>
        
        <h1 style={{
          width:'fit-content',
          display:'block',
          margin:'auto',
          fontSize:'2.6rem'}}>
            <FormattedMessage 
            id='titulo.cursos' 
            defaultMessage='Our partners'/>
            </h1>

        <div className='div_partners_inside'>
        {ListaPartners.map((curso,key)=>
          
        <SinglePartner 
        key={key}
        onClick={()=>setcurso(curso.tipo)}

        image={curso.image}

        reputation={curso.reputation}
        />
     
        )
        }
        </div>

    </motion.div>
    </MotionConfig>
  )
}

