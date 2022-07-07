import React from 'react'
import styled from 'styled-components'

const TextBox = styled.textarea`
        font-size:${props => props.fontSize};
        width: -webkit-fill-available;
        padding:${props => props.padding};
        border-radius:${props => props.borderRadius};
        background-color:${props => props.backgroundColor};
        border:none;
        margin:${props => props.margin};
        resize: none;

        ::placeholder{
            color:${props => props.placeholderColor};
        }
    `

function TextArea({value, onChange, name, id, rows, placeholder, placeholderColor, fontSize, padding, borderRadius, backgroundColor, margin}) {


  return (
    <TextBox 
      placeholderColor={placeholderColor}
      fontSize={fontSize}
      padding={padding}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      margin={margin}
      name={name} 
      id={id} 
      rows={rows} 
      placeholder={placeholder} 
      value={value} 
      onChange={onChange}
      
    />

  )
}

export default TextArea