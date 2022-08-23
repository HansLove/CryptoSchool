import React from 'react'
import Image from "../../componentes/imagen/Image";
import Text from "../../componentes/Texto/Text";
import illustration from "../../componentes/image/illustration-fact-three.svg"
import './estilo.css'

function FactCertificationThree() {
    return (
        <div className='fact-container-cert-three'>
            <div className='image-container'>
                <Image src={illustration} alt={"illustration"} width={"38vw"} height={"auto"} margin={"0 4rem 0 0"}/>

            </div>

            <div className='fact-content'>

                <Text text={"Lorem ipsum dolor"} 
                fontSize={"1.5rem"} 
                textColor={"snow"} margin={"0"} fontWeight={"bold"}/>
                <Text text={"Lorem ipsum"} fontSize={"4rem"} textColor={"white"} margin={"0"} />
                
                <Text text={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    fontSize={"20px"}
                    textColor={"white"}
                    margin={"2rem 0"}
                />


            </div>

        </div>
    )
}

export default FactCertificationThree