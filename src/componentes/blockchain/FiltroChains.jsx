import { dameCurrentChain } from "./Blockchain"

export async function determinarChain(deployedNetwork,id){

    let array_binance_mainnet=[
        "0x5F494eed5C36Cf52c75465F0B4e28F69344C8973"//Deccert
        
    ]
    
    let array_binance_testnet=[
        "0xb86Cdc7e93F601D605FaFe6A3Eb5E42b82d5A97e"//Deccert
    ]
    
    let matic_testnet=[
      "0xf2C03478ec6f97ebC114d923fc5282f64e52De27"//DECCERT
    ]

    var winner=''
    let chainId=await dameCurrentChain()

    if(chainId=='0x539'){
        //Gananche fake blockchain
        winner=deployedNetwork.address
        
      }else if(chainId=='0x38'){
        //Binance smart chain
        winner=array_binance_mainnet[id]

      }else if(chainId=='0x1'){
        //Ethereum
        winner='0x66cafdD687b83663512bCfC99e36724d86b11C7e'

      }else if(chainId=='0x61'){
        //Binance testnet
        winner=array_binance_testnet[id]

      }else if(chainId=='0x13881'){
        winner=matic_testnet[id]

      }

      return winner

}