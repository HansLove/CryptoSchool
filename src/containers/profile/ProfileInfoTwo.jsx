import React from "react";
import {useParams} from 'react-router-dom';
import Image from "../../componentes/imagen/Image";
import Text from "../../componentes/Texto/Text";
import profilePhoto from "../../componentes/image/profile-photo-example.jpg"
import './estilo.css'


function ProfileInfoTwo(){

    const params = useParams()
    
    return(
        <div className="profile-info-two-container">
            
            <div className="account-info">
               
                    <div className="account-photo">
                        <Image src={profilePhoto} 
                        alt={"profile-photo"} 
                        width={"26rem"} height={"auto"} borderRadius={"2rem"}/>

                    </div>

                    <div className="account-description">
                        <Text text={"Frontend Developer"} fontSize={"1.5rem"} textColor={"white"} margin={"4rem 0 0"}/>
                        <Text text={`Jhon Smith ${params.idUser}`} fontSize={"4rem"} textColor={"white"} margin={"0"}/>
                        <div className="account-about-text">
                            <Text text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} 
                                fontSize={"20px"} 
                                textColor={"white"}
                                margin={"2rem 0"}
                            />
                        </div>
                    </div>
               

            </div>

        </div>

        
    )
}

export default ProfileInfoTwo;