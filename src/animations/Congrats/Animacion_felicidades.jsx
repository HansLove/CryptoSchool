import React from 'react'
import './estilo.css'

function Animacion_felicidades({
    texto='New DECCERT NFT',
    fontSize='3.4rem'}) {
    return (
        <p style={{fontSize:fontSize}}
         className='p_23'>{texto}</p>
    )
}

export default Animacion_felicidades
