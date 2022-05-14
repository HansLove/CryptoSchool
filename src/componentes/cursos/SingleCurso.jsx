import React from 'react'
import styled from 'styled-components'

function SingleCurso({name='Bitcoin',onClick=()=>{}}) {

    const Div=styled.div`
        background: transparent;
        width: 50%;
        font-size: 1.5rem;
        border-radius: 10%;
        text-align: center;
        border: 1px solid navajowhite;
        display: inline-block;
        margin: auto;
        margin-left: 2%;
        &:hover{
            border: 1px solid navy;
            transition: all 0.5s ease-in-out;
        }
    `
  return (
    <Div onClick={onClick}>
        <p>{name}</p>
    </Div>
  )
}

export default SingleCurso