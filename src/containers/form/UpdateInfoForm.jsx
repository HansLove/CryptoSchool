import React, { useEffect, useState } from "react";
import InputTwo from "../../componentes/Input/InputTwo";
import TextArea from "../../componentes/Input/TextArea";
import BotonSubmit from "../../componentes/Boton/BotonSubmit";
// import Image from "../../componentes/imagen/Image";
import Text from "../../componentes/Texto/Text";
import profilePhoto from "../../componentes/image/blockchain.png"
import { editUser, getUserData, registerUser } from "../../componentes/ConexionAxios/ConexionAxios";
import { getCurrentAccount } from "../../blockchain/Blockchain";
import {FaUserCircle} from 'react-icons/fa'
import './estilo.css'

// Funcion donde el usuario actualiza su base de datos
function UpdateInfoForm() {

    const [userData, setUserData] = useState({
        name:'',
        description:'',
        image:profilePhoto,
        occupation:''})

    const [isRegistred, setIsRegistred] = useState(true)
    const [imageSelected, setImageSelected] = useState(false)
    const [URL, setURL] = useState('')


    useEffect(async() => {
      
        let data=await getUserData()
        setUserData(data)
        setURL(data.image)

        //user has no registry in the database, go to edit mode 
        if(!data)setIsRegistred(false)

    }, [])    


    const [changes, setChanges] = useState({
        name: "",
        occupation: "",
        description: "",
        image:""
    })

    const onChangeChanges = (e) => {
        setChanges({ ...changes, [e.target.name]: e.target.value })
    } 

    const SubmitUserData=async()=>{
        if(URL=='')return

        if(isRegistred){
            await editUser({
                name:changes.name,
                description:changes.description,
                image:URL,
                address:await getCurrentAccount(),
                occupation:changes.occupation
            })
        }else{
            await registerUser({
                name:changes.name,
                description:changes.description,
                image:URL,
                address:await getCurrentAccount(),
                occupation:changes.occupation
            })
        }
    }

    const ProfileImages=[
        "https://firebasestorage.googleapis.com/v0/b/hashimas.appspot.com/o/Chester%2Fches_5.jpeg?alt=media&token=34ffbec6-2da0-4fbc-869f-a1f9468b84ec",
        "https://firebasestorage.googleapis.com/v0/b/hashimas.appspot.com/o/Chester%2Fches_2.jpeg?alt=media&token=93d41e86-50df-44fd-bab8-a5d1f158d705",
        "https://firebasestorage.googleapis.com/v0/b/hashimas.appspot.com/o/Chester%2Fches_1.jpeg?alt=media&token=5d28607b-5307-4e93-95dd-bd24744b623f",
        "https://firebasestorage.googleapis.com/v0/b/hashimas.appspot.com/o/Chester%2Fches_3.jpeg?alt=media&token=59eee8e9-c818-444c-8c1e-9590d2d08d6b",
        "https://firebasestorage.googleapis.com/v0/b/hashimas.appspot.com/o/Chester%2Fches_4.jpeg?alt=media&token=05f484c1-0514-4e93-b273-bd46b403259d"
    ]

    const imagesWidth='15rem'

    return (
        <form className="profile_info_container">
            
            {/* El usuario no tiene registro */}
            <div className='div_no_register'>
                <FaUserCircle size={400}/>
            </div>

            <div className="account_info_update">

                {/* {!imageSelected?
                <div className="account_photo">
                    <Image 
                    display='inline-block'
                    src={profilePhoto} 
                    alt={"profile-photo"} 
                    width={imagesWidth} 
                    height={"auto"} 
                    borderRadius={"2rem"} />

                    {ProfileImages.map((image,key)=><Image 
                    key={key}
                    onClick={()=>{
                        setImageSelected(true)
                        setURL(image)
                    }}
                    display='inline-block'
                    src={image}
                    alt={"profile-photo"} 
                    width={imagesWidth} 
                    height={"auto"} 
                    borderRadius={"2rem"} />
                    )}

                </div> 
                :
                //El usuario ya eligio una imagen de perfil
                <div>
                    <Image 
                    onClick={()=>{
                        setImageSelected(false)
                        setURL('')
                    }}
                    display='inline-block'
                    src={URL} 
                    alt={"profile-photo"} 
                    width={'40rem'} 
                    height={"auto"} 
                    borderRadius={"2rem"} />                    
                </div>} */}


                <div className="account-update">
                    <Text 
                    text={"Update Information"} 
                    fontSize={"32px"} 
                    textColor={"white"} 
                    margin={"1rem 0 15px"} />

                    <div className="label-update">
                        <Text text={"Name"} fontSize={"16px"} textColor={"white"} margin={"10px 0"} />
                        <InputTwo
                            defaultValue={changes.name}
                            onChange={onChangeChanges}
                            name="name"
                            type="text"
                            placeholder={userData.name!=''?userData.name:"Name"}
                            fontSize={"16px"}
                            padding={"15px 24px"}
                            textColor={"black"}
                            margin={"0"}
                        />
                    </div>

                    <div className="label-update">
                        <Text text={"Occupation"} fontSize={"16px"} textColor={"white"} margin={"10px 0"} />
                        <InputTwo
                            value={changes.occupation}
                            onChange={onChangeChanges}
                            name="occupation"
                            type="text"
                            placeholder={userData.occupation!=''?userData.occupation:"Occupation"}
                            fontSize={"16px"}
                            padding={"15px 24px"}
                            textColor={"black"}
                            backgroundColor={"#F3F3F3"}
                            borderRadius={"10px"}
                            margin={"0"}
                        />

                    </div>

                    <div className="label-update">

                        <Text text={"Description"} fontSize={"16px"} textColor={"white"} margin={"10px 0"} />
                        <TextArea
                            value={changes.description}
                            onChange={onChangeChanges}
                            name="description"
                            rows={"4"}
                            placeholder={userData.description!=''?userData.description:"Description"}
                            placeholderColor={"#858585"}
                            fontSize={"16px"}
                            padding={"20px 30px"}
                            borderRadius={"10px"}
                            backgroundColor={"#F3F3F3"}
                            margin={"0"}
                        />

                    </div>
                </div>
            </div>

            {changes.name.length>0&&changes.occupation.length>0&&changes.description.length>7&&
                <BotonSubmit
                    onClick={SubmitUserData}
                    text={"Update"}
                    fontSize={"18px"}
                    fontWeight={"500"}
                    textColor={"black"}
                    borderButton={"none"}
                    borderRadius={"26px"}
                    margin={"10px 0"}
                    padding={"14px 40px"}
                />}

        </form>


    )
}

export default UpdateInfoForm;