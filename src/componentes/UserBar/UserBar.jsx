import React from 'react'
import './estilo.css'

function UserBar({name,image,description}) {
  return (
    <div className='div_main_user_bar'>
        <div style={{display:'flex'}}>
        <img
        className='img_user_bar'
         src={image} alt="" srcset="" />

        <h2 className='p_user_name'>{name}</h2>
        </div>

        <p>{description}</p>

    </div>
  )
}

export default UserBar