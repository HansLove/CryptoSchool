import React from 'react'
import Text from "../../componentes/Texto/Text";
import Image from "../../componentes/imagen/Image";
import './estilo.css'
import illustration from "../../componentes/image/eddi.svg"


function FactDeccertFour() {
    return (
        <div className='fact-container-four'>
            <div className='fact-title'>
                <Text text={"Moneda Nativa"} fontSize={"1.5rem"} textColor={"#3B37FF"} margin={"0"} fontWeight={"bold"} />
                <Text text={"$EDDI"} fontSize={"4rem"} textColor={"white"} margin={"0"} />

                <Text text={"Que da poder de voto dentro de nuestro ecosistema y un ingreso pasivo para todos los participantes."}
                    fontSize={"20px"}
                    textColor={"white"}
                    margin={"2rem 12vw"}
                />
            </div>

            <Image src={illustration} alt={"illustration"} width={"auto"} height={"auto"}/>

        </div>
    )
}

export default FactDeccertFour