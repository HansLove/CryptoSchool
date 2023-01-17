import React from 'react'
import Text from '../Texto/Text';
import Link from '../link/Link'
import Image from "../../componentes/imagen/Image";

function Element({date, title, description, 
    linkText, linkHref, 
    image=''
}) {
    return (
        <li>
            <div className='element-content'>
                <Text text={date} fontSize={"1rem"} textColor={"white"} margin={"0"} />
                <Text text={title} fontSize={"40px"} fontWeight={"bold"} textColor={"white"} margin={"0 0 16px 0"} />
                <Text text={description}
                    fontSize={"1rem"}
                    textColor={"white"}
                    margin={"0 0 16px 0"}
                />
                <Link text={linkText} href={linkHref} fontSize={"1rem"} textColor={"#3B37FF"} margin={"0"} />
            </div>
            
            {image!=''&&
            <div className='element-image'>
                <Image src={image} alt={"bitcoin-image"} width={"24rem"} height={"auto"} />
            </div>}
        </li>
    )
}

export default Element