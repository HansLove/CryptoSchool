import React, { useEffect, useState } from 'react'
import CardJobBank from '../../componentes/card/CardJobBank'
import { getUsers } from '../../componentes/ConexionAxios/ConexionAxios'
import userImage from '../../componentes/image/profile-photo-example.jpg'

function CardsContainer() {

    const [array, setarray] = useState([])

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
            

            <CardJobBank
                id={2} 
                userImage={userImage}
                userName="Jhon Smith"
                userPosition="Software Developer"
                userExperience="10 years experience"
                userCardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                userLocation="New York, EE. UU."
            />

            <CardJobBank
                id={3} 
                userImage={userImage}
                userName="Jhon Smith"
                userPosition="Software Developer"
                userExperience="10 years experience"
                userCardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                userLocation="New York, EE. UU."
            />

            <CardJobBank
                id={4} 
                userImage={userImage}
                userName="Jhon Smith"
                userPosition="Software Developer"
                userExperience="10 years experience"
                userCardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                userLocation="New York, EE. UU."
            />

            <CardJobBank
                id={5} 
                userImage={userImage}
                userName="Jhon Smith"
                userPosition="Software Developer"
                userExperience="10 years experience"
                userCardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                userLocation="New York, EE. UU."
            />

            <CardJobBank
                id={6} 
                userImage={userImage}
                userName="Jhon Smith"
                userPosition="Software Developer"
                userExperience="10 years experience"
                userCardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                userLocation="New York, EE. UU."
            />

            <CardJobBank
                id={7} 
                userImage={userImage}
                userName="Jhon Smith"
                userPosition="Software Developer"
                userExperience="10 years experience"
                userCardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                userLocation="New York, EE. UU."
            />

            <CardJobBank
                id={8} 
                userImage={userImage}
                userName="Jhon Smith"
                userPosition="Software Developer"
                userExperience="10 years experience"
                userCardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                userLocation="New York, EE. UU."
            />
        </div>
    )
}

export default CardsContainer