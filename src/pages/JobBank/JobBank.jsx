import React from 'react'
import Header from '../../containers/job-bank/Header'
import CardsContainer from '../../containers/job-bank/CardsContainer'
import './estilo.css'

export default function JobBank() {
  return (
    <div>
      <Header/>
      <CardsContainer/>
    </div>
  )
}
