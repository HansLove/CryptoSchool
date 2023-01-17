import { useState } from 'react'
import {GiCancel} from 'react-icons/gi'
import './estilo.css'

export default function Sections() {

    const list=[
        {name:"Front-end",color:'DarkMagenta',sections:["UI/UX design","Web development","Mobile web development","JavaScript development","Accessibility","Performance Optimization","Cross-browser compatibility","Progressive Web App(PWA)","Motion design","SEO"]},
        {name:"Back-end",color:'Violet',sections:["Database managment","API development","Server-side logic","Security","Deployment","Monitoring and maintenance"]},
        {name:"Full-stack",color:'Orchid',sections:["Front-end development","Backend development","API development","Database managment","Server-side logic","Security","Deployment","Monitoring and maintenance","Mobile development","Cloud and infrastructure"]},
        {name:"Mobile develpment",color:'Fuchsia',sections:["User Interface Design","Application Architecture","Platform-specific Development","Cross-platform Development","API Integration","Push Notifications","Testing and QA"]},
        {name:"Game develpment",color:'Magenta',sections:["Game design","Art and animation","Programming","Audio","Level design","Testing","Gameengine integration","Platform-specific","Multiplayer","Virtual & Augmented reality","Monetization"]},
        {name:"Cloud develpment",color:'MediumOrchid',sections:["Cloud Architecture","Cloud platforms","Containerization and Orchestration","Serverless","Data Management","Security","Networking","Monitoring and Logging","Cost Optimization"]},
        {name:"Data Science",color:'MediumPurple',sections:["Data Exploration and Cleaning","Data Analysis","Data Modeling","Data Interpretation","Data Engineering","Deployment","Monitoring","Ethics and Fairness","Communication and Collaboration"]},
        {name:"AI/ML development",color:'RebeccaPurple',sections:["Problem definition and data collection","Data preprocessing and exploration","Model design and training","Model evaluation","Model deployment","Explainability and interpretability","Scaling","Security"]},
        {name:"DevOps",color:'BlueViolet',sections:["Version Control","Continuous Integration","Continuous Deployment","Configuration Management","Infrastructure as Code","Containerization and Orchestration","Monitoring and Logging","Collaboration and Communication"]},
        {name:"Cybersecurity",color:'DarkViolet',sections:["Network Security","Endpoint Security","Cloud Security","Application Security","Identity and Access Management","Incident Response","Compliance and regulatory","Risk Management","Security operations"]},
    ]

    const [selected, setselected] = useState('')
    const [internal_sections, setInternalSections] = useState([])

  return (
    <div className='div_container_sections'>

        {selected===''&&list.map((item,key)=><div 
        className='div_section'
        onClick={()=>{
            setselected(item.color)
            setInternalSections(item.sections)
        }}
        style={{background:item.color}} key={key}>
            {item.name}
        </div>)}
        
        {selected!==''&&<div className='div_inside'
        style={{background:selected}}>
        <button onClick={()=>setselected('')}><GiCancel/></button>

        {internal_sections.map((item,key)=><div 
        className='internal'
        key={key}>{item}</div>)}
        </div>}

    </div>
  )
}

