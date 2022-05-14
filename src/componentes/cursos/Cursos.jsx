import React from 'react'
import SingleCurso from './SingleCurso'

function Cursos({setcurso}) {


  let All=[
    "Bitcoin Fundamentals I",
    "Bitcoin Fundamentals II",
    "Blockchain Tech I",
    "Programando Bitcoin I",
    "Programando Bitcoin II",
    "Mineria Bitcoin",
    "Programando Bitcoin III",
    "Web3 I",
    "Tokenomics"
  ]


  let array=[
    {name:"Bitcoin Fundamentals I",tipo:1},
    {name:"Bitcoin Fundamentals II",tipo:2},
    {name:"Blockchain Tech I",tipo:3},
  ]

  let array2=[
    {name:"Programando Bitcoin I",tipo:4,require:[1,2]},
    {name:"Programando Bitcoin II",tipo:5,require:[1,2]},
    {name:"Mineria Bitcoin",tipo:6,require:[2,3]},
  ]

  let array3=[
    {name:"Programando Bitcoin III",tipo:7,require:[4,5]},
    {name:"Web3 I",tipo:8,require:[4,3]},
    {name:"Tokenomics",tipo:9,require:[3,4,5]},
  ]

  const estilo={width:'fit-content',display:'block',margin:'auto',
  fontFamily:'monospace',fontSize:'2.2rem',marginTop:'1%'}

  return (
    <div style={{height:'100vh'}}>
      
        <h1 style={{width:'fit-content',display:'block',margin:'auto',
            fontFamily:'monospace',fontSize:'2.6rem'}}>Nuestros cursos</h1>

        <h2 style={estilo}>Nivel 1</h2>

        {array.map((item,index)=><div style={{display:'inline-block',width:'32%',
          marginLeft:'0.5%'}}>
        <SingleCurso onClick={()=>setcurso(item.tipo)}
         name={item.name}/>
         </div>
         )}

        <h2 style={estilo}>Nivel 2</h2>

        {array2.map((item,index)=><div style={{display:'inline-block',width:'32%',
          marginLeft:'0.5%'
          }}>
            
        <SingleCurso onClick={()=>setcurso(item.tipo)}
         name={item.name}/>
         <p style={{fontFamily:'monospace',fontSize:'1.2rem'}}>Necesitas:</p>
         {item.require.map((curso,index2)=><p style={{fontFamily:'monospace',fontSize:'1.2rem'}}>{All[curso-1]}</p>)}
         </div>
         )}


        <h2 style={estilo}>Nivel 3</h2>

        {array3.map((item,index)=><div style={{display:'inline-block',width:'32%',
          marginLeft:'0.5%'
          }}>
        <SingleCurso onClick={()=>setcurso(item.tipo)}
        name={item.name}/>
        <p style={{fontFamily:'monospace',fontSize:'1.2rem'}}>Necesitas:</p>
        {item.require.map((curso,index2)=><p style={{fontFamily:'monospace',fontSize:'1.2rem'}}>{All[curso-1]}</p>)}
        </div>
        )}
      

    </div>
  )
}

export default Cursos