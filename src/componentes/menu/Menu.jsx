import React, { useEffect, useState } from 'react'
import Boton from '../Boton/Boton'
import Logo from '../image/logo.png'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import './estilo.css'

function Menu({setEstado}) {

  const [visible, setVisible] = useState(false)

  useEffect(async() => {
    let _res=await Check()
    setVisible(_res)

  }, [])
  

  const Check=async()=>{
    var resFinal=true

    if (window.ethereum !== 'undefined') {
        await window.ethereum
       .request({ method: 'eth_accounts' })
       .then(accounts=>{
         if (accounts.length === 0) {
           resFinal=false            
         }

       })
      }
    return resFinal
}

  return (
    <div className='div_menu' style={{display:'flex'}}>
      
        <img onClick={()=>scroll.scrollTo(4000)}  width='10%' src={Logo}></img>
        <p onClick={()=>scroll.scrollTo(0)}>Home</p>
        <p onClick={()=>scroll.scrollTo(1010)}>Cursos</p>
        
        <p onClick={()=>scroll.scrollTo(2000)}>Acerca de nosotros</p>
        <p onClick={()=>scroll.scrollTo(3000)}>Contactanos</p>
        

        {!visible&&
        <Boton 
        color1='navy' color2='hotpink'
        text='Connect Wallet' onClick={async()=>await window.ethereum.request({ method: 'eth_requestAccounts' })}/>}
       
    </div>
  )
}

export default Menu