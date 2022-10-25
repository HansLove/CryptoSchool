import React, { useEffect, useState,lazy } from 'react'
import QuestionText from '../../componentes/question/QuestionText'
import QuestionOptions from '../../componentes/question/QuestionOptions'
import BotonSubmit from '../../componentes/Boton/BotonSubmit'
import './estilo.css'
import { actulizarCuenta } from '../../componentes/blockchain/Blockchain'
import { getUserData } from '../../componentes/ConexionAxios/ConexionAxios'
import Animacion_felicidades from '../../animations/Congrats/Animacion_felicidades'
import { sendAnswer } from '../../componentes/ConexionAxios/ConexionServer'
import LoadingSpinner from '../../componentes/LoadingSpinner/LoadingSpinner'

function TestForm({
    id,
    formData=[]
}) {



    useEffect(async() => {
      let account=await actulizarCuenta()
      setAddress(account)
    }, [])

    const [address, setAddress] = useState('')
    const [answers, setAnswers] = useState({})
    const [succesfulMinting, setSuccesfulMinting] = useState('null')
    const [isLoading, setIsLoading] = useState(false)


    const onChangeAnswer = (e) => {
        setAnswers({ ...answers, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(answers)
    }

    const Submit=async()=>{
        setIsLoading(true)
        let userData=await getUserData()
        // console.log('user data: ',userData)
        
        let res_return=await sendAnswer(
            id.toString(),
            userData.name,
            address.toString(),
            answers)

        setSuccesfulMinting(res_return)
        setIsLoading(false)

    }

    return (

        <form 
        className='test-form-container' onSubmit={handleSubmit}>
            {/* <QuestionText
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
            /> */}

            {formData.map((item,key)=>
            
            <QuestionOptions
                key={key}
                onChange={onChangeAnswer}
                name={"answer"+(key+1).toString()}
                numberQuestion={key+1}
                question={item.question}
                options={item.options}
            />)} 

            {isLoading?<LoadingSpinner/>:
            succesfulMinting=='null'?
            <BotonSubmit
                onClick={Submit}
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
            :
            succesfulMinting?
            // <p>Amazing job! You minted your Deccert NFT</p>
            <Animacion_felicidades/>
            :
            <p style={{color:'crimson',fontWeight:'900',fontSize:'3rem'}}>You failed the test</p>
            }
        </form>


    )
}

export default TestForm