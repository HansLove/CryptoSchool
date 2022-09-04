import React from 'react'
import Text from "../../componentes/Texto/Text";
import iconOne from "../../componentes/image/graphic.svg"
import iconTwo from "../../componentes/image/wallet.svg"
import iconThree from "../../componentes/image/chat.svg"
import iconFour from "../../componentes/image/two_persons.svg"

import './estilo.css'
import CardImageText from '../../componentes/card/CardImageText';

function FactCertificationOne({
    type,
    headingText, title, description, dataCards}) {

    return (
        <div className='fact-container-cert-one'>
            <div className='fact-title'>
                <Text text={"Lorem ipsum dolor"} fontSize={"1.5rem"} textColor={"snow"} margin={"0"} fontWeight={"bold"} />
                <Text text={"Lorem ipsum dolor sit amet"} fontSize={"4rem"} textColor={"white"} margin={"0"} />

                <Text text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
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
                    title={"Lorem ipsum"}
                    titleFontSize={"26px"}
                    textContent={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"}
                    textFontSize={"18px"}
                />

                <CardImageText
                    border={"1px solid white"}
                    borderRadius={"10px"}
                    padding={"60px 30px"}
                    image={iconTwo}
                    imageHeight={"3.6rem"}
                    title={"Lorem ipsum"}
                    titleFontSize={"26px"}
                    textContent={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"}
                    textFontSize={"18px"}
                />

                <CardImageText
                    border={"1px solid white"}
                    borderRadius={"10px"}
                    padding={"60px 30px"}
                    image={iconThree}
                    imageHeight={"3.6rem"}
                    title={"Lorem ipsum"}
                    titleFontSize={"26px"}
                    textContent={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"}
                    textFontSize={"18px"}
                />

                <CardImageText
                    border={"1px solid white"}
                    borderRadius={"10px"}
                    padding={"60px 30px"}
                    image={iconFour}
                    imageHeight={"3.6rem"}
                    title={"Lorem ipsum"}
                    titleFontSize={"26px"}
                    textContent={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"}
                    textFontSize={"18px"}
                />

            </div>

        </div>
    )
}

export default FactCertificationOne