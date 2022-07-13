import React from 'react'
import styled from 'styled-components'
import './estilo.css'

const Input = styled.input`
        font-size: ${props => props.fontSize};
        font-weight: ${props => props.fontWeight};
        padding: ${props => props.padding};
        color: ${props => props.textColor};
        background: ${props => props.backgroundColor};
        border-radius: ${props => props.borderRadius};
        transition: all 0.3s;
        margin:${props => props.margin};
        cursor:pointer;
    `

function InputTwo({name, type, placeholder, value,defaultValue, onChange, fontSize, fontWeight, padding, textColor, backgroundColor, borderRadius, margin}) {
    return (
        <Input
            type={type}
            placeholder={placeholder}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
            name={name}
            fontSize={fontSize}
            fontWeight={fontWeight}
            padding={padding}
            textColor={textColor}
            backgroundColor={backgroundColor}
            borderRadius={borderRadius}
            margin={margin}
        />
    )
}

export default InputTwo