import React from 'react'
import Text from "../../componentes/Texto/Text";
import {useNavigate} from 'react-router-dom';
import BotonNavigate from '../../componentes/Boton/BotonNavigate';
import './estilo.css'

function FactCertificationFive({ 
    background,
    subtitle,
    headingText, title, dataCards, image }) {

    const navigate = useNavigate()
    
    const onClickContact = () => {
        navigate(`/`);
    }

    return (
        <div 
        className='fact-cert-container-five'>
            
            <div 
            style={{background:background}}
            className='fact-cert-content-five'>

                <Text text={subtitle} 
                fontSize={"3.7rem"} 
                fontSize2='1.5rem'
                textColor={"black"} 
                margin={"0"} />

                <div className='fact-cert-button-five'>
                    <BotonNavigate
                        onClick={onClickContact}
                        text={"START"}
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