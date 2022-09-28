import React from "react";
import styled from "styled-components";

const Button = styled.button`
    text-decoration:none;
    cursor:pointer;
    width: -webkit-fill-available;
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

    @media 
    (min-device-width: 300px) 
    and (max-device-width: 1024px) 
    {
        margin: 1%;
        right: 1px;
        font-size: 1rem;
        padding: 10%;
        width: 100%;
    }
`

function BotonNavigate({ 
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

export default BotonNavigate;