import React from 'react'
import styled from 'styled-components'

export default function Boton({
  text='..',
  onClick=()=>{},
  color1='white' ,
  color2='black',
  color='white',
  fontSize='1rem',
  display='block',
  margin='auto',
  marginTop='1%',
  marginLeft='null',
  padding2='1%',
  borderRadius='10% 15%',
  colorBorder='transparent',
  fontWeight='100'
}) {

    const Button=styled.button`
        background: linear-gradient(-45deg,${color1},${color2});
        color:${color};
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-size: ${fontSize};
        font-weight:${fontWeight};
        border: 1px solid ${colorBorder};
        border-radius: ${borderRadius};
        display: ${display};
        margin: ${margin};
        margin-top: ${marginTop};
        padding:1% 2%;
        margin-bottom: 1%;
        margin-left: ${marginLeft};
        animation: anim_b 5s ease-in-out infinite alternate-reverse;
        background-size: 300% 300%;
        transition: all 0.5s ease-in-out;

        
        &:hover{
            transition: all 0.4s ease-in-out;
            background: linear-gradient(45deg,${color1},${color1});
            box-shadow: 0.5px 0.5px 0.5px 0.5px goldenrod;
            letter-spacing: 0.05em;
        }

        @keyframes anim_b {
          0%{
              background-position: 0% 50%;
          }
          50%{
              background-position: 100% 50%;
          }
          100%{
              background-position: 0% 50%;
          }
        }
    `
  return (
    <Button onClick={onClick}>
      {text}
    </Button>
  )
}

