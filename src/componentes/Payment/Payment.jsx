import React,{useState} from 'react'
import AutomaticConversion from '../../utils/AutomaticConversion'
import BUSDSymbol from './image/BUSD.png'
import BNBSymbol from './image/binance_1.png'
import './estilo.css'


export default function Payment({
  makeVisible
}) {
    const [nativeAmount, setnativeAmount] = useState(0)

  return (
    <div className='div_payment'>

        <div onClick={makeVisible}>
            <img src={BUSDSymbol} alt="" />
            <h2>BUSD</h2>
            <p className='stablecoin_price'>9.00 BUSD</p>
       
        </div>

        <div onClick={makeVisible}>
            <img src={BNBSymbol} alt="" />

            <h2>BNB</h2>
            <p>{nativeAmount} BNB</p>
            
            <AutomaticConversion
            price={1} 
            total={9}
            coin={0}
            color='white'
            setConversion={setnativeAmount}  
           
            />         
      
        </div>
    </div>
  )
}
