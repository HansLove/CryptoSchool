import React from "react";
import styled from "styled-components";


function Text({text, fontSize, 
    fontWeight, 
    textColor, margin,
    fontSize2='1.2rem',
    margin2='1%'}){

    const Paragraph = styled.p`
        font-size:${props => props.fontSize};
        font-weight:${props => props.fontWeight};
        color:${props => props.textColor};
        margin:${props => props.margin};
        overflow: auto;
      

        @media 
        (min-device-width: 300px) 
        and (max-device-width: 1024px) 
        {
            font-size: ${fontSize2};
            margin: ${margin2};
            
        }
`

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