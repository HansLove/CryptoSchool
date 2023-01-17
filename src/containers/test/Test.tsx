import { useEffect, useState } from 'react'
import { ContractServer } from '../../blockchain/ContractServer'
import Payment from '../../componentes/Payment/Payment'
import Text from '../../componentes/Texto/Text'
import TestForm from '../form/TestForm'
import './estilo.css'


export default function Test({
  name='General Test',
  testName="Your first certificate NFT",
  description="Need to get right 3/4 questions to be able to mint your DECCERT NFT Certificate",
  backgroundColor='black',
  textColor='white',
  formData=[],
  id,
  uri//metadata in the blockchain
}:any) {


  const [alreadyPaid, setalreadyPaid] = useState(false)

  useEffect(() => {
    async function init(){
      let res=await CheckPayment()
      setalreadyPaid(res)

    }
    init()
  }, [])
  

  let objeto=new ContractServer()

  const CheckPayment=async()=>{
      await objeto.load()
      let userAlreadyPaid=await objeto.check(uri)
      return userAlreadyPaid
  }

  const Pay=async()=>{
      await objeto.load()
      let res=await objeto.pay(uri)
      if(res)setalreadyPaid(true)

  }  

  
  return (
    <div className='course-test-container'>
      
        {/* El usuario paga servidor y accede al examen*/}
        <div className='background_header' 
          style={{backgroundColor:backgroundColor}}>

          <Payment/>
          
          {!alreadyPaid&&
          <button onClick={Pay}>
              Pay
          </button>    
          }   

          <div className='div_container'>

              <Text 
              text={name} 
              fontSize={"24px"} 
              fontWeight={"500"} 
              textColor={textColor} 
              margin={"0 0 18px"}/>
              <Text text={testName} fontSize={"40px"} 
              fontWeight={"500"} textColor={textColor} 
              margin={"0 0 30px"}/>
              
              <div className='header-description'>
                  <Text 
                      text={description} 
                      fontSize={"1.2rem"} 
                      fontWeight={"400"} 
                      textColor={textColor}
                      margin={"0"}/>
              
              </div>

          </div>

        </div>        
          
        {alreadyPaid&&
         <TestForm 
         id={id}
         uri={uri}
         formData={formData}/>
        }

    </div>
  )
}
