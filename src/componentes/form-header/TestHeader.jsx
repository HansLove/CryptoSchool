import React from 'react'
import styled from 'styled-components'
import Text from '../Texto/Text'
import './estilo.css'

const Header = styled.div`
        display:flex;
        flex-direction:column;
        align-items:center;
        padding:${props => props.padding};
        width:100%;
        border-radius:1rem;
    `

function TestHeader({courseName, testName, testDescription, backgroundColor, padding, textColor}) {

  return (
    <>
    <div className='background-header' style={{backgroundColor:backgroundColor}}/>
    <Header
        padding={padding}
    >
        <Text text={courseName} fontSize={"24px"} fontWeight={"500"} textColor={textColor} margin={"0 0 18px"}/>
        <Text text={testName} fontSize={"40px"} fontWeight={"500"} textColor={textColor} margin={"0 0 30px"}/>
        <div className='header-description'>
            <Text 
                text={testDescription} 
                fontSize={"16px"} 
                fontWeight={"400"} 
                textColor={textColor}
                margin={"0"}
            />
        </div>
    </Header>
    </>
    
  )
}

export default TestHeader