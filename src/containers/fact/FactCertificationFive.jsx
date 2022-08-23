import React from 'react'
import Text from "../../componentes/Texto/Text";

import {useNavigate} from 'react-router-dom';
import BotonNavigate from '../../componentes/Boton/BotonNavigate';

import './estilo.css'

function FactCertificationFive({ headingText, title, dataCards, image }) {

    const navigate = useNavigate()
    
    const onClickContact = () => {
        navigate(`/`);
    }

    return (
        <div className='fact-cert-container-five'>
            <div className='fact-cert-content-five'>
                <Text text={"Lorem ipsum dolor sit amet consectetur adipiscing elit"} fontSize={"4rem"} textColor={"white"} margin={"0"} />
                <div className='fact-cert-button-five'>
                    <BotonNavigate
                        onClick={onClickContact}
                        text={"Lorem ipsum dolor"}
                        fontSize={"16px"}
                        fontWeight={"500"}
                        textColor={"white"}
                        buttonColor={"black"}
                        borderButton={"none"}
                        borderRadius={"1rem"}
                        margin={"30px 0 0"}
                        padding={"20px 28px"}
                    />

                </div>

            </div>

        </div>
    )
}

export default FactCertificationFive