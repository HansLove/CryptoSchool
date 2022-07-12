import React from "react";
import styled from "styled-components";

const Img = styled.img`
    width:${props => props.width};
    height:${props => props.height};
    border-radius:${props => props.borderRadius};
    margin:${props => props.margin};
`

function Image({src, alt, width, height,borderRadius, margin }){

    return(
        <Img src={src} alt={alt} width={width} height={height} borderRadius={borderRadius} margin={margin} />
    )
}

export default Image;