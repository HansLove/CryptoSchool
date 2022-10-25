import React from "react";
import styled from "styled-components";



function Image({
    display='block',
    onClick=()=>{},
    src, 
    alt, 
    width, 
    height,
    borderRadius, 
    margin,
    cellphoneWidth='90%' }){

    const Img = styled.img`
        display: ${display};
        width:${props => props.width};
        height:${props => props.height};
        border-radius:${props => props.borderRadius};
        margin:${props => props.margin};
        transition: all 0.5s ease-in-out;


        &:hover{
            transition: all 0.5s ease-in-out;
            z-index: 4;
            border-radius: 25%;
        }

        @media 
        (min-device-width: 300px) 
        and (max-device-width: 1024px) 
        {
            width: ${cellphoneWidth};
            
        }
`

    return(
        <Img 
        onClick={onClick}
        src={src} 
        // defaultValue={userImage}
        alt={alt} 
        width={width} 
        height={height} 
        borderRadius={borderRadius} 
        margin={margin} />
    )
}

export default Image;