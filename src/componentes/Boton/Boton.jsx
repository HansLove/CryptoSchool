import React from 'react'
import styled from 'styled-components'

function Boton({text='..',onClick=()=>{},
color1='white' ,color2='black',color='white',fontSize='1rem',
display='block',margin='auto',marginTop='1%'}) {

    const Button=styled.button`
        background: linear-gradient(-45deg,${color1},${color2});
        color:${color};
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: ${fontSize};
        border-radius: 5%;
        transition: all 1s ease-in-out;
        display: ${display};
        margin: ${margin};
        margin-top: ${marginTop};
        padding:0.5%;
        &:hover{
            border-radius: 10%;
            padding:1%;
            transition: all 1s ease-in-out;
        }
    `
  return (
    <Button onClick={onClick}>
        {text}
    </Button>
  )
}

export default Boton