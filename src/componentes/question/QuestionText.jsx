import React from 'react'
import styled from 'styled-components'
import Text from '../Texto/Text'
import TextArea from '../Input/TextArea'
import './estilo.css'

const QuestionBox = styled.div`
    width: -webkit-fill-available;
    background-color:${props => props.backgroundColor};
    padding:${props => props.padding};
    box-shadow:${props => props.boxShadow};
    border-radius:1rem;
    margin:${props => props.margin};
`

function QuestionText({value, onChange, name, backgroundColor, textColor, padding, numberQuestion, question, boxShadow, margin}) {

  return (
    <QuestionBox
        backgroundColor={backgroundColor}
        padding={padding}
        boxShadow={boxShadow}
        margin={margin}
    >
        <div className='question-container'>
            <div className='number-question'>
                <Text text={numberQuestion+"."} fontSize={"26px"} 
                fontWeight={"500"} textColor={textColor} margin={"0 16px 0 0"}/>
            </div>

            <div className='question-text'>
                <Text 
                    text={question} 
                    fontSize={"20px"} 
                    fontWeight={"500"} 
                    textColor={textColor} 
                    margin={"0"}
                />
            </div>
        </div>
        
        <TextArea 
            value={value}
            onChange={onChange}
            name={name}
            rows={"6"} 
            placeholder={"Your Answer"} 
            placeholderColor={"#858585"} 
            fontSize={"16px"}
            padding={"20px 30px"} 
            borderRadius={"10px"} 
            backgroundColor={"#F3F3F3"}
            margin={"24px 0 0"}
        />

    </QuestionBox>
  )
}

export default QuestionText