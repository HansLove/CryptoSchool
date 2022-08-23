import React from 'react'
import { useParams } from 'react-router-dom';
import Text from '../../componentes/Texto/Text';
import Link from '../../componentes/link/Link';
import Image from "../../componentes/imagen/Image";
import image from "../../componentes/image/Bitcoin_ilustration.png"

import './estilo.css'

function HeroCertificaction() {
    const params = useParams()

    const nameCertification = params.nameCertification.charAt(0).toUpperCase() + params.nameCertification.slice(1);

    return (
        <div className='hero-container'>
            <div className='hero-content'>
                <Text text={nameCertification} fontSize={"4.5rem"} textColor={"white"} margin={"0 0 16px 0"} />
                <Text text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    fontSize={"20px"}
                    textColor={"white"}
                    margin={"0 0 16px 0"}
                />
                <Link text={"Lorem ipsum dolor"} href={'/'} fontSize={"20px"} textColor={"#3B37FF"} margin={"0"} />
            </div>

            <div className='hero-image'>
                <Image src={image} alt={"bitcoin-image"} width={"28rem"} height={"auto"} />
            </div>
        </div>
    )
}

export default HeroCertificaction