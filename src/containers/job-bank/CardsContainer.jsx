import React from 'react'
import CardJobBank from '../../componentes/card/CardJobBank'
import userImage from '../../componentes/image/profile-photo-example.jpg'

function CardsContainer() {
    return (
        <div className='job-bank-cards'>
            <CardJobBank  
                id={1} 
                userImage={userImage}
                userName="Jhon Smith"
                userPosition="Software Developer"
                userExperience="10 years experience"
                userCardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                userLocation="New York, EE. UU."
            />

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