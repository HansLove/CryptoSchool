import React from 'react'
import styled from 'styled-components'
import Text from '../Texto/Text'
import Option from '../Input/Option'
import './estilo.css'

const QuestionBox = styled.div`
        width: -webkit-fill-available;
        background-color:${props => props.backgroundColor};
        padding:${props => props.padding};
        box-shadow:${props => props.boxShadow};
        border-radius:1rem;
        margin:${props => props.margin};
    `

function QuestionOptions({ name, onChange, backgroundColor, textColor, padding, numberQuestion, question,options, boxShadow, margin }) {
    
    return (
        <QuestionBox
            backgroundColor={backgroundColor}
            padding={padding}
            boxShadow={boxShadow}
            margin={margin}
        >
            <div className='question-container'>
                <div className='number-question'>
                    <Text text={numberQuestion + "."} fontSize={"26px"} fontWeight={"500"} textColor={textColor} margin={"0 16px 0 0"} />
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

            <div className='options-group' onChange={onChange}>
            {
                
                options.map((option,key) => {
                    return(
                        <Option
                            name={name}
                            key={key}
                            text={option.text}
                            value={(key+1).toString()}
                            padding={"1rem"}
                            textColor={"black"}
                            backgroundColor={"#F3F3F3"}
                            borderRadius={"10px"}
                            hoverColor={"#DADADA"}
                            margin={"0 0 12px"}
                        />

                    )
                })
                
            }

            </div>

        </QuestionBox>
    )
}

export default QuestionOptions