import React from "react";
import styled from "styled-components";

const A = styled.a`
    font-size:${props => props.fontSize};
    font-weight:${props => props.fontWeight};
    color:${props => props.textColor};
    margin:${props => props.margin};
`

function Link({text, href, fontSize, fontWeight, textColor, margin}){

    return(
        <A
            fontSize={fontSize}
            href={href}
            fontWeight={fontWeight}
            textColor={textColor}
            margin={margin}
        >
            {text}
        </A>

    )
}

export default Link;