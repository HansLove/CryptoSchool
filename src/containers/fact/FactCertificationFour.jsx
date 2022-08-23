import React from 'react'
import Text from "../../componentes/Texto/Text";

import './estilo.css';
import Image from '../../componentes/imagen/Image';
import illustration from "../../componentes/image/illustration-fact-cert-four.svg";
import ListElement from '../../componentes/list/ListElement';

import icon from "../../componentes/image/blockchain-icon.svg";

function FactCertificationFour({ headingText, title, dataCards, image }) {
    return (
        <div className='fact-cert-container-four'>
            <div className='fact-cert-two-title'>
                <Text text={"Lorem ipsum dolor"} fontSize={"1.5rem"} textColor={"snow"} margin={"0"} fontWeight={"bold"} />
                <Text text={"Lorem ipsum dolor sit amet"} fontSize={"4rem"} textColor={"white"} margin={"0"} />

                <div className='fact-four-content-cards'>
                    <ListElement
                        icon={icon}
                        iconWidth="2rem"
                        iconHeight="auto"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />

                    <ListElement
                        icon={icon}
                        iconWidth="2rem"
                        iconHeight="auto"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />

                    <ListElement
                        icon={icon}
                        iconWidth="2rem"
                        iconHeight="auto"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />

                    <ListElement
                        icon={icon}
                        iconWidth="2rem"
                        iconHeight="auto"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />

                    <ListElement
                        icon={icon}
                        iconWidth="2rem"
                        iconHeight="auto"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />

                </div>
            </div>

            
                
            <Image src={illustration} alt={"bitcoin-image"} width={"26rem"} height={"auto"} />

       
        </div>
    )
}

export default FactCertificationFour