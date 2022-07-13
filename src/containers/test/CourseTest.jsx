import React from 'react'
import TestHeader from '../../componentes/form-header/TestHeader'
import TestForm from '../form/TestForm'
import './estilo.css'

function CourseTest() {
  return (
    <div className='course-test-container'>
        <TestHeader
            courseName={"General Test"}
            testName={"Your first certificate NFT"}
            testDescription={"Need to get right 3/4 questions to be able to mint your DECCERT NFT Certificate"}
            backgroundColor={"black"} 
            padding={"70px 0 70px"}
            textColor={"white"}
        />

        <TestForm/>
    </div>
  )
}

export default CourseTest