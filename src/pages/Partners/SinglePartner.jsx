import React from 'react'
import styled from 'styled-components'
import Reputation from '../../componentes/Reputation/Reputation'
import './estilo.css'

export default function SinglePartner({
  reputation,
  image='',
}) {

    const Div=styled.div`
        width: 32%;
        display:inline-block;
        vertical-align: top;
        margin-left: 1%;
        border-radius: 1%;
        text-align: center;
        border: none;
        outline: none;
        box-shadow: 1px 1px 1px 1px white;
        background: rgb(0,255,255,0.3);    
        outline: none;
        margin-top: 3%;
        color:white;
        font-family: Georgia, 'Times New Roman', Times, serif;

        &:hover{
            border: 1px solid navy;
            transition: all 0.5s ease-in-out;
        }

        @media (max-width: 500px) {
          width: 98%;
          margin-top: 7%;

          p{
            font-size: 1.8rem;
          }
    
        }
    `
  return (
    <Div>

          <img
          style={{width:'50%',height:'26vh',opacity:'0.9'}}
          src={image} alt="" />
          <Reputation number={reputation}/>
        
    </Div>
  )
}

