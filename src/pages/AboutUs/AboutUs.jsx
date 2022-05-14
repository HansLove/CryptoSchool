import React from 'react'
import Logo from '../../componentes/image/logo.png'
import './estilo.css'


function AboutUs() {
  return (
    <div style={{height:'100vh'}}>

        <img src={Logo}  width='45%'/>
        
        <div className='div_main_aboutus'
        style={{color:'white',width:'55%',fontSize:'1.5rem',
            marginLeft:'3%',display:'inline-block'
            }}>
        <p>Usando la tecnologia Blockchain y 
            el protocolo ERC-721 damos un servicio academico digital
            competitivo.
        </p>

        <p>Nuestro objetivo es utilizar este nuevo protocolo para nuestra
            infraestructura digital y modelo de negocio y asi poder llegar a la 
            mayor cantidad de usuarios posibles.
        </p>

        <p>Con una infraestructura semi-descentralizada, preparate para 
            una nueva forma de aprender usando los NFT.
        </p>

        </div>

        <div 
         class="cssload-wrap">
            <div class="cssload-circle"></div>
            <div class="cssload-circle"></div>
            <div class="cssload-circle"></div>
            <div class="cssload-circle"></div>
            <div class="cssload-circle"></div>
            <div class="cssload-circle"></div>
            <div class="cssload-circle"></div>
            <div class="cssload-circle"></div>
            <div class="cssload-circle"></div>
            <div class="cssload-circle"></div>
            <div class="cssload-circle"></div>
            <div class="cssload-circle"></div>
            <div class="cssload-circle"></div>
            <div class="cssload-circle"></div>
            <div class="cssload-circle"></div>
            <div class="cssload-circle"></div>
            <div class="cssload-circle"></div>
            <div class="cssload-circle"></div>
            <div class="cssload-circle"></div>
            <div class="cssload-circle"></div>
            <div class="cssload-circle"></div>
            <div class="cssload-circle"></div>
            <div class="cssload-circle"></div>
            <div class="cssload-circle"></div>
            <div class="cssload-circle"></div>
            <div class="cssload-circle"></div>
            <div class="cssload-circle"></div>
            <div class="cssload-circle"></div>
            <div class="cssload-circle"></div>
            <div class="cssload-circle"></div>
        </div> 

    </div>
  )
}

export default AboutUs