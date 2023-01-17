import React,{useState} from 'react'
import AutomaticConversion from '../../utils/AutomaticConversion'
import BNBSymbol from './image/binance_1.png'
import './estilo.css'


export default function Payment() {
    const [nativeAmount, setnativeAmount] = useState(0)
    const priceInUSD=9

  return (
    <div className='div_payment'>

      <h2>Price: {priceInUSD} USD</h2>
      <img src={BNBSymbol} alt="" />

      <p>{nativeAmount} BNB</p>
      
      <AutomaticConversion
      price={1} 
      total={priceInUSD}
      coin={0}
      color='white'
      setConversion={setnativeAmount}  
      />         
      
    </div>
  )
}
