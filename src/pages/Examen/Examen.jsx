import React from 'react'
import {useParams} from 'react-router-dom'

export default function Examen() {
  const {id}=useParams()

  return (
    <div>Examen
      <p>{id}</p>
    </div>
  )
}
