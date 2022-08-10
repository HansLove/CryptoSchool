import React,{useState} from 'react'
import AutomaticConversion from '../../utils/AutomaticConversion'
import BUSDSymbol from './image/BUSD.png'
import BNBSymbol from './image/binance_1.png'
import './estilo.css'
import Boton from '../Boton/Boton'


export default function Payment() {
    const [nativeAmount, setnativeAmount] = useState(0)

  return (
    <div className='div_payment'>

        <div>
            <img src={BUSDSymbol} alt="" />
            <h2>BUSD</h2>
            <p className='stablecoin_price'>9.00 BUSD</p>
            <Boton 
            text='Select'
            color1='royalblue'
            />
        </div>

        <div>
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
            <Boton 
            text='Select'
            color1='royalblue'
            />   
        </div>
    </div>
  )
}
