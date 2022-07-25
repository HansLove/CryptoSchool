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

                <Text text={"Why DECCERT?"} 
                fontSize={"1.5rem"} 
                textColor={"snow"} margin={"0"} fontWeight={"bold"}/>
                <Text text={"The problem"} fontSize={"4rem"} textColor={"white"} margin={"0"} />
                
                <Text text={
                    "In the area prior to blockchain technology, education has had few significant advances in recent decades. With this protocol, we seek to add value with blockchain technology. </br></br>"
                    + "Universities, Academies and professors must have the latest generation technology at hand to be able to issue their incorruptible certificates within an ecosystem like Deccert."}
                    fontSize={"20px"}
                    textColor={"white"}
                    margin={"2rem 0"}
                />


            </div>

        </div>
    )
}

export default FactDeccertOne