import React from 'react'
import Image from "../../componentes/imagen/Image";
import Text from "../../componentes/Texto/Text";
import styled from "styled-components";
import './estilo.css'

const Card = styled.div`
    display:flex;
    flex-direction:column;
    border-top:${props => props.border};
    padding:${props => props.padding};
    margin:${props => props.margin};
`

function CardNumberText({border, padding, margin, number, textContent}) {
    return (
        <Card
            border={border}
            padding={padding}
            margin={margin}
        >
            <Text text={number} fontSize={"30px"} fontWeight={"500"} textColor={"white"} margin={"0 0 16px"} />
            
            <Text text={textContent} fontSize={"1rem"} textColor={"white"} margin={"0"} />
      
        </Card>
    )
}

export default CardNumberText