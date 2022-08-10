import React from 'react'
import styled from 'styled-components'
import ButtonLaser from '../Boton/ButtonLaser/ButtonLaser'
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

function TestHeader({
    onClick,
    courseName, testName, 
    testDescription, 
    backgroundColor, 
    padding, textColor}) {

  return (
    <div 
    className='background-header' 
    style={{backgroundColor:backgroundColor}}>
    

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
            <ButtonLaser 
            onClick={onClick}
            texto='ENTER'
            color={backgroundColor}
            // style={{position:'absolute',top:0,right:0}}
        />
    </Header>
    
    </div>
    
    
  )
}

export default TestHeader