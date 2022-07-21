import React from 'react'
import CourseTest from '../../containers/test/CourseTest'
import SmartTest from '../../data/SmartTest.json'


function Test() {
  return (
    <div>
        {SmartTest.map((item,key)=><CourseTest 
        key={key}
        id={key}
        name={item.name}
        testName={item.testName}
        description={item.description}
        backgroundColor={item.backgroundColor}
        formData={item.formData}
        />)}
     
    </div>
  )
}

export default Test