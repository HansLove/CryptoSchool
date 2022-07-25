import React from 'react'
import Text from "../../componentes/Texto/Text";
import iconOne from "../../componentes/image/graphic.svg"
import iconTwo from "../../componentes/image/wallet.svg"
import iconThree from "../../componentes/image/chat.svg"
import iconFour from "../../componentes/image/two_persons.svg"

import './estilo.css'
import CardImageText from '../../componentes/card/CardImageText';

function FactDeccertThree() {
    return (
        <div className='fact-container-three'>
            <div className='fact-title'>
                <Text text={"What we are doing?"} fontSize={"1.5rem"} textColor={"snow"} margin={"0"} fontWeight={"bold"} />
                <Text text={"Market Contributions"} fontSize={"4rem"} textColor={"white"} margin={"0"} />

                <Text text={"Thanks to the distributed and indestructible nature of NFTs, we are using these assets for the following activities."}
                    fontSize={"20px"}
                    textColor={"white"}
                    margin={"2rem 12vw"}
                />
            </div>

            <div className='fact-content-cards'>
                <CardImageText
                    border={"1px solid white"}
                    borderRadius={"10px"}
                    padding={"60px 30px"}
                    image={iconOne}
                    imageHeight={"3.6rem"}
                    title={"Organize"}
                    titleFontSize={"26px"}
                    textContent={"Users by scales of knowledge."}
                    textFontSize={"18px"}
                />

                <CardImageText
                    border={"1px solid white"}
                    borderRadius={"10px"}
                    padding={"60px 30px"}
                    image={iconTwo}
                    imageHeight={"3.6rem"}
                    title={"Job bank"}
                    titleFontSize={"26px"}
                    textContent={"Semi-descentralized work and skills database for those who are looking for a worker profile."}
                    textFontSize={"18px"}
                />

                <CardImageText
                    border={"1px solid white"}
                    borderRadius={"10px"}
                    padding={"60px 30px"}
                    image={iconThree}
                    imageHeight={"3.6rem"}
                    title={"Adaptable"}
                    titleFontSize={"26px"}
                    textContent={"Adapt the courses to the demand of our users based on the digital assets of their wallets."}
                    textFontSize={"18px"}
                />

                <CardImageText
                    border={"1px solid white"}
                    borderRadius={"10px"}
                    padding={"60px 30px"}
                    image={iconFour}
                    imageHeight={"3.6rem"}
                    title={"Human Capital"}
                    titleFontSize={"26px"}
                    textContent={"Natural incetive to create and improve human skills."}
                    textFontSize={"18px"}
                />

            </div>

        </div>
    )
}

export default FactDeccertThree