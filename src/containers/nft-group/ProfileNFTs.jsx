import React, { useEffect,useState } from 'react'
import NFTCardInfo from '../../componentes/single_nft/NFTCardInfo';
import NFTImage from "../../componentes/image/image-card-nft-example.png"
import profilePhoto from "../../componentes/image/EDDI.png"
import { ObjetoDeccert } from '../../blockchain/ObjetoDeccert';
import { getCurrentAccount } from '../../blockchain/Blockchain';
import LoadingSpinner from '../../componentes/LoadingSpinner/LoadingSpinner';
import './estilo.css'


function ProfileNFTs({
 
}) {

  const [listaNFT, setlistaNFT] = useState([])
  const [loading, setLoading] = useState(false)


useEffect(async() => {
  setLoading(true)
  let objeto=new ObjetoDeccert()
  let account=await getCurrentAccount()
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
  setLoading(false)

}, [])

  
  return (
    <div className='nfts-group'>
        {loading?<LoadingSpinner/>
        :
        <div 
        className='div_container_profile_nfts'>
          {listaNFT.map((item,key)=>
          <NFTCardInfo
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
        </div>}
    </div>
  )
}

export default ProfileNFTs