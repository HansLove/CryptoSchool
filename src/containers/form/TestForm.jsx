import React, { useState } from 'react'
import QuestionText from '../../componentes/question/QuestionText'
import QuestionOptions from '../../componentes/question/QuestionOptions'
import BotonSubmit from '../../componentes/Boton/BotonSubmit'
import './estilo.css'

function TestForm() {

    var options = [
        {
            "text": "Nick Fury"
        },
        {
            "text": "Satoshi Nakamoto"
        },
        {
            "text": "Sam Banc-man"
        },
        {
            "text": "Michael Saylor"
        }
    ]

    const [answers, setAnswers] = useState({
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
    })

    const onChangeAnswer = (e) => {
        setAnswers({ ...answers, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(answers)
    }

    return (

        <form className='test-form-container' onSubmit={handleSubmit}>
            <QuestionText
                value={answers.answer1}
                onChange={onChangeAnswer}
                name={"answer1"}
                backgroundColor={"white"}
                textColor={"black"}
                padding={"40px 50px 50px"}
                numberQuestion={"1"}
                question={"Name of the biggest cryptocurrency by market cap"}
                boxShadow={"0px 10px 20px rgba(0, 0, 0, 0.07)"}
                margin={"0 0 2rem"}
            />

            <QuestionOptions
                onChange={onChangeAnswer}
                name={"answer2"}
                backgroundColor={"white"}
                textColor={"black"}
                padding={"40px 50px 50px"}
                numberQuestion={"2"}
                question={"¿Name of the creator of Bitcoin?"}
                options={options}
                boxShadow={"0px 10px 20px rgba(0, 0, 0, 0.07)"}
                margin={"0 0 2rem"}
            />


            <QuestionOptions
                onChange={onChangeAnswer}
                name={"answer2"}
                backgroundColor={"white"}
                textColor={"black"}
                padding={"40px 50px 50px"}
                numberQuestion={"2"}
                question={"What is an NFT?"}
                options={[
                    {
                        "text": "Art inside the blockchain"
                    },
                    {
                        "text": "Smart contract standard for non fungible tokens"
                    },
                    {
                        "text": "Real asset back by a digital asset "
                    },
                    {
                        "text": "A currecy to buy assets in the blockchain"
                    }
                ]}
                boxShadow={"0px 10px 20px rgba(0, 0, 0, 0.07)"}
                margin={"0 0 2rem"}
            />

            
        
            <QuestionOptions
                onChange={onChangeAnswer}
                name={"answer4"}
                backgroundColor={"white"}
                textColor={"black"}
                padding={"40px 50px 50px"}
                numberQuestion={"4"}
                question={"First country to make Bitcoin legal tender?"}
                options={[
                    {
                        "text": "El Salvador"
                    },
                    {
                        "text": "Germany"
                    },
                    {
                        "text": "Central African Republic"
                    },
                    {
                        "text": "USA"
                    }
                ]}
                boxShadow={"0px 10px 20px rgba(0, 0, 0, 0.07)"}
                margin={"0 0 2rem"}
            />

            <BotonSubmit
                text={"Check answers"}
                fontSize={"16px"}
                fontWeight={"500"}
                textColor={"white"}
                buttonColor={"#3B37FF"}
                borderButton={"none"}
                borderRadius={"1rem"}
                margin={"26px 0 26px"}
                padding={"20px 28px"}
            />
        </form>


    )
}

export default TestForm