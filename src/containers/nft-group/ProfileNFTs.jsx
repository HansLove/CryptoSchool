import React, { useEffect,useState } from 'react'
import NFTCardInfo from '../../componentes/single_nft/NFTCardInfo';
import NFTImage from "../../componentes/image/image-card-nft-example.png"
import StateIndicator from '../../componentes/state_indicator/StateIndicator'
import profilePhoto from "../../componentes/image/EDDI.png"
import { ObjetoDeccert } from '../../componentes/blockchain/ObjetoDeccert';
import { actulizarCuenta } from '../../componentes/blockchain/Blockchain';
import './estilo.css'

function ProfileNFTs({
 
}) {

  const [listaNFT, setlistaNFT] = useState([])


useEffect(async() => {
  let objeto=new ObjetoDeccert()
  let account=await actulizarCuenta()
  await objeto.load()
  let _total=await objeto.getTotal()
  var _lista=[]

  for (let index = 1; index < parseInt(_total)+1; index++) {
      var certificado=await objeto.get(index)
      let _uri=await objeto.getURI(index)
    
      if(certificado['owner']==account){
          _lista.push({certificado,uri:_uri})
      }
  }
  
  
  setlistaNFT(_lista)


}, [])

  
  return (
    <div className='nfts-group'>
        {listaNFT.map((item,key)=><NFTCardInfo
        blockNumber={item.certificado.blockNumber}
        time={item.certificado.time}
        uri={item.uri}
        background='lightgreen'
        NFTImage={NFTImage} 
        NFTName={"Recycling in Tulum"} 
        NFTOwnerImage={profilePhoto}
        Valid={true}
        NFTSystem={"BSC"}
        key={key}/>)}
        
    </div>
  )
}

export default ProfileNFTs