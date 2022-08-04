import React, { useState } from 'react'
import BotonSubmit from '../Boton/BotonSubmit';
import styled from 'styled-components'
import './estilo.css'
import { NavLink } from 'react-router-dom';

const Input = styled.input`
        width:${props => props.width};
        font-size: ${props => props.fontSize};
        font-weight: ${props => props.fontWeight};
        padding: ${props => props.padding};
        color: ${props => props.textColor};
        background: ${props => props.backgroundColor};
        border: ${props => props.border};
        border-radius: ${props => props.borderRadius};
        transition: all 0.3s;
        margin:${props => props.margin};
        cursor:pointer;

        :focus{
            outline: none;
        }

        ::placeholder{
            color:${props => props.placeholderColor};
        }
    `

function Search({ name, type, placeholder, placeholderColor, fontSize, fontWeight, padding, textColor, backgroundColor, borderRadius, margin, marginButtom, paddingButtom, border }) {
    const [inputText, setInputText] = useState("");

    const [showButtom, setShowButtom] = useState(false);

    const onChangeInput = (e) => {
        // var lowerCase = e.target.value.toLowerCase();
        setInputText(e.target.value)

        if(e.target.value.length >= 3){
            setShowButtom(true)
        }else{
            setShowButtom(false)
        } 
    }

    const inputHandler = (e) => {
        e.preventDefault()
        console.log(inputText)
    }

    return (
        <form onSubmit={inputHandler} className="form-search" >
            <Input
                type={type}
                placeholder={placeholder}
                placeholderColor={placeholderColor}
                value={inputText}
                onChange={onChangeInput}
                name={name}
                fontSize={fontSize}
                fontWeight={fontWeight}
                padding={padding}
                textColor={textColor}
                backgroundColor={backgroundColor}
                borderRadius={borderRadius}
                margin={margin}
                border={border}
               
            />

            {
                showButtom &&
                <NavLink to='/jobbank'>
                <BotonSubmit
                    text={"Search"}
                    fontSize={fontSize}
                    fontWeight={"500"}
                    textColor={"white"}
                    buttonColor={"#3B37FF"}
                    borderButton={"none"}
                    borderRadius={borderRadius}
                    margin={marginButtom}
                    padding={paddingButtom}
                />
                </NavLink>

            }


        </form>

    )
}

export default Search