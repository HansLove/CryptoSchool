import React from 'react'
import styled from 'styled-components'
import Text from '../Texto/Text'

const State = styled.div`
  text-align:center;
  padding:${props => props.padding};
  margin:${props => props.margin};
  border-radius:${props => props.borderRadius};
  /* background-color:${props => props.backgroundColor}; */
  background: linear-gradient(45deg,black,${props => props.backgroundColor});
  margin: 0.5%;
`

function StateIndicator({text, fontSize, fontWeight, textColor, backgroundColor, borderRadius, margin, padding}) {

  return (
    <State
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      margin={margin}
      padding={padding}
    >
        <Text text={text} fontSize={fontSize} fontWeight={fontWeight} textColor={textColor} margin={0}/>
    </State>
  )
}

export default StateIndicator