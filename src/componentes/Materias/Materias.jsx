import React from 'react'
import './estilo.css'

function Materias() {
  return (
    <div>
        <div 
        style={{background:'blue'}}
        className='seccion_materia'>
            <p>Math</p>
        </div>

        <div
        style={{background:'purple'}}
         className='seccion_materia'>
            <p>Technology</p>
            
        </div>

        <div 
        style={{background:'teal'}}
        className='seccion_materia'>
            
            <p>Medicine</p>
        </div>

        <div
        style={{background:'navy'}}
         className='seccion_materia'>
            
            <p>Art</p>
        </div>
        
        <div
        style={{background:'darkred'}}
        className='seccion_materia'>
            <p>Physics</p>
        </div>

    </div>
  )
}

export default Materias