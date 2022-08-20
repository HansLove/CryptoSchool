import React from 'react'
import './estilo.css'
import Text from '../Texto/Text';
import Image from "../../componentes/imagen/Image";



function ListElement({icon, iconWidth, iconHeight, text}) {
  return (
    <div className='list-element'>
        <Image src={icon} alt={"icon"} width={iconWidth} height={iconHeight} />
        <Text 
            text={text}
            fontSize={"20px"}
            textColor={"white"}
            margin={"0 0 30px 20px"}
        />
    </div>
  )
}

export default ListElement