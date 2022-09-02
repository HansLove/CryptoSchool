import React from "react";
import styled from "styled-components";

const Paragraph = styled.p`
    font-size:${props => props.fontSize};
    font-weight:${props => props.fontWeight};
    color:${props => props.textColor};
    margin:${props => props.margin};
    overflow: auto;
`

function Text({text, fontSize, fontWeight, textColor, margin}){

    return(
        <Paragraph
            fontSize={fontSize}
            fontWeight={fontWeight}
            textColor={textColor}
            margin={margin}
            dangerouslySetInnerHTML={{__html: text}}
        />
           

    )
}

export default Text;