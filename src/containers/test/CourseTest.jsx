import React, { useState } from 'react'
import TestHeader from '../../componentes/form-header/TestHeader'
import Payment from '../../componentes/Payment/Payment'
import TestForm from '../form/TestForm'
import './estilo.css'

function CourseTest({
  name='General Test',
  testName="Your first certificate NFT",
  description="Need to get right 3/4 questions to be able to mint your DECCERT NFT Certificate",
  backgroundColor='black',
  textColor='white',
  formData,
  id
}) {


  const [selected, setselected] = useState(false)
  
  return (
    <div className='course-test-container'>

        <TestHeader
            onClick={()=>setselected(!selected)}
            courseName={name}
            testName={testName}
            testDescription={description}
            backgroundColor={backgroundColor} 
            padding={"70px 0 70px"}
            textColor={textColor}
        />
        {selected&&
        <Payment/>
        // <TestForm 
        // id={id}
        // formData={formData}/>
        }


    </div>
  )
}

export default CourseTest