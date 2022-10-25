import React, { useEffect, useState } from 'react';
import Image from '../imagen/Image';
import StateIndicator from '../state_indicator/StateIndicator';
import Text from '../Texto/Text';
import {MdGppGood} from 'react-icons/md'
import {FcCancel} from 'react-icons/fc'
import axios from 'axios';
import './estilo.css'

function NFTCardInfo({
    uri,
    time,
    NFTImage,  
    NFTSystem, 
    Valid=false,
    NFTOwnerImage
}) {

        const [metaData, setmetaData] = useState({})
        const [background, setbackground] = useState('black')

        useEffect(() => {
            
            async function Load(){
                let res=await getMetaData(uri) 
                setmetaData(res)
                if(res.type=='Educational')setbackground('lightcoral')
                
            }
            Load()


        }, [])
        

        const getMetaData=async(_uri)=>{
            var data
            await axios.get(_uri).then((res)=>data=res.data)
            return data
      
      }        

        
  return (
    <div 
    className="card-container"
    style={{
        background: 'linear-gradient(45deg,black,'+background+')'}}>
        <div className='card-image'>
            <Image src={NFTImage} alt={"nft-img"} width={"14rem"} height={"auto"} borderRadius={"1rem"}/>
        </div>

        <div className='card-name'>
            <Text text={metaData.name} fontSize={"20px"} textColor={"white"} margin={"0"}/>
            <StateIndicator text={NFTSystem} fontSize={"10px"} fontWeight={"bold"} textColor={"white"} backgroundColor={"#3B37FF"} borderRadius={"5px"} padding={"4px 10px"}/>
        </div>

        <div className='card-info'>
            <div className='owner-info'>
                <Image src={NFTOwnerImage} alt={"profile-photo"} width={"2rem"} height={"auto"} borderRadius={"5px"}/>
                <div className='owner-name'>
                    <Text text={"Minted on"} fontSize={"10px"} textColor={"white"} margin={"0"}/>
                    <Text text={new Date(time*1000).toLocaleDateString("en-US")} fontSize={"12px"} textColor={"white"} margin={"0"}/>
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