import React, { useState } from 'react'
import QuestionText from '../../componentes/question/QuestionText'
import QuestionOptions from '../../componentes/question/QuestionOptions'
import BotonSubmit from '../../componentes/Boton/BotonSubmit'
import './estilo.css'

function TestForm() {

    var options = [
        {
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit 100."
        },
        {
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit 200."
        },
        {
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit 300."
        },
        {
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit 400."
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
                question={"¿Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?"}
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
                question={"¿Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?"}
                options={options}
                boxShadow={"0px 10px 20px rgba(0, 0, 0, 0.07)"}
                margin={"0 0 2rem"}
            />

            <QuestionText
                value={answers.answer3}
                onChange={onChangeAnswer}
                name={"answer3"}
                backgroundColor={"white"}
                textColor={"black"}
                padding={"40px 50px 50px"}
                numberQuestion={"3"}
                question={"¿Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?"}
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
                question={"¿Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?"}
                options={options}
                boxShadow={"0px 10px 20px rgba(0, 0, 0, 0.07)"}
                margin={"0 0 2rem"}
            />

            <BotonSubmit
                text={"Enviar respuestas"}
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