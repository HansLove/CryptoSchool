import React, { useEffect, useState } from 'react';
import axios from 'axios'


function AutomaticConversion({
  price,
  coin=0,
  color='black',
  total,
  setConversion,
  setRate=()=>{},
  visible=false,

}) {

    const [dollar, setDollar] = useState(0);
    const USD_PRICE=100
    const list_uris=[
      {uri:'https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd'},//BNB
      {uri:'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd'}//ETH
    ]


    useEffect(async() => {
        let _price=await CurrentUsdtPrice()
        let _res=_price.usd*price
        setDollar(_res)
        let rate=USD_PRICE/_res
        setRate(rate.toString().substr(0,6))


      }, [price]);


      useEffect(async() => {
        let _price=await CurrentUsdtPrice()
        let _res=_price.usd*price
        setDollar(_res)

        let finalConversion=total/_res
        setConversion(finalConversion.toString().substring(0,6))
      }, [total])
      
      
    const CurrentUsdtPrice=async()=>{
        var precio=0
        await axios.get(list_uris[coin].uri)

        .then(res=>{
              if(coin==0){
                //es binance
                precio=res.data.binancecoin
              }else if(coin==1){
                //its ethereum
                precio=res.data.ethereum
              }
              
        })
        return precio
      }
  
      const SeparadorDecimal=(num)=>{
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
             
    }
  return <p style={{
      display:'block',
      marginLeft:'10%',
      width:'fit-content',
      fontFamily:'monospace',
      color:color,
      fontSize:'1.1rem'
         }}>

           {visible&&<>
           {SeparadorDecimal(Math.round(dollar))} USD</>
           }
    </p>
  }
        

export default AutomaticConversion;
