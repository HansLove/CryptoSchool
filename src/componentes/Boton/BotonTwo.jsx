import React from "react";
import styled from "styled-components";

const Button = styled.button`
    text-decoration:none;
    cursor:pointer;
    height: 7vh;
    position: absolute;
    right: 120px;
    font-size:${props => props.fontSize};
    font-weight:${props => props.fontWeight};
    color:${props => props.textColor};
    background-color:${props => props.buttonColor};
    border:${props => props.borderButton};
    border-radius:${props => props.borderRadius};
    margin:${props => props.margin};
    padding:${props => props.padding};
    transition: all 0.5s ease-in-out;

    &:hover{
        transition: all 0.5s ease-in-out;
        color: silver;
        border: 1px solid gray;
        letter-spacing: 0.1em;
    }
`

function BotonTwo({ 
    text, 
    onClick, 
    fontSize, 
    fontWeight, textColor, buttonColor, 
    borderButton, borderRadius, margin, padding }) {


    return (
            <Button
                onClick={onClick}
                fontSize={fontSize}
                fontWeight={fontWeight}
                textColor={textColor}
                buttonColor={buttonColor}
                borderButton={borderButton}
                borderRadius={borderRadius}
                margin={margin}
                padding={padding}
            >
                {text}
            </Button>
           
     
    )

}

export default BotonTwo;