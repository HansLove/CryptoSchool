import React from 'react'
import Text from "../../componentes/Texto/Text";

import './estilo.css'
import CardNumberText from '../../componentes/card/CardNumberText';
import Image from '../../componentes/imagen/Image';
import illustration from "../../componentes/image/illustrationTwo.svg"


function FactCertificationOne({ headingText, title, dataCards, image }) {
    return (
        <div className='fact-container-three'>
            <div className='fact-cert-two-title'>
                <Text text={"Lorem ipsum dolor"} fontSize={"1.5rem"} textColor={"snow"} margin={"0"} fontWeight={"bold"} />
                <Text text={"Lorem ipsum dolor sit amet"} fontSize={"4rem"} textColor={"white"} margin={"0"} />

            </div>

            <div className='fact-two-content-conatiner'>
                <div className='fact-two-content-cards'>
                    <CardNumberText
                        border={"1px solid #3B37FF"}
                        padding={"30px 10px"}
                        number="001"
                        textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
                    />

                    <CardNumberText
                        border={"1px solid #3B37FF"}
                        padding={"30px 10px"}
                        number="002"
                        textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
                    />

                    <CardNumberText
                        border={"1px solid #3B37FF"}
                        padding={"30px 10px"}
                        number="003"
                        textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
                    />

                    <CardNumberText
                        border={"1px solid #3B37FF"}
                        padding={"30px 10px"}
                        number="004"
                        textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
                    />


                </div>

                <Image src={illustration} alt={"bitcoin-image"} width={"26rem"} height={"auto"} />


            </div>

        </div>
    )
}

export default FactCertificationOne