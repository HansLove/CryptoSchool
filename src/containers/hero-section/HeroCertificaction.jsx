import React from 'react'
import { useParams } from 'react-router-dom';
import Text from '../../componentes/Texto/Text';
import Link from '../../componentes/link/Link';
import Image from "../../componentes/imagen/Image";
import image from "../../componentes/image/Bitcoin_ilustration.png"
import Recycle from "../../componentes/image/recycle.svg"
import Auth from "../../componentes/image/authenticity.svg"
import Collaboration from "../../componentes/image/collaboration.svg"
import Guarantee from "../../componentes/image/group_people.svg"
import Participation from "../../componentes/image/eddi.svg"
import Education from "../../componentes/image/education.svg"

import './estilo.css'

function HeroCertificaction({
    description
}) {

    const params = useParams()

    const nameCertification = params.nameCertification.charAt(0).toUpperCase() + params.nameCertification.slice(1);

    return (
        <div className='hero-container'>
            <div className='hero-content'>
                <Text text={nameCertification} 
                fontSize={"4.5rem"} 
                textColor={"white"} 
                margin={"0 0 16px 0"} />

                <Text 
                text={description}
                fontSize={"20px"}
                textColor={"white"}
                margin={"0 0 16px 0"}
                />
                
                {/* <Link text={"Lorem ipsum dolor"} href={'/'} fontSize={"20px"} textColor={"#3B37FF"} margin={"0"} /> */}
            
            </div>

            <div className='hero-image'>
                <Image 
                src={nameCertification=='Recycling'?Recycle:
                nameCertification=='Educational'?Education:
                nameCertification=='Participation'?Participation:
                nameCertification=='Charity'?Collaboration:
                nameCertification=='Authenticity'?Auth:
                nameCertification=='Guarantee'?Guarantee
                :image}/>
            
            </div>
        </div>
    )
}

export default HeroCertificaction