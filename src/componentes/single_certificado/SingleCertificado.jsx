import React, { useEffect, useState } from 'react'
import { ObjetoCertificado } from '../blockchain/Certificado'
import Logo from '../image/logo.png'
import './estilo.css'

function SingleCertificado({id=1}) {

    const [data, setdata] = useState({})

    useEffect(() => {
        getData()
    }, [])
    
const getData=async()=>{
    let ob=new ObjetoCertificado()
    await ob.load()
    let res=await ob.get(id)
    console.log('res: ',res)
    setdata({...data,userName:res.name,academy:res.academy,address:res.owner,
        blockNumber:res.blockNumber,class:res.class})
    
    }
    
  return (
    <div className='div_central border radial-repeating'>
        <img width='15%' src={Logo}/>
        <h1 className='h1_titulo_certificado'>Certificado</h1>
        <p>Participacion en: {data.class}</p>
        <p>{new Date().toDateString()} (Block number: {data.blockNumber})</p>
        <p>{data.userName}</p>
        {/* <p>{data.academy}</p> */}
        <p>{data.address}</p>
        
    </div>
  )
}

export default SingleCertificado