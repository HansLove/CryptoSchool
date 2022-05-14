import React from 'react'
import Boton from '../../componentes/Boton/Boton'
import Input from '../../componentes/Input/Input'
import '../../estilo/estilo.css'

function Contactanos() {
  return (
    <div style={{height:'100vh',background:'transparent'}}>

        <h1 style={{color:'white',fontSize:'2.5rem',display:'block',
      margin:'auto',marginLeft:'5%'}}>Contactanos</h1>

        <div className='div_main_1'
        style={{margin:'5%',borderRadius:'5%',padding:'0.5%'}}>
            <p>Envianos un mensaje</p>

            <div style={{display:'inline-block',width:'45%'}}>
            <p>Tu nombre: </p>
            <Input fontSize='2rem' width='75%'/>
            </div>

            <div style={{display:'inline-block',width:'45%'}}>
            <p>Tu email: </p>
            <Input fontSize='2rem' width='75%'/>
            </div>

            <p>Mensaje:</p>
            <textarea style={{width:'85%',fontSize:'1.4rem',borderRadius:'5%',
              height: '20vh'
            }}/>

            <Boton marginTop='2%'
            color1='olive' color2='lightgreen' text='Enviar mensaje'
            fontSize='1.6rem' borderRadius='10%'/>
        </div>
    </div>
  )
}

export default Contactanos