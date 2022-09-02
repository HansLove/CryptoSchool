import React from 'react'
import {useNavigate} from 'react-router-dom';
import Image from '../imagen/Image'
import Text from '../Texto/Text'
import loactionIcon from '../image/location-icon.svg'
import BotonNavigate from '../Boton/BotonNavigate'

import './estilo.css'

function CardJobBank({id, userImage, userName, userPosition, userExperience, userCardDescription, userLocation}) {
    const navigate = useNavigate();
    
    const onClickContact = () => {
        navigate(`/user-profile/${id}`);
    }
    
    return (
        <div className='card-job-container'>
            <div className='user-info-g'>
                <div className='user-image'>
                    <Image src={userImage} alt={"profile-photo"} width={"5rem"} height={"auto"} borderRadius={"50%"} />
                </div>

                <div className='user-info'>
                    <Text text={userName} fontSize={"26px"} textColor={"white"} margin={"0"} />
                    <Text text={userPosition} fontSize={"18px"} textColor={"white"} margin={"0"} />
                    
                    <Text 
                    text={userExperience} fontSize={"14px"} textColor={"white"} margin={"10px 0 0"} />
                </div>
            </div>

            <Text text={userCardDescription} fontSize={"14px"} textColor={"white"} margin={"20px 0 0"} />

            <div className='location'>
                <Image src={loactionIcon} alt={"location"} width={"18px"} height={"auto"} borderRadius={"5px"} margin={"0 10px 0 0"}/>
                <Text text={userLocation} fontSize={"14px"} textColor={"white"} margin={"0"} />
            </div>

            <BotonNavigate
                onClick={onClickContact}
                text={"Contact"}
                fontSize={"16px"}
                fontWeight={"500"}
                textColor={"white"}
                buttonColor={"#3B37FF"}
                borderButton={"none"}
                borderRadius={"1rem"}
                margin={"26px 0 0"}
                padding={"20px 28px"}
            />

        </div>
    )
}

export default CardJobBank