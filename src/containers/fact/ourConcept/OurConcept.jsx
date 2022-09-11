import React from 'react'
import iconOne from "./image/star.svg"
import iconTwo from "./image/clock.svg"
import iconThree from "./image/bomb.svg"
import iconFour from "./image/data_base.svg"
import iconFive from "./image/group_people.svg"
import iconSix from "./image/tree.svg"
import './estilo.css'
import Text from '../../../componentes/Texto/Text'
import Image from '../../../componentes/imagen/Image'


export default function OurConcept() {
    return (
        <div className='fact-container-two'>
            
            <div className='fact-title'>
                <Text text={"Our concept"} fontSize={"1.5rem"} textColor={"snow"} margin={"0"} fontWeight={"bold"}/>
                <Text text={"Proof of Learning"} fontSize={"4rem"} textColor={"white"} margin={"0"} />
            </div>

            <div className='fact-content'>

               
                    <div className='icon-text-container'>

                        <div className='element-icon-text'>
                            <Image src={iconOne} alt={"illustration"} width={"auto"} height={"4rem"} margin={"0 3rem 0 0"}/>
                            <div className='icon-text-content'>
                                <Text text={"Utility NFT’S"} fontSize={"26px"} textColor={"white"} margin={"0 0 10px"} />
                                <Text text={"Using the ERC-721 standar fully focus on utility."} fontSize={"18px"} textColor={"white"} margin={"0"} />
                            </div>
                        </div>

                        <div className='element-icon-text'>
                            <Image src={iconTwo} alt={"illustration"} width={"auto"} height={"4rem"} margin={"0 3rem 0 0"}/>
                            <div className='icon-text-content'>
                                <Text text={"Passive Income generator"} fontSize={"26px"} textColor={"white"} margin={"0 0 10px"} />
                                <Text text={"DEFI magic is in our protocol with the goal of add distribution to our token hodling."} 
                                fontSize={"18px"} textColor={"white"} margin={"0"} />
                            </div>
                        </div>

                        <div className='element-icon-text'>
                            <Image src={iconThree} alt={"illustration"} width={"auto"} height={"4rem"} margin={"0 3rem 0 0"}/>
                            <div className='icon-text-content'>
                                <Text text={"Indestructibles"} fontSize={"26px"} textColor={"white"} margin={"0 0 10px"} />
                                <Text text={"Once our NFTs are in the blockchain, they become almost indestructibles."} 
                                fontSize={"18px"} textColor={"white"} margin={"0 0 10px"} />

                            </div>
                        </div>
                        
                        <div className='element-icon-text'>
                            <Image src={iconFour} alt={"illustration"} width={"auto"} height={"4rem"} margin={"0 3rem 0 0"}/>
                            <div className='icon-text-content'>
                                <Text text={"Adaptable"} fontSize={"26px"} textColor={"white"} margin={"0 0 10px"} />
                                <Text text={"Scalabe and easy to connect with another third party databases."} 
                                fontSize={"18px"} textColor={"white"} margin={"0 0 10px"} />
                             
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
                                <Text text={"Natural Incentive"} fontSize={"26px"} textColor={"white"} margin={"0 0 10px"} />
                                <Text text={"Students to expand their field of knowledge and diversify their areas of knowledge."} fontSize={"18px"} textColor={"white"} margin={"0"} />
                            </div>
                        </div>
                        

                    </div>
         

            </div>

        </div>
    )
}

