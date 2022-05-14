import React from 'react'
import Bitcoin from '../image/btc_gif_1.gif'
import {GiBookshelf, GiTeacher, GiWorld,GiMedal} from 'react-icons/gi'
import {GrCertificate} from 'react-icons/gr'
import './estilo.css'
import Background1 from '../../animations/Background1/Background1'

function Welcome() {
  return (
    <div style={{height:'100vh'}} className='div_main_welcome'>

        <Background1/>
        <div style={{display:'inline-block',width:'75%',marginLeft:'5%'}}>

        <p style={{fontFamily:'monospace',fontSize:'4.5rem',width:'95%'}}
          >Obten las herramientas para la nueva era Digital</p>

          <p style={{fontFamily:'monospace',fontSize:'2.5rem',width:'75%'}}
          >La academia virtual que lleva los NFT al siguiente nivel!</p>

          <button className='boton_empezar'
          style={{display:'block',fontSize:'1.7rem',
            margin:'auto'
            }}>Empieza ahora!</button>

        </div>

         <div style={{background:'transparent',margin:'3%',color:'white',
        padding:'0.5%',borderRadius:'1%'}}>

           <div className='div_part_welcome'
            style={{border:'1px solid white',height:'20vh',width:'21%',margin:'1%',
            borderRadius:'3%',display:'inline-block',verticalAlign:'top'
            }}>
             <GiWorld size={95} style={{display:'block',margin:'auto'}}/>
             <p style={{fontSize:'1.6rem',display:'block',
              margin:'auto',width:'fit-content'}}>Accesso ilimitado</p>
             <p style={{fontSize:'1.2rem',textAlign:'center'}}>Pagos unicos para acceso sin fronteras</p>
           </div>

           <div className='div_part_welcome' style={{border:'1px solid white',height:'20vh',width:'21%',margin:'1%',
            borderRadius:'3%',display:'inline-block',verticalAlign:'top'
            }}>
             <GiBookshelf size={95} style={{display:'block',margin:'auto'}}/>
             <p style={{fontSize:'1.6rem',display:'block',
              margin:'auto',width:'fit-content'}}>Contenido Actualizado</p>
             <p style={{fontSize:'1.2rem',textAlign:'center'}}>Actualizacion sistematica automatizada</p>
           </div>


           <div className='div_part_welcome' style={{border:'1px solid white',height:'20vh',width:'21%',margin:'1%',
            borderRadius:'3%',display:'inline-block',verticalAlign:'top'
            }}>
             <GiTeacher size={95} style={{display:'block',margin:'auto'}}/>
             <p style={{fontSize:'1.6rem',display:'block',
              margin:'auto',width:'fit-content'}}>Colabora con nostros</p>
             <p style={{fontSize:'1.2rem',textAlign:'center'}}>Usa los NFTs para obtener un ingreso</p>
           </div>

           
           <div className='div_part_welcome' style={{
             border:'1px solid white',width:'21%',margin:'1%',
            borderRadius:'3%',display:'inline-block',height:'20vh',background:'red'
            }}>
             <GiMedal size={95} style={{display:'block',margin:'auto',
              color:'white'}}/>
             <p style={{fontSize:'1.6rem',display:'block',
              margin:'auto',width:'fit-content'}}>Calidad y NFT´s</p>
             <p style={{fontSize:'1.2rem',textAlign:'center'}}>Blockchain y descentralizacion</p>
           </div>

         </div>
    </div>
  )
}

const toggle=document.querySelector('div_part_welcome')
toggle.addEventListener('click',()=>{
  toggle.classList.toggle('activate')
})
export default Welcome