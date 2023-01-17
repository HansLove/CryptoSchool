import React, { useEffect, useState } from 'react'
import Web3 from 'web3'
import { ObjetoDeccert } from '../../blockchain/ObjetoDeccert'
import Boton from '../../componentes/Boton/Boton'
import Input from '../../componentes/Input/Input'
import {GiCoolSpices} from 'react-icons/gi'
import {motion} from 'framer-motion/dist/framer-motion'
import LoadingSpinner from '../../componentes/LoadingSpinner/LoadingSpinner'
import './estilo.css'

function Mint() {

    const [name, setname] = useState('')
    const [selected, setSelected] = useState('')
    const [address, setAddress] = useState('')
    const [isValid, setIsValid] = useState(false)
    const [certificado, setcertificado] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [exito, setExito] = useState(false)

    const Participation='https://gateway.pinata.cloud/ipfs/QmUeR4fVw7TpGMgifYFQsxzp14XcZh1B37boFaaEunqZ4t'

    const GenerarCertificado=async()=>{
        setIsLoading(true)
        let objeto=new ObjetoDeccert()
        await objeto.load()
        let res=await objeto.Manual(name,Participation,address)
        // console.log('res: ',res.status)
        setExito(res.status)
        setIsLoading(false)
    }

    const ValidAddress=async(_address)=>{
      var res=await Web3.utils.isAddress(_address)
      setIsValid(res)
  
    }
  
    
  return (<motion.div
    initial={{width:0}}
    animate={{width:'100%'}}
    exit={{x:'100%'}}
  >
    {!exito?
    <div className='div_container_mint'>
        <p 
        className='p_mint_name_of_the_user'>Name of the user</p>
        
        <Input 
        color='white'
        onChange={(e)=>setname(e.target.value)}
        value={name}
        width='50%'
        placeholder='Satoshi Nakamoto'/>

        {name.length>3&&
        <>
        <p 
        className='p_mint_name_of_the_user'>Crypto Address</p>
        
        <Input 
        color='white'
        onChange={(e)=>{
          setAddress(e.target.value)
          ValidAddress(e.target.value)
        }
        }
        value={address}
        fontSize='1.4rem'
        width='50%'
        placeholder='0x....'/>
        </>
        }
 
        {isLoading&&<LoadingSpinner/>}
        {isValid&&
        <Boton 
        borderRadius='10%'
        onClick={GenerarCertificado}
        color1='hotpink'
        color2='purple'
        text='Create Certificate'/>}
    </div>
    :
    <h1 style={{
      fontSize:'7.5rem',textAlign:'center',
    fontFamily:'monospace'}}>Certificate minted succesfully
    <GiCoolSpices/>
    </h1>

  }

    </motion.div>

  )
}

export default Mint