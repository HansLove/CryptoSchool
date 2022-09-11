import React from 'react'
import Image from "../../componentes/imagen/Image";
import Text from "../../componentes/Texto/Text";
import styled from "styled-components";
import './estilo.css'

const Card = styled.div`
    display:flex;
    flex-direction:column;
    border:${props => props.border};
    border-radius:${props => props.borderRadius};
    padding:${props => props.padding};
    margin:${props => props.margin};
    @media 
    (min-device-width: 300px) 
    and (max-device-width: 1024px) 
    {
        display: block;
        margin: 2%;
    }
`

function CardImageText({border, borderRadius, padding, margin, image, imageHeight, title, titleFontSize, textContent, textFontSize}) {
    return (
        <Card
            border={border}
            borderRadius={borderRadius}
            padding={padding}
            margin={margin}
        >
            <Image src={image} alt={"illustration"} width={"auto"} height={imageHeight} margin={"0 0 40px"}/>
            <div className='text-center'>
                <Text text={title} fontSize={titleFontSize} textColor={"white"} margin={"0 0 16px"} />
                <Text text={textContent} fontSize={textFontSize} textColor={"white"} margin={"0"} />
            </div>
        </Card>
    )
}

export default CardImageText