import React, { useEffect, useState } from "react";
import BotonTwo from "../../componentes/Boton/BotonTwo";
import Image from "../../componentes/imagen/Image";
import Text from "../../componentes/Texto/Text";
import UpdateInfoForm from "../form/UpdateInfoForm";
import profilePhoto from "../../componentes/image/fondo_2.png"
import { getUserData } from "../../componentes/ConexionAxios/ConexionAxios";
import { CheckConexion } from "../../blockchain/Blockchain";
import './estilo.css'
import { FaUserCircle } from "react-icons/fa";

function ProfileInfo(){

    const [editMode, seteditMode] = useState(false)
    const [userData, setUserData] = useState({
        name:'',
        description:'',
        image:profilePhoto,
        occupation:''
    })
    const [image, setImage] = useState(profilePhoto)
    const [isConnected, setIsConnected] = useState(false)
    const [loaded, setLoaded] = useState(false)


    useEffect(async() => {
        let res_conexion=await CheckConexion()
        let data=await getUserData()
        setUserData(data)
        setIsConnected(res_conexion.connect)
        //el usuario no tiene nada registrado en la base de datos
        if(!data)seteditMode(true)
        //user doesnt have any image as a file
        if(!data.image=='')setImage(data.image)
        setLoaded(true)

        return()=>{
            setLoaded(false)
        }
    }, [])


    return(
        <div className="profile-info-container">
            {isConnected?
            <>
            <div className="account-info">
                {!editMode?
                <>
                    <div className="account-photo">
                        {/* <Image 
                        src={image} 
                        alt={"profile-photo"} 
                        width={"26rem"} height={"auto"} borderRadius={"2rem"}/> */}
                        <FaUserCircle size={400}/>

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
                //Modo edicion activado
                <UpdateInfoForm/>
                }

            </div>

            <BotonTwo 
                onClick={()=>seteditMode(!editMode)}
                text={!editMode?"Edit":"Go back"} 
                fontSize={"18px"}
                seteditMode={seteditMode}
                editMode={editMode}
                textColor={"white"}
                buttonColor={"black"}
                borderButton={"1px solid #FFFFFF"}
                borderRadius={"26px"}
                padding={"14px 40px"}
                margin={"10px 0"}/>
            </>
            :
            //El usuario no esta conectado en Metamask
            loaded&&
            <>
            </>
            }

        </div>
    )
}

export default ProfileInfo;