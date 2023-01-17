import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components'
// import { ObjetoDeccert } from '../blockchain/ObjetoDeccert'
import './estilo.css'

function SingleCertificado({
    name='',
    color='lightgreen',
    icon,
    colored=false
}) {

    const navigate = useNavigate();

    const [selected, setSelected] = useState(false)

    const Div=styled.div`
        background: ${selected?'linear-gradient(-45deg,'+color+',black)':colored?'linear-gradient(-45deg,'+color+',black)':'snow'};
        color: ${selected?'whitesmoke':colored?'white':'gray'};
            
        &:hover{
            transition: all 0.5 ease-in-out;
            border: 1px dashed ${color};
            letter-spacing: 0.1em;
            background: linear-gradient(-45deg,${color},black);
            color: whitesmoke;
        }
        
    `
  return (
    <Div 
    onClick={() => {
        const certificationName = name.toLowerCase()
        navigate(`/certifications/${certificationName}`);
    }}
    className='div_central'>

        <h1 className='h1_titulo_certificado'>{name}</h1>

        {icon}
        
        <p className='p_certificado'>
            Certificate
        </p>
        
    </Div>
  )
}

export default SingleCertificado