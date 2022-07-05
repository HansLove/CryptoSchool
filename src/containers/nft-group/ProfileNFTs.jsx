import React from 'react'
import NFTCardInfo from '../../componentes/single_nft/NFTCardInfo';
import NFTImage from "../../componentes/image/image-card-nft-example.png"
import StateIndicator from '../../componentes/state_indicator/StateIndicator'
import profilePhoto from "../../componentes/image/EDDI.png"
import './estilo.css'

function ProfileNFTs() {
  return (
    <div className='nfts-group'>
      <div className='group-one'>

        <div className='group-name'>
          <StateIndicator text="Recycling" fontSize={"16px"} 
          fontWeight={"bold"} textColor={"white"} 
          backgroundColor={"lightgreen"} borderRadius={"10px"} padding={"20px 10px"} margin={"10px 0"} />
        </div>

        <div className='group-cards-container'>

          <NFTCardInfo
          background='lightgreen'
          NFTImage={NFTImage} 
          NFTName={"Recycling in Tulum"} 
          NFTOwnerImage={profilePhoto}
          Valid={true}
          NFTSystem={"BSC"} />

          <NFTCardInfo
          background='lightgreen'
          NFTImage={NFTImage} 
          NFTName={"Clean Ocean"} 
          NFTOwnerImage={profilePhoto}
          Valid={true}
          NFTSystem={"BSC"} />

          <NFTCardInfo
          background='lightgreen'
          NFTImage={NFTImage} 
          NFTName={"Cool Planet"} 
          NFTOwnerImage={profilePhoto}
          Valid={true}
          NFTSystem={"BSC"} />

          <NFTCardInfo
          background='lightgreen'
          NFTImage={NFTImage} 
          NFTName={"Green Smile"} 
          NFTOwnerImage={profilePhoto}
          Valid={false}
          NFTSystem={"BSC"} />
        </div>
      </div>

      <div className='group-two'>
        <div className='group-name'>
          <StateIndicator 
          text="Educational" 
          fontSize={"16px"} 
          fontWeight={"bold"} 
          textColor={"white"} 
          backgroundColor={"lightcoral"} 
          borderRadius={"10px"} padding={"20px 10px"} margin={"10px 0"} />
        </div>

        <div className='group-cards-container'>
        <NFTCardInfo
          background='lightcoral'
          NFTImage={NFTImage} 
          NFTName={"Math I"} 
          NFTMinter='Griffin´s Academy'
          NFTOwnerImage={profilePhoto}
          Valid={true}
          NFTSystem={"BSC"} />

        <NFTCardInfo
          background='lightcoral'
          NFTImage={NFTImage} 
          NFTName={"History of Mexico"} 
          NFTOwnerImage={profilePhoto}
          Valid={false}
          NFTSystem={"BSC"} />

        <NFTCardInfo
          background='lightcoral'
          NFTImage={NFTImage} 
          NFTName={"Math II"} 
          NFTMinter='Griffin´s Academy'
          NFTOwnerImage={profilePhoto}
          Valid={true}
          NFTSystem={"BSC"} />

        <NFTCardInfo
          background='lightcoral'
          NFTImage={NFTImage} 
          NFTName={"Math III"} 
          NFTMinter='Griffin´s Academy'
          NFTOwnerImage={profilePhoto}
          Valid={true}
          NFTSystem={"BSC"} />          

        </div>
      </div>

      <div className='group-three'>
        <div className='group-name'>
          <StateIndicator 
          text="Participation" 
          fontSize={"16px"} 
          fontWeight={"bold"} textColor={"white"} 
          backgroundColor={"navy"} borderRadius={"10px"} padding={"20px 10px"} margin={"10px 0"} />
        </div>

        <div className='group-cards-container'>
          <NFTCardInfo 
          background='navy'
          NFTImage={NFTImage} 
          NFTName={"Zoom June 28 2022"} 
          NFTMinter={"Insight"} 
          NFTOwnerImage={profilePhoto} 
          Valid={true} 
          NFTSystem={"BSC"} />

          <NFTCardInfo 
          background='navy'
          NFTImage={NFTImage} 
          NFTName={"Zoom June 28 2022"} 
          NFTMinter={"Insight"} 
          NFTOwnerImage={profilePhoto} 
          Valid={true} 
          NFTSystem={"BSC"} />

          <NFTCardInfo 
          background='navy'
          NFTImage={NFTImage} 
          NFTName={"Zoom June 29 2022"} 
          NFTMinter={"Insight"} 
          NFTOwnerImage={profilePhoto} 
          Valid={true} 
          NFTSystem={"BSC"} />

          <NFTCardInfo 
          background='navy'
          NFTImage={NFTImage} 
          NFTName={"Zoom July 04 2022"} 
          NFTMinter={"Insight"} 
          NFTOwnerImage={profilePhoto} 
          Valid={true} 
          NFTSystem={"BSC"} />

        </div>
      </div>

      <div className='group-four'>
        <div className='group-name'>
          <StateIndicator text="Charity" fontSize={"16px"} 
          fontWeight={"bold"} textColor={"white"} 
          backgroundColor={"orange"} borderRadius={"10px"} 
          padding={"20px 10px"} margin={"10px 0"} />
        </div>

        <div className='group-cards-container'>
          <NFTCardInfo 
          background='orange'
          NFTImage={NFTImage} 
          NFTName={"Happy Pets"}
          NFTOwnerImage={profilePhoto} 
          Valid={true}
          NFTSystem={"BSC"} />

          <NFTCardInfo 
          background='orange'
          NFTImage={NFTImage} 
          NFTName={"Driving No Drink"}
          NFTOwnerImage={profilePhoto} 
          Valid={true}
          NFTSystem={"BSC"} />

          <NFTCardInfo 
          background='orange'
          NFTImage={NFTImage} 
          NFTName={"No bullyng"}
          NFTOwnerImage={profilePhoto} 
          Valid={true}
          NFTSystem={"BSC"} />

          <NFTCardInfo 
          background='orange'
          NFTImage={NFTImage} 
          NFTName={"Today for you"}
          NFTOwnerImage={profilePhoto} 
          Valid={true}
          NFTSystem={"BSC"} />

        </div>
      </div>

      <div className='group-five'>
        <div className='group-name'>
          <StateIndicator text="Authenticity" fontSize={"16px"} 
          fontWeight={"bold"} textColor={"white"} 
          backgroundColor={"hotpink"} borderRadius={"10px"} padding={"20px 10px"} margin={"10px 0"} />
        </div>

        <div className='group-cards-container'>
          <NFTCardInfo 
          background='hotpink'
          NFTImage={NFTImage}
          NFTName={"Gold Watch"}
          NFTOwnerImage={profilePhoto} 
          NFTValue={"1.32 ETH"} NFTSystem={"BSC"} />

          <NFTCardInfo 
          background='hotpink'
          NFTImage={NFTImage}
          NFTName={"Original Skin"}
          NFTMinter='Minecrif'
          NFTOwnerImage={profilePhoto} 
          NFTValue={"1.32 ETH"} NFTSystem={"BSC"} />

          <NFTCardInfo 
          background='hotpink'
          NFTImage={NFTImage}
          NFTName={"Lottery Ticket"}
          NFTMinter='Random Games'
          NFTOwnerImage={profilePhoto} 
          NFTValue={"1.32 ETH"} NFTSystem={"BSC"} />

          <NFTCardInfo 
          background='hotpink'
          NFTImage={NFTImage}
          NFTName={"First place"}
          NFTMinter='Random Games'
          NFTOwnerImage={profilePhoto} 
          NFTValue={"1.32 ETH"} NFTSystem={"BSC"} />


        </div>
      </div>

      <div className='group-six'>
        <div className='group-name'>
          <StateIndicator text="Guarantee" fontSize={"16px"} fontWeight={"bold"} textColor={"white"} 
          backgroundColor={"indigo"} borderRadius={"10px"} padding={"20px 10px"} margin={"10px 0"} />
        </div>

        <div className='group-cards-container'>
          <NFTCardInfo 
          background='indigo'
          NFTImage={NFTImage} 
          NFTName={"Car Nikan"} 
          NFTMinter='Nikan'
          NFTOwnerImage={profilePhoto} 
          Valid={true} 
          NFTSystem={"BSC"} />

          <NFTCardInfo 
          background='indigo'
          NFTImage={NFTImage} 
          NFTName={"Washer"} 
          NFTMinter='Nikan'
          NFTOwnerImage={profilePhoto} 
          Valid={true} 
          NFTSystem={"BSC"} />

          <NFTCardInfo 
          background='indigo'
          NFTImage={NFTImage} 
          NFTName={"Game Console"} 
          NFTMinter='Y Box'
          NFTOwnerImage={profilePhoto} 
          Valid={true} 
          NFTSystem={"BSC"} />

          <NFTCardInfo 
          background='indigo'
          NFTImage={NFTImage} 
          NFTName={"Laptop"} 
          NFTMinter='Cool Stuff'
          NFTOwnerImage={profilePhoto} 
          Valid={true} 
          NFTSystem={"BSC"} />

        </div>
      </div>

    </div>
  )
}

export default ProfileNFTs