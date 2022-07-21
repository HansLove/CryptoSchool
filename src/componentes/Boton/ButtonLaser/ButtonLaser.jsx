import React from 'react'
import styled from 'styled-components'


import './estilo.css'

function ButtonLaser({
    onClick,
    texto='Bitcoin',
    color='hotpink',
    display='block',
    margin='auto',
    fontSize='1.4rem',

}) {

    const A=styled.a`
    display: ${display};
    width: fit-content;
    margin: ${margin};
    font-size: ${fontSize};
    &:hover{
        box-shadow: 0 0 35px ${color};
        letter-spacing: 0.2em;
        background: ${color};
        color: ${color};
    }
    `
  return (
    <A
    onClick={onClick}
    className='boton_laser'><span>
      {texto}
      </span>
    <i></i>
    </A>
  )
}

export default ButtonLaser
