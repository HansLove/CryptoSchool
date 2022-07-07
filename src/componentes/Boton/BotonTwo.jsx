import React from "react";
import styled from "styled-components";

function BotonTwo({ 
    seteditMode,
    editMode,
    text, 
    fontSize, 
    textColor, 
    buttonColor, borderButton, borderRadius, margin, padding }) {

    const Button = styled.button`
        text-decoration:none;
        cursor:pointer;
        font-size:${fontSize};
        color:${textColor};
        background-color:${buttonColor};
        border:${borderButton};
        border-radius:${borderRadius};
        margin:${margin};
        padding:${padding};
    `

    return (
       
            <Button onClick={()=>seteditMode(!editMode)}>
                {text}
            </Button>
     
    )

}

export default BotonTwo;