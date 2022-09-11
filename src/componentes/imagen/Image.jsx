import React from "react";
import styled from "styled-components";



function Image({src, alt, width, height,borderRadius, margin,cellphoneWidth='90%' }){

    const Img = styled.img`
        width:${props => props.width};
        height:${props => props.height};
        border-radius:${props => props.borderRadius};
        margin:${props => props.margin};
        @media 
        (min-device-width: 300px) 
        and (max-device-width: 1024px) 
        {
            width: ${cellphoneWidth};
            
        }
`

    return(
        <Img 
        src={src} 
        alt={alt} 
        width={width} 
        height={height} borderRadius={borderRadius} margin={margin} />
    )
}

export default Image;