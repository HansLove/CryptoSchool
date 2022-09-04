import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import HeroCertificaction from '../../containers/hero-section/HeroCertificaction'
import FactCertificationOne from '../../containers/fact/FactCertificationOne'
import FactCertificationTwo from '../../containers/fact/FactCertificationTwo'
import FactCertificationThree from '../../containers/fact/FactCertificationThree'
import FactCertificationFour from '../../containers/fact/FactCertificationFour'
import FactCertificationFive from '../../containers/fact/FactCertificationFive'
import NFT_Types from '../../componentes/NFT_Types/NFT_Types'
import {Data} from '../../data/Certifications_data.js'

function CertificationSingleView() {


  const {nameCertification}=useParams()

  const [DATA, setDATA] = useState({description:''})

  useEffect(() => {
    
    Data.forEach(element => {
      
      if(element.name==nameCertification){
        setDATA({...DATA,
          description:element.description,
          points:element.points,
          icon:element.icon,
          subtitle:element.subtitle,
          background: element.colors[0]
        })
        
      }
      
    });
    return () => {
      
    }
  }, [nameCertification])
  

  return (
    <div>
        <NFT_Types/>
        <HeroCertificaction description={DATA.description}/>

        {/* <FactCertificationOne/> */}

        {/* <FactCertificationTwo/> */}

        {/* <FactCertificationThree/> */}

        <FactCertificationFour 
        Icon={DATA.icon}
        points={DATA.points}/>

        <FactCertificationFive 
        subtitle={DATA.subtitle}
        background={DATA.background}
        />
    </div>
  )
}

export default CertificationSingleView