import React from 'react'
import TestHeader from '../../componentes/form-header/TestHeader'
import TestForm from '../form/TestForm'
import './estilo.css'

function CourseTest() {
  return (
    <div className='course-test-container'>
        <TestHeader
            courseName={"Matemáticas 01"}
            testName={"Test Operaciones Básicas"}
            testDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
            backgroundColor={"black"} 
            padding={"70px 0 70px"}
            textColor={"white"}
        />

        <TestForm/>
    </div>
  )
}

export default CourseTest