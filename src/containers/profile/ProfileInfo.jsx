import React, { useState } from "react";
import BotonTwo from "../../componentes/Boton/BotonTwo";
import Image from "../../componentes/imagen/Image";
import Text from "../../componentes/Texto/Text";
import UpdateInfoForm from "../form/UpdateInfoForm";
import profilePhoto from "../../componentes/image/profile-photo-example.jpg"
import './estilo.css'
import UserEdit from "../../componentes/UserEdit/UserEdit";

function ProfileInfo(){

    const [editMode, seteditMode] = useState(false)
    return(
        <div className="profile-info-container">
            
            
            <div className="account-info">
                {!editMode?
                <>
                    <div className="account-photo">
                        <Image src={profilePhoto} alt={"profile-photo"} width={"26rem"} height={"auto"} borderRadius={"2rem"}/>

                    </div>

                    <div className="account-description">
                        <Text text={"Blockchain Developer"} fontSize={"1.5rem"} textColor={"white"} margin={"4rem 0 0"}/>
                        <Text text={"Satoshi Nakamoto"} fontSize={"4rem"} textColor={"white"} margin={"0"}/>
                        <div className="account-about-text">
                            <Text text={
                                "With a lot of experience in software development and blockchain and looking for innovation and improvement of decentralized databases"+
                                "Specialist in python, javascript, java and rust."+
                                "Perfect command of English and Spanish."} 
                                fontSize={"20px"} 
                                textColor={"white"}
                                margin={"2rem 0"}
                            />
                        </div>
                    </div>
                </>
                :
                <UserEdit/>
                }

            </div>


            <div className="account-modifiders">
                <BotonTwo 
                    text={"Edit"} 
                    fontSize={"18px"}
                    seteditMode={seteditMode}
                    editMode={editMode}
                    textColor={"white"}
                    buttonColor={"black"}
                    borderButton={"1px solid #FFFFFF"}
                    borderRadius={"26px"}
                    padding={"14px 40px"}
                    margin={"10px 0"}
                />
            </div>


        </div>

        
    )
}

export default ProfileInfo;