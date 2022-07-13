import React from "react";
import styled from "styled-components";

const Button = styled.button`
    text-decoration:none;
    cursor:pointer;
    font-size:${props => props.fontSize};
    font-weight:${props => props.fontWeight};
    color:${props => props.textColor};
    background-color:${props => props.buttonColor};
    border:${props => props.borderButton};
    border-radius:${props => props.borderRadius};
    margin:${props => props.margin};
    padding:${props => props.padding};
`

function BotonLink({ text, fontSize, fontWeight, buttonLink, textColor, buttonColor, borderButton, borderRadius, margin, padding }) {


    return (
        <a href={buttonLink}>
            <Button
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
        </a>
    )

}

export default BotonLink;