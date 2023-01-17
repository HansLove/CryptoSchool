import React from 'react'
import Test from '../../containers/test/Test'
import SmartTest from '../../data/SmartTest.json'


//Usuario puede ver todas las pruebas
export default function Showcase() {
  return (
    <div>
        {SmartTest.map((item,key)=><Test 
        key={key}
        id={key}
        name={item.name}
        testName={item.testName}
        description={item.description}
        backgroundColor={item.backgroundColor}
        formData={item.formData}
        uri={item.uri}
        />)}
     
    </div>
  )
}

