import {GiWaterRecycling} from 'react-icons/gi'
import {MdCastForEducation} from 'react-icons/md'
import {GiHand} from 'react-icons/gi'
import {BiDonateHeart} from 'react-icons/bi'
import {BsGem} from 'react-icons/bs'
import {SiAdguard} from 'react-icons/si'

const size1=180

export const Data=[
    {
        name:'recycling',
        description:"We believe in a green and clean world for the next generations. We know that the blockchain can help a lot in this challenge. Our protocol allows us to collaborate with entities that want to test and have a record of their recycling.",
        points:[
            "Proof that an entity did green stuff",
            "Encourage recycling registration",
            "Systematize recycling in the protocol"
        ],
        subtitle:"Dont wanna wait, green planet now! Be part of Deccert Recycling team.",
        colors:['lightgreen','lightblue'],
        icon:<GiWaterRecycling size={size1}/>},
    
    {
        name:'educational',
        description:"Flexible system that lets the users of the network to build an educational reputation.",
        points:[
            "Make study plans more flexible",
            "Encourage multidiscipline in individuals",
            "Help users monetize their knowledge"
        ],
        subtitle:"Want to learn, explore more of our amazing educational content.",        
        colors:['lightcoral','yellow','black'],
        icon:<MdCastForEducation size={size1}/>},

    {
        name:'participation',
        description:"In the digital age, many human activities have moved to a distributed environment. Our system allows users to generate proof of attendance at an event.",
        points:[
            "Record that users participated in an event",
            "Accumulation of assists",
            "Adaptation to the job market"
        ],
        subtitle:"I need to proof participation, how can i start?",        
        colors:['navy','orange'],icon:<GiHand size={size1}/>},
    
    {
        name:'charity',
        description:"Tracking system that allows users of our network to contribute and help causes that they consider noble or neccesary.",
        points:[
            "Non-profit tokenization",
            "Donation tracking and transparency",
            "Receiver verification"
        ],
        subtitle:"I can help, its my will, this is the way.",        
        colors:['orange','orange'],
        icon:<BiDonateHeart size={size1}/>},

    {
        name:'authenticity',
        description:"Our network allows to give an extra layer of validity over other systems or assets.",
        points:[
            "Verify the seriousness of a digital asset",
            "Add security to the quality of an asset",
            "Be a point of reference for small projects"
        ],
        subtitle:"My digital asset needs this service, how can i move to the next step?",        
        colors:['hotpink','orange'],
        icon:<BsGem size={size1}/>},



    // {name:'Guarantee',colors:['indigo','orange'],icon:<SiAdguard size={size1}/>},

]