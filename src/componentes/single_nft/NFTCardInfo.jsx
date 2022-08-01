import React from 'react';
import Image from '../imagen/Image';
import StateIndicator from '../state_indicator/StateIndicator';
import Text from '../Texto/Text';
import {MdGppGood} from 'react-icons/md'
import {FcCancel} from 'react-icons/fc'
import './estilo.css'

function NFTCardInfo({NFTImage, 
    NFTName, 
    NFTSystem, 
    NFTMinter='DECCERT', 
    Valid=false,
    NFTOwnerImage, 
    background='black'}) {
  return (
    <div 
    style={{background: 'linear-gradient(45deg,black,'+background+')'}}
    className="card-container">
        <div className='card-image'>
            <Image src={NFTImage} alt={"nft-img"} width={"14rem"} height={"auto"} borderRadius={"1rem"}/>
        </div>

        <div className='card-name'>
            <Text text={NFTName} fontSize={"20px"} textColor={"white"} margin={"0"}/>
            <StateIndicator text={NFTSystem} fontSize={"10px"} fontWeight={"bold"} textColor={"white"} backgroundColor={"#3B37FF"} borderRadius={"5px"} padding={"4px 10px"}/>
        </div>

        <div className='card-info'>
            <div className='owner-info'>
                <Image src={NFTOwnerImage} alt={"profile-photo"} width={"2rem"} height={"auto"} borderRadius={"5px"}/>
                <div className='owner-name'>
                    <Text text={"Minted by"} fontSize={"10px"} textColor={"white"} margin={"0"}/>
                    <Text text={NFTMinter} fontSize={"12px"} textColor={"white"} margin={"0"}/>
                </div>

            </div>

            <div className='nft-current-bid'>
                <Text text={"Valid"} fontSize={"10px"} textColor={"white"} margin={"0"}/>
                {Valid?<MdGppGood
                size={20}
                style={{color:'snow'}}/>
                :
                <FcCancel size={20}/>
                }

            </div>
        </div>

    </div>
  )
}

export default NFTCardInfo;