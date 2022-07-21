import React, { useEffect, useState } from 'react'
import NothingHere from '../../animations/NothingHere/NothingHere'
import { actulizarCuenta } from '../../componentes/blockchain/Blockchain'
import { ObjetoDeccert } from '../../componentes/blockchain/ObjetoDeccert'
import SingleNFT from '../../languaje/SingleNFT/SingleNFT'
import {motion} from 'framer-motion/dist/framer-motion'
import './estilo.css'
import { getUserData } from '../../componentes/ConexionAxios/ConexionAxios'
import UserBar from '../../componentes/UserBar/UserBar'

export default function Profile() {

    const [listaNFT, setlistaNFT] = useState([])
    const [data, setdata] = useState({name:'',image:'.',description:''})


    useEffect(async() => {
      let objeto=new ObjetoDeccert()
      let account=await actulizarCuenta()
      await objeto.load()
      let _total=await objeto.getTotal()
      var _lista=[]

      for (let index = 1; index < _total+1; index++) {
          let certificado=await objeto.get(index)
          if(certificado['owner']==account)_lista.push(certificado)
      }
      setlistaNFT(_lista)
      console.log('lista: ',_lista)

      let resultado=await getUserData(account)
      setdata(resultado)

      return () => {
        setdata({}); // This worked for me
      };
      
    
    }, [])
    
  return (
    <motion.div
    initial={{width:0}}
    animate={{width:'100%'}}
    exit={{x:window.innerWidth}}>

        <UserBar 
        name={data.name} 
        description={data.description}
        image={data.image}/>

        {listaNFT.length==0&&
        <>
        <NothingHere width='20%'/>
        </>}

        {listaNFT.map((item,key)=>
        <p key={key}>{item}</p>)}
    </motion.div>
  )
}

