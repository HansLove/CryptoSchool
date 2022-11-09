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
                    <h2>Proof of Energy</h2>
                    At the moment in which the human brain compiles information, we had a successful energetic exchange.
                    With NFTs, we can keep track of this exchange.
                </li>

                <li>
                    <button className='button_number'>2</button>
                    <h2>Alternate Approach: NFT Public API</h2>
                    Public database that gives full ownership of the NFTs resume to users
                    and makes the information open to all.
                    </li>

                <li>
                    <button className='button_number'>3</button>
                    <h2>Blockchain – the solution</h2>
                    One solution proposed to the recruitment industry is the blockchain to use keep track of all
                    the skills and knowladge got by an user inside our ecosystem.         
                </li>

                <li>
                    <button className='button_number'>4</button>
                    <h2>Decentralization – the way to go</h2>
                    The number one underlying goal of the protocol is to achieve full decentralization.
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