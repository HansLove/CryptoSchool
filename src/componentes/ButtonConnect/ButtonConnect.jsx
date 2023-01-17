import React, { useContext, useEffect, useState } from 'react'
import Eth from './image/ethereum_1.png'
import Polygon from './image/polygon_1.png'
import Binance from './image/binance_1.png'
import {RequestConexion } from '../../blockchain/Blockchain'
import {AiFillAlert} from 'react-icons/ai'
import styled from 'styled-components'
import { DataContext } from '../../context/DataContext'


export default function ButtonConnect({
    width='7vh',
    imageWidth='100%'
}) {

    const [windowWidth, setWindowWidth] = useState('')

    const {chainID,isConnected,setIsConnected,web3Installed} = useContext(DataContext)

    useEffect(() => {
        async function Init(){
            //set window width
            setWindowWidth(window.screen.width)
        }
        Init()

        return ()=>{

        }
    }, [])
    

    var array=[
        {name:'Ethereum', id:'0x1',image:Eth},
        {name:'Binance Smart Chain', id:'0x38',image:Binance},
        {name:'Polygon', id:'0x89',image:Polygon},
        {name:'Polygon Mumbai', id:'0x13881',image:Polygon,warning:true},
        {name:'ETH', id:'0x539',image:Eth,warning:true},
        {name:'Ropsten', id:'0x3',image:Eth,warning:true},
        {name:'Kovan', id:'0x2a',image:Eth,warning:true},
        {name:'Binance Testnet', id:'0x61',image:Binance,warning:true},

    ]

    const Div=styled.div`   
        visibility: ${props=>props.chainId==chainID?'visible':'collapse'};
        padding:1% 3%;
        width: ${width};
        z-index: 1;
        border-radius: 10%;
        display:${props=>props.chainId==chainID?'block':'none'};
        color: whitesmoke;
        position: relative;

        img{
            width: 70%;

        }

        p{
            position: absolute;
            opacity: 0;
            transition: all 0.5 ease-in-out;
        }

        &:hover p{
            opacity: 1;
            position: absolute;
            font-size: 0.8rem;
            width: fit-content;
            text-align: center;
            margin: auto;
            transition: all 0.5s ease-in-out;
        }

        &:hover img{
            visibility: hidden;
        }

        .icon_alert{
            position: absolute;
            top: 0;
            right: 0;
            left: 40px;
            transition: all 0.3s ease-in;

        }
        &:hover .icon_alert{
            opacity: 0;
            transition: all 0.3s ease-in;
        }

    `


    return (isConnected?
            <>
            {array.map((item,index)=>
            <Div 
            key={index}
            chainId={item.id}>

                <p>
                    {item.name}
                </p>
                
                <img
                width={imageWidth}
                src={item.image}/>

                {item.warning&&
                <div className='icon_alert'>
                    <AiFillAlert 
                    style={{margin:'auto',display:'block'}}
                    size={20} color='crimson'/>
                </div>
                }

            </Div>
            )}
            </>
            :
            //User is no connected, display button
            //If width is less than 821 is a cellphone
            <button
            className='btn-md'
            onClick={windowWidth<821&&!isConnected?
            ()=>RequestConexion(setIsConnected,web3Installed)
            :!web3Installed?()=>window.open('https://metamask.io/download/')
            :()=>RequestConexion(setIsConnected,web3Installed)}>
                
                {web3Installed?'Connect Wallet':
                windowWidth<821&&!isConnected?'Connect':
                'Download Wallet'}
            </button>
    )
}

