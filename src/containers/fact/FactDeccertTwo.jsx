import React from 'react'
import Image from "../../componentes/imagen/Image";
import Text from "../../componentes/Texto/Text";
import iconOne from "../../componentes/image/star.svg"
import iconTwo from "../../componentes/image/clock.svg"
import iconThree from "../../componentes/image/bomb.svg"
import iconFour from "../../componentes/image/data_base.svg"
import iconFive from "../../componentes/image/group_people.svg"
import iconSix from "../../componentes/image/tree.svg"
import './estilo.css'

function FactDeccertTwo() {
    return (
        <div className='fact-container-two'>
            <div className='fact-title'>
                <Text text={"Lorem ipsum dolor"} fontSize={"1.5rem"} textColor={"#3B37FF"} margin={"0"} fontWeight={"bold"}/>
                <Text text={"Prueba de Conocimiento"} fontSize={"4rem"} textColor={"white"} margin={"0"} />
            </div>

            <div className='fact-content'>

               
                    <div className='icon-text-container'>

                        <div className='element-icon-text'>
                            <Image src={iconOne} alt={"illustration"} width={"auto"} height={"4rem"} margin={"0 3rem 0 0"}/>
                            <div className='icon-text-content'>
                                <Text text={"NFT’S"} fontSize={"26px"} textColor={"white"} margin={"0 0 10px"} />
                                <Text text={"Entes digitales descentralizados"} fontSize={"18px"} textColor={"white"} margin={"0"} />
                            </div>
                        </div>

                        <div className='element-icon-text'>
                            <Image src={iconTwo} alt={"illustration"} width={"auto"} height={"4rem"} margin={"0 3rem 0 0"}/>
                            <div className='icon-text-content'>
                                <Text text={"Generadores de Ingreso Pasivo"} fontSize={"26px"} textColor={"white"} margin={"0 0 10px"} />
                                <Text text={"Each member of our team has at least 5 years of legal experience."} fontSize={"18px"} textColor={"white"} margin={"0"} />
                            </div>
                        </div>

                        <div className='element-icon-text'>
                            <Image src={iconThree} alt={"illustration"} width={"auto"} height={"4rem"} margin={"0 3rem 0 0"}/>
                            <div className='icon-text-content'>
                                <Text text={"Indestructibles"} fontSize={"26px"} textColor={"white"} margin={"0 0 10px"} />
                                
                            </div>
                        </div>
                        
                        <div className='element-icon-text'>
                            <Image src={iconFour} alt={"illustration"} width={"auto"} height={"4rem"} margin={"0 3rem 0 0"}/>
                            <div className='icon-text-content'>
                                <Text text={"Adaptables a otras bases de datos"} fontSize={"26px"} textColor={"white"} margin={"0 0 10px"} />
                             
                            </div>
                        </div>

                        <div className='element-icon-text'>
                            <Image src={iconFive} alt={"illustration"} width={"auto"} height={"4rem"} margin={"0 3rem 0 0"}/>
                            <div className='icon-text-content'>
                                <Text text={"Flexibility"} fontSize={"26px"} textColor={"white"} margin={"0 0 10px"} />
                                <Text text={"This method allows us to achieve success in problems of all levels."} fontSize={"18px"} textColor={"white"} margin={"0 6vw 0 0"} />
                            </div>
                        </div>

                        <div className='element-icon-text'>
                            <Image src={iconSix} alt={"illustration"} width={"auto"} height={"4rem"} margin={"0 3rem 0 0"}/>
                            <div className='icon-text-content'>
                                <Text text={"Incentivo Natural"} fontSize={"26px"} textColor={"white"} margin={"0 0 10px"} />
                                <Text text={"a los estudiantes para expandir su campo de conocimiento y diversificar sus areas de conocimiento."} fontSize={"18px"} textColor={"white"} margin={"0"} />
                            </div>
                        </div>
                        

                    </div>
         

            </div>

        </div>
    )
}

export default FactDeccertTwo