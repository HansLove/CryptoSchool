import React from 'react'
import Image from "../../componentes/imagen/Image";
import Text from "../../componentes/Texto/Text";
import illustration from "../../componentes/image/the_problem.svg"
import './estilo.css'

function FactDeccertOne() {
    return (
        <div className='fact-container-one'>
            <div className='image-container'>
                <Image src={illustration} alt={"illustration"} width={"34vw"} height={"auto"} margin={"0 6rem 0 0"}/>

            </div>

            <div className='fact-content'>

                <Text text={"Lorem ipsum dolor"} fontSize={"1.5rem"} textColor={"#3B37FF"} margin={"0"} fontWeight={"bold"}/>
                <Text text={"El problema"} fontSize={"4rem"} textColor={"white"} margin={"0"} />
                
                <Text text={
                    "En el area previa a la tecnologia blockchain, la educacion ha tenido pocos avances en las ultimas decadas, significativos .Con este protocolo, buscamos aportar valor con la tecnologia blockchain. </br></br>"
                    + "Las Universidades, Academias y profesores deben tener a la mano tecnologia de ultima generacion para poder emitir sus certificados incorrompibles dentro de un ecosistema como Deccert."}
                    fontSize={"20px"}
                    textColor={"white"}
                    margin={"2rem 0"}
                />


            </div>

        </div>
    )
}

export default FactDeccertOne