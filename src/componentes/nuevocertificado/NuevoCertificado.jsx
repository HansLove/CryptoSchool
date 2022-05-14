import React, { useState } from 'react'
import { ObjetoCertificado } from '../blockchain/Certificado'
import Cursos from '../cursos/Cursos'
import Input from '../Input/Input'
import Mined from '../image/mined_1.png'
import Insight from '../image/logo.png'
import '../../estilo/estilo_1.css'



function NuevoCertificado() {

  const [data, setdata] = useState({name:'',address:''})
  const [curso, setcurso] = useState(0)
  const [academia, setAcademia] = useState('')

  const GenerarNFT=async()=>{
    let ob=new ObjetoCertificado()
    await ob.load()

    let res=await ob.get(5)
    console.log('contrato ',res)

    if(!data.name.length>0) return
    await ob.create(data.name,curso,data.address)
  }

  return (
    <div style={{height:'100vh'}}>

        <h1 style={{width:'fit-content',display:'block',margin:'auto',
          fontSize:'2.6rem',fontFamily:'fantasy'
        }}>Emision de Certificados</h1>

        
        <div>
          <h1>Elige una academia</h1>

          <img onClick={()=>setAcademia('Mined')}
           style={{width:'45%',display:'inline-block',border:'1px solid pink',height:'30vh'}} src={Mined} />

        </div>

        {academia.length>0&&<>
        <h1>Elige un curso: </h1>
        <Cursos setcurso={setcurso}/>

        </>}

     
          <input value={data.name}
          className='input_1'
          onChange={(e)=>setdata({...data,name:e.target.value})}
          type="text" placeholder='Client Name'
          width='35%' fontSize='2rem' />

          <input value={data.address}
          className='input_1'
          onChange={(e)=>setdata({...data,address:e.target.value})}
          type="text" placeholder='Client Crypto Address' 
          width='35%' fontSize='1.6rem'/>

          <button className='button_1'
          style={{display:'block',margin:'auto',marginTop:'1%',fontSize:'2.3rem'}}
           onClick={GenerarNFT}>Generar NFT</button>


    </div>
  )
}

export default NuevoCertificado