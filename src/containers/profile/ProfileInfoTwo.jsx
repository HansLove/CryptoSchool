import React from "react";
import {useParams} from 'react-router-dom';
import Image from "../../componentes/imagen/Image";
import Text from "../../componentes/Texto/Text";
import profilePhoto from "../../componentes/image/profile-photo-example.jpg"
import './estilo.css'


function ProfileInfoTwo(){

    const params = useParams()

    const array=[
        {
            image:'https://firebasestorage.googleapis.com/v0/b/taloon-2fb00.appspot.com/o/Fotos%20personas%2FAaron_1.png?alt=media&token=74377691-c115-4881-aa09-138a7eba2b0d',

        }
    ]

    
    return(
        <div className="profile-info-two-container">
            
            <div className="account-info">
               
                    <div className="account-photo">
                        <Image 
                        src={"https://firebasestorage.googleapis.com/v0/b/taloon-2fb00.appspot.com/o/Fotos%20personas%2FAaron_1.png?alt=media&token=74377691-c115-4881-aa09-138a7eba2b0d"} 
                        alt={"profile-photo"} 
                        width={"26rem"} 
                        height={"auto"} 
                        borderRadius={"2rem"}/>

                    </div>

                    <div className="account-description">
                        <Text text={"Frontend Developer"} fontSize={"1.5rem"} textColor={"white"} margin={"4rem 0 0"}/>
                        <Text 
                        text={`${params.name}`} 
                        fontSize={"4rem"} 
                        textColor={"white"} 
                        margin={"0"}/>
                        <div className="account-about-text">
                            <Text text={"Blockchain developer and Bitcoiner. Focus on Solidity,Rust,Bitcoin nodes,Data bases, React js "} 
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