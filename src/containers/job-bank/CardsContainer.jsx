import React, { useEffect, useState } from 'react'
import CardJobBank from '../../componentes/card/CardJobBank'
import { getUsers } from '../../componentes/ConexionAxios/ConexionAxios'

function CardsContainer() {

    const [array, setarray] = useState([])


    let fake_list=[
        {name:'Ramon Gonzales',position:'Math Teacher',experience:'4 years',description:'Im in love with Math, wanna share that love wit my students',location:'Guanajuato, MX',
        image:"https://firebasestorage.googleapis.com/v0/b/taloon-2fb00.appspot.com/o/Fotos%20personas%2FChester_1.jpeg?alt=media&token=29a71a5b-bfe7-4046-8bd2-b2e7042152b4"}
    
        ,{name:'Alejandra Tarello',position:'NFT Designer',experience:'2 years',description:'Im in love with Art, wanna share that love wit my students',location:'CDMX, MX',
        image:
        "https://firebasestorage.googleapis.com/v0/b/taloon-2fb00.appspot.com/o/Fotos%20personas%2FAlejandraTarello1.jpeg?alt=media&token=3f5fca45-7692-498e-b0f9-499790768087"
        }

        ,{name:'Arturo Fong',position:'English',experience:'7 years',description:'Im in love with english and god',location:'CDMX, MX',
        image:
        "https://firebasestorage.googleapis.com/v0/b/taloon-2fb00.appspot.com/o/Fotos%20personas%2FArturo_greek_1.png?alt=media&token=1c378497-5ff7-4806-88a1-d9351d5ef960"
        }

        ,{name:'Beke Winken',position:'Artist',experience:'3 years',description:'Need to keep creative as much as i can',location:'CDMX, MX',
        image:"https://firebasestorage.googleapis.com/v0/b/taloon-2fb00.appspot.com/o/Fotos%20personas%2FBekeValero_1.jpeg?alt=media&token=afbee1a7-2ec0-4532-ae50-64094e12f0ae"
        }
    
    ]

    useEffect(async() => {
        
        let list=await getUsers()

        setarray(list)
    
      return () => {
        
      }
    }, [])
    
    
    return (
        <div className='job-bank-cards'>

            {array.map((item,key)=><CardJobBank  
                id={key} 
                userImage={item.image}
                userName={item.name}
                userPosition={item.occupation}
                userExperience={item.address}
                userCardDescription={item.description}
                userLocation="CDMX, Mexico."
            />)}
            
            {fake_list.map((item,key)=>            
            <CardJobBank
                id={key+1} 
                userImage={item.image}
                userName={item.name}
                userPosition={item.position}
                userExperience={item.experience}
                userCardDescription={item.description}
                userLocation={item.location}
            />)}





        </div>
    )
}

export default CardsContainer