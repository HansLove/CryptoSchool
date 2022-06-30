import React from 'react'
import Key from '../../componentes/image/Caca_1.png'
import './estilo.css'


function Trends() {
  return (
    <div className='div_trends'
    id='id_trends'
    >
        <h1>Trends</h1>

        <div style={{display:'flex'}}>

            <ul>
                <li>
                    <button className='button_number'>1</button>
                    <h2>Recruitment: An Information Asymmetry Problem</h2>
                    While it is often difficult to judge if the job seeker is being totally honest and not inaccurately enhancing themselves. 
                    Likewise, for the candidates, it is rather difficult to assess what the company culture, the team culture is like.
                </li>

                <li>
                    <button className='button_number'>2</button>
                    <h2>Alternate Approach: Internal Referrals</h2>
                    Nearly 80% of all job openings are not posted online as companies rely more on word of mouth and internal recommendations than on external hiring. </li>

                <li>
                    <button className='button_number'>3</button>
                    <h2>Blockchain – a potential solution</h2>
                    One solution proposed to the recruitment industry was to use Artificial Intelligence (AI) Technology. 
                    While AI has made significant strides in recent times,
                    its application to the Recruitment Industry seems to have provided limited results.            
                </li>

                <li>
                    <button className='button_number'>4</button>
                    <h2>Third-Party Services – to address Information Asymmetry</h2>
                    Third Party companies providing services ranging from Background and Reference Checks to those catering to specific employment needs such as conducting drug tests, Psychometric tests, etc.            
                </li>

                <li>
                    <button className='button_number'>5</button>
                    <h2>Recruitment - Truly a problem of lack of Reliable & Trusted Data</h2>
                    While the existing recruitment processes are costly, time-consuming, exhausting, and stressful for everyone involved, still being largely ineffective.
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