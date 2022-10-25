import React from 'react'
import styled from 'styled-components'
import './estilo.css'

export default function LoadingSpinner({
    largo='80px',
    altura='80px',
    color='white',
    position='relative',
    marginTop='5%'
}) {

    const Div=styled.div`
    display: block;
    position: ${position};
    margin: auto;
    margin-top:${marginTop};
    width:${largo};
    height: ${altura};
    transition: ease-in-out 1s all;
    animation: anim 1s ease-in-out 1s;

    &:after{
        border-color: ${color} transparent ${color} transparent;

    }
    @keyframes anim {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
    
    `
    return (
        <Div className="lds-hourglass"/>
    )
}

