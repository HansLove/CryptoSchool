import React from 'react'
import Text from "../../componentes/Texto/Text";
import './estilo.css';
import Image from '../../componentes/imagen/Image';
import illustration from "../../componentes/image/illustration-fact-cert-four.svg";
import ListElement from '../../componentes/list/ListElement';
import icon from "../../componentes/image/blockchain-icon.svg";
import { GiWaterDrop } from 'react-icons/gi';

function FactCertificationFour({ 
    points=[],
    Icon,
    headingText, title, dataCards, image }) {
    return (
        <div className='fact-cert-container-four'>
            <div className='fact-cert-two-title'>
                <Text text={"Technical points"} 
                fontSize={"1.5rem"} textColor={"snow"} margin={"0"} fontWeight={"bold"} />
                <Text text={"Objectives of Deccert network"} 
                fontSize={"4rem"} textColor={"white"} margin={"0"} />

                <div className='fact-four-content-cards'>

                    {points.map((item,key)=><ListElement
                        key={key}
                        icon={icon}
                        iconWidth="2rem"
                        iconHeight="auto"
                        text={item}
                    />)}
                    

                </div>
            </div>

            
            <div style={{height:'15vh',width:'45vh'}}>
                {Icon}
            </div>
            
       
        </div>
    )
}

export default FactCertificationFour