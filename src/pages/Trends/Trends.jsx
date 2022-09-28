import React from 'react'
import Key from '../../componentes/image/Caca_1.png'
import './estilo.css'


function Trends() {
  return (
    <div className='div_trends'
    id='id_trends'>
        <h1>Trends</h1>

        <div style={{display:'flex'}}>

            <ul>
                <li>
                    <button className='button_number'>1</button>
                    <h2>Proof of Action</h2>
                    The protocol allows keeping track of certifiable shares issued by users and financial entities
                </li>

                <li>
                    <button className='button_number'>2</button>
                    <h2>Alternate Approach: NFT Public API</h2>
                    Public database that gives full ownership of the NFTs resume to users</li>

                <li>
                    <button className='button_number'>3</button>
                    <h2>Blockchain – the solution</h2>
                    One solution proposed to the recruitment industry is the blockchain to use keep track of all
                    the skills and knowladge got by an user inside our ecosystem.         
                </li>

                <li>
                    <button className='button_number'>4</button>
                    <h2>Third-Party Services as work providers</h2>
                    Third Party companies providing services and demand for workers with a specific profile 
                    using our database based on digital assets.            
                </li>

               
            </ul>

            <img 
            style={{width:'40%'}}
            src={Key}/>
        </div>

    </div>
  )
}

export default Trends