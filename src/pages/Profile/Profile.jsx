import React, { useEffect, useState } from 'react'
import NothingHere from '../../animations/NothingHere/NothingHere'
import { actulizarCuenta } from '../../componentes/blockchain/Blockchain'
import { ObjetoDeccert } from '../../componentes/blockchain/ObjetoDeccert'
import SingleNFT from '../../languaje/SingleNFT/SingleNFT'
import {motion} from 'framer-motion/dist/framer-motion'
import './estilo.css'
import { getUserData } from '../../componentes/ConexionAxios/ConexionAxios'
import UserBar from '../../componentes/UserBar/UserBar'
import Materias from '../../componentes/Materias/Materias'

export default function Profile() {

    const [listaNFT, setlistaNFT] = useState([])
    const [data, setdata] = useState({name:'',image:''})


    useEffect(async() => {
      let objeto=new ObjetoDeccert()
      let account=await actulizarCuenta()
      await objeto.load()
      let _total=await objeto.getTotal()
      var _lista=[]

      for (let index = 1; index < _total+1; index++) {
          let certificado=await objeto.get(index)
          // console.log('certificado: ',certificado)
          if(certificado['owner']==account)_lista.push(certificado)
      }
      setlistaNFT(_lista)

      let resultado=await getUserData(account)
      setdata(resultado)
      
    
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

        <Materias/>
        {listaNFT.map((item,key)=><SingleNFT 
        id={item[0]}
        name={item['name']}
        time={item['time']}
        data={item['data']}
        blockNumber={item['blockNumber']}
        key={key}/>)}

        {listaNFT.length==0&&
        <>

        <NothingHere width='20%'/>
        </>}
    </motion.div>
  )
}

