import React, { useEffect, useState } from "react";
import BotonTwo from "../../componentes/Boton/BotonTwo";
import Image from "../../componentes/imagen/Image";
import Text from "../../componentes/Texto/Text";
import UpdateInfoForm from "../form/UpdateInfoForm";
import profilePhoto from "../../componentes/image/profile-photo-example.jpg"
import './estilo.css'
import axios from "axios";
import { getUserData } from "../../componentes/ConexionAxios/ConexionAxios";
import { actulizarCuenta } from "../../componentes/blockchain/Blockchain";


function ProfileInfo(){

    const [editMode, seteditMode] = useState(false)
    const [userData, setUserData] = useState({name:'',description:'',image:profilePhoto,
    occupation:''})
    const [image, setImage] = useState(profilePhoto)


    useEffect(async() => {
      
        let data=await getUserData(await actulizarCuenta())
        setUserData(data)
        //user has no registry in the database, go to edit mode 
        if(!data)seteditMode(true)
        //user doesnt have any image as a file
        if(!data.image=='')setImage(data.image)
    }, [])
    

    return(
        <div className="profile-info-container">
            
            <div className="account-info">
                {!editMode?
                <>
                    <div className="account-photo">
                        <Image src={image} 
                        alt={"profile-photo"} 
                        width={"26rem"} height={"auto"} borderRadius={"2rem"}/>

                    </div>

                    <div className="account-description">
                        <Text text={userData.occupation} fontSize={"1.5rem"} textColor={"white"} margin={"4rem 0 0"}/>
                        <Text text={userData.name} fontSize={"4rem"} textColor={"white"} margin={"0"}/>
                        <div className="account-about-text">
                            <Text text={userData.description} 
                                fontSize={"20px"} 
                                textColor={"white"}
                                margin={"2rem 0"}
                            />
                        </div>
                    </div>
                </>
                :
                <UpdateInfoForm/>
                }

            </div>


            <BotonTwo 
                onClick={()=>seteditMode(!editMode)}
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

        
    )
}

export default ProfileInfo;