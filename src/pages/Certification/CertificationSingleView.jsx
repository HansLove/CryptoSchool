import React from 'react'
import HeroCertificaction from '../../containers/hero-section/HeroCertificaction'
import FactCertificationOne from '../../containers/fact/FactCertificationOne'
import FactCertificationTwo from '../../containers/fact/FactCertificationTwo'
import FactCertificationThree from '../../containers/fact/FactCertificationThree'
import FactCertificationFour from '../../containers/fact/FactCertificationFour'
import FactCertificationFive from '../../containers/fact/FactCertificationFive'
import NFT_Types from '../../componentes/NFT_Types/NFT_Types'

function CertificationSingleView() {
  return (
    <div>
        <NFT_Types/>
        <HeroCertificaction/>
        <FactCertificationOne/>
        <FactCertificationTwo/>
        <FactCertificationThree/>
        <FactCertificationFour/>
        <FactCertificationFive/>
    </div>
  )
}

export default CertificationSingleView