import React from 'react'
import Text from "../../componentes/Texto/Text";
import Image from "../../componentes/imagen/Image";
import './estilo.css'
import illustration from "../../componentes/image/eddi.svg"


function FactDeccertFour() {
    return (
        <div className='fact-container-four'>
            <div className='fact-title'>
                <Text text={"Native Token"} 
                fontSize={"1.5rem"} 
                fontSize2={"1.5rem"}
                textColor={"snow"} 
                margin={"0"} fontWeight={"bold"} />

                <Text 
                text={"$EDDI"} 
                fontSize={"4rem"} 
                fontSize2='3rem'
                textColor={"goldenrod"} 
                margin={"0"} />

                <Text 
                text={"That gives voting power within our ecosystem and a passive income for all participants."}
                fontSize={"20px"}
                fontSize2='1.4rem'
                textColor={"white"}
                margin={"2rem 12vw"}
                />
            </div>

            <Image src={illustration} alt={"illustration"} width={"auto"} height={"auto"}/>

        </div>
    )
}

export default FactDeccertFour