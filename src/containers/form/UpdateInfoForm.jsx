import React, { useEffect, useState } from "react";
import InputTwo from "../../componentes/Input/InputTwo";
import TextArea from "../../componentes/Input/TextArea";
import BotonSubmit from "../../componentes/Boton/BotonSubmit";
import Image from "../../componentes/imagen/Image";
import Text from "../../componentes/Texto/Text";
import profilePhoto from "../../componentes/image/blockchain.png"
import './estilo.css'
import { editUser, getUserData, registerUser } from "../../componentes/ConexionAxios/ConexionAxios";
import { actulizarCuenta } from "../../componentes/blockchain/Blockchain";


function UpdateInfoForm() {

    const [userData, setUserData] = useState({name:'',description:'',image:profilePhoto,
    occupation:''})
    const [image, setImage] = useState('')
    const [isRegistred, setIsRegistred] = useState(true)


    useEffect(async() => {
      
        let data=await getUserData()
        setUserData(data)

        //user has no registry in the database, go to edit mode 
        if(!data)setIsRegistred(false)
        //user doesnt have any image as a file
        if(!data.image=='')setImage(data.image)
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

        if(isRegistred){
            await editUser({
                name:changes.name,
                description:changes.description,
                image:changes.image.length>15?changes.image:'',
                address:await actulizarCuenta(),
                occupation:changes.occupation
    
            })
        }else{

        await registerUser({
            name:changes.name,
            description:changes.description,
            image:changes.image,
            address:await actulizarCuenta(),
            occupation:changes.occupation

        })
    }
    }

    return (
        <form className="profile-info-container">

            <div className="account-info-update">

                <div className="account-photo">
                    <Image src={changes.image.length>10?changes.image:image!=''?image:profilePhoto} 
                    alt={"profile-photo"} width={"26rem"} height={"auto"} borderRadius={"2rem"} />
                    
                    <InputTwo
                            defaultValue={changes.image}
                            onChange={onChangeChanges}
                            name="image"
                            type="text"
                            placeholder={"Image URI"}
                            fontSize={"16px"}
                            padding={"15px 24px"}
                            textColor={"black"}
                            backgroundColor={"#F3F3F3"}
                            borderRadius={"10px"}
                            margin={"0"}
                        />
                </div>

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
                            backgroundColor={"#F3F3F3"}
                            borderRadius={"10px"}
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
            <div className="account-modifiders">
                <BotonSubmit
                    onClick={SubmitUserData}
                    text={"Update"}
                    fontSize={"18px"}
                    fontWeight={"500"}
                    textColor={"white"}
                    buttonColor={"#3B37FF"}
                    borderButton={"none"}
                    borderRadius={"26px"}
                    margin={"10px 0"}
                    padding={"14px 40px"}
                />
            </div>}

        </form>


    )
}

export default UpdateInfoForm;