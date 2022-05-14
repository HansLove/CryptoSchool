import React from 'react'
import styled from 'styled-components'

const InputStyled=styled.input`
font-size: ${props=>props.fontSize};
border-radius: ${props=>props.borderRadius};
text-align: ${props=>props.textAllign};
padding: ${props=>props.padding} ${props=>props.padding2};



`

function Input({fontSize='1.5rem',borderRadius='10%',placeholder='',
    textAllign='start',padding='1%' ,padding2='1%',
    width='96%',margin='auto'
}) {


  return (
    <InputStyled style={{width:width,margin:margin}}
    type='text' placeholder={placeholder} fontSize={fontSize}
    borderRadius={borderRadius} textAllign={textAllign} 
    padding={padding} padding2={padding2} 
    >
    </InputStyled>
  )
}

export default Input