import React, { useEffect, useState } from 'react'
import Eth from './image/ethereum_1.png'
import Polygon from './image/polygon_1.png'
import Binance from './image/binance_1.png'
import styled from 'styled-components'
import { AiFillAlert } from 'react-icons/ai'
import { CheckConexion, dameCurrentChain, RequestConexion } from '../blockchain/Blockchain'



function Cadenas({
    width='50%'
}) {

    const [chainId, setChainId] = useState('')
    const [isConnected, setIsConnected] = useState(true)
    const [web3Installed, setWeb3Install] = useState(true)


    useEffect(async() => {
        const _chainId = await dameCurrentChain()
        const respuesta=await CheckConexion()
        console.log('chainID:',_chainId)
        console.log(respuesta)
        setChainId(_chainId)
        setIsConnected(respuesta.connect)
        setWeb3Install(respuesta.install)
    }, [])
    


    var array=[
        {name:'Ethereum', id:'0x1',image:Eth},
        {name:'Binance Smart Chain', id:'0x38',image:Binance},
        {name:'Polygon', id:'0x89',image:Polygon},
        // {name:'Avalanche', id:'0xa86a',image:Avalanche},
        {name:'ETH', id:'0x539',image:Eth,warning:true},
        {name:'Binance Testnet', id:'0x61',image:Binance,warning:true},

    ]


    const MainDiv=styled.div`
        position: relative;
        display: inline-flex;
        width: 25%;
        margin-left: auto;
        color: whitesmoke;

        & .icon_alert{
            top: 0;
            left: 0;
            position: absolute;
        }
        @media 
        (min-device-width: 350px) 
        and (max-device-width: 1024px) 
        {
            width:40%;
            
            & img{
                width: 100%;
            }
        }
    `

    const Div=styled.div`   
        visibility: ${props=>props.chainId==chainId?'visible':'collapse'};
        padding:1% 3%;
        width: ${width};
        max-width: 50%;
        z-index: 1;
        border-radius: 10%;
        display:${props=>props.chainId==chainId?'block':'none'};
        margin-left: 5%;
        color: whitesmoke;

        p{
            display: none;
            transition: all 0.5 ease-in-out;
            position: absolute;
            bottom: 0;
            right: 0;
            left: 0;
        }
        a{
            font-size: 0.7rem;
        }
        &:hover p{
            display: block;
            transition: all 0.5 ease-in-out;
        }

    `



    return (
        <MainDiv>
            {isConnected?
            <>
            {array.map((item,index)=>
            <Div 
            key={index}
            chainId={item.id}>
                <p style={{
                    fontFamily:'Georgia, Times New Roman,Times, serif',
                    fontSize:'0.7rem',
                    width:'fit-content',
                    margin:'auto'
                }}>
                    {item.name}
                </p>
                
                <img
                width='30%'
                style={{display:'block',margin:'auto'}}
                src={item.image}></img>
                {item.warning&&<div className='icon_alert'>
                <AiFillAlert 
                size={30} color='crimson'/>
                <a style={{display:'block'}}>Testnet</a>
                </div>
                }

            </Div>
            )}
            </>
            :
            <button
            onClick={web3Installed?()=>RequestConexion(setIsConnected):()=>window.open('https://metamask.io/download/')}
            text={web3Installed?'Connect Wallet':'Download Wallet'}
            fontSize='0.9rem'
            shadow='grey'
            color1='black'
            color2='black'
            padding='0.5%'
            padding2='0.5%'
            paddingTop='5%'
            />
            }

        </MainDiv>
    )
}

export default Cadenas
