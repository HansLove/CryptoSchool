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
                <Text text={"Lorem ipsum dolor"} fontSize={"1.5rem"} textColor={"#3B37FF"} margin={"0"} fontWeight={"bold"} />
                <Text text={"Aportaciones al Mercado"} fontSize={"4rem"} textColor={"white"} margin={"0"} />

                <Text text={"Gracias a la naturaleza distribuida e indestructible de los NFT, estamos utilizando estos activos para las siguientes actividades"}
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
                    title={"Organizar"}
                    titleFontSize={"26px"}
                    textContent={"a los usuarios por escalas de conocimiento."}
                    textFontSize={"18px"}
                />

                <CardImageText
                    border={"1px solid white"}
                    borderRadius={"10px"}
                    padding={"60px 30px"}
                    image={iconTwo}
                    imageHeight={"3.6rem"}
                    title={"Bolsa de Trabajo"}
                    titleFontSize={"26px"}
                    textContent={"semi-descentralizada para privados."}
                    textFontSize={"18px"}
                />

                <CardImageText
                    border={"1px solid white"}
                    borderRadius={"10px"}
                    padding={"60px 30px"}
                    image={iconThree}
                    imageHeight={"3.6rem"}
                    title={"Adaptación"}
                    titleFontSize={"26px"}
                    textContent={"adaptar los cursos a la demanda de nuestros usuarios basandonos en los activos digitales de sus wallets."}
                    textFontSize={"18px"}
                />

                <CardImageText
                    border={"1px solid white"}
                    borderRadius={"10px"}
                    padding={"60px 30px"}
                    image={iconFour}
                    imageHeight={"3.6rem"}
                    title={"Captial Humano"}
                    titleFontSize={"26px"}
                    textContent={"Generacion natural de capital humano."}
                    textFontSize={"18px"}
                />

            </div>

        </div>
    )
}

export default FactDeccertThree