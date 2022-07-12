import React, { useState } from "react";
import InputTwo from "../../componentes/Input/InputTwo";
import TextArea from "../../componentes/Input/TextArea";
import BotonSubmit from "../../componentes/Boton/BotonSubmit";
import Image from "../../componentes/imagen/Image";
import Text from "../../componentes/Texto/Text";
import profilePhoto from "../../componentes/image/profile-photo-example.jpg"
import './estilo.css'

function UpdateInfoForm({stateForm}) {

    const [changes, setChanges] = useState({
        name: "Satoshi Nakamoto",
        occupation: "Blockchain Developer",
        description: "With a lot of experience in software development and blockchain and looking for innovation and improvement of decentralized databases"+
        "Specialist in python, javascript, java and rust."+
        "Perfect command of English and Spanish."
    })

    const onChangeChanges = (e) => {
        setChanges({ ...changes, [e.target.name]: e.target.value })
    } 

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(changes)
        stateForm(false)
    }

    return (
        <form className="profile-info-container" onSubmit={handleSubmit}>
            <div className="account-info-update">
                <div className="account-photo">
                    <Image src={profilePhoto} alt={"profile-photo"} width={"26rem"} height={"auto"} borderRadius={"2rem"} />

                </div>

                <div className="account-update">
                    <Text text={"Update Information"} fontSize={"32px"} textColor={"white"} margin={"1rem 0 15px"} />

                    <div className="label-update">
                        <Text text={"Name"} fontSize={"16px"} textColor={"white"} margin={"10px 0"} />
                        <InputTwo
                            defaultValue={changes.name}
                            onChange={onChangeChanges}
                            name="name"
                            type="text"
                            placeholder={"Name"}
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
                            placeholder={"Occupation"}
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
                            placeholder={"Description"}
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

            <div className="account-modifiders">
                <BotonSubmit
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
            </div>
        </form>


    )
}

export default UpdateInfoForm;