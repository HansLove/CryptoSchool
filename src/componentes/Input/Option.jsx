import React from 'react'
import styled from 'styled-components'
import './estilo.css'

const Label = styled.label`
        padding: ${props => props.padding};
        color: ${props => props.textColor};
        background: ${props => props.backgroundColor};
        border-radius: ${props => props.borderRadius};
        transition: all 0.3s;
        margin:${props => props.margin};
        cursor:pointer;

        &:hover{
          background: linear-gradient(25deg,navy,black);
          color:white;
        }
    `

function Option({name, text, padding, textColor, backgroundColor, borderRadius, margin}) {


  return (
    <Label 
      name={name}
      padding={padding}
      textColor={textColor}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      margin={margin}
    >
      <input type="radio" name={name} value={text} className="label-input"/>
        {text}
    </Label>

  )
}

export default Option