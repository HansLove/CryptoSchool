import Web3 from "web3"
import Json from '../build/Deccert.json'
import { actulizarCuenta, dameCurrentChain } from "./Blockchain"


const web3=new Web3(window.ethereum)

export class ObjetoCertificado{
    constructor(){
        this.contrato={}
        this.account=''
    }

    async load(){
        const id=await web3.eth.net.getId()
        const deployedNetwork=Json.networks[id]
        var winner=''  
        this.account=await actulizarCuenta()
        // let binanceChainContract='0xD0055681c89841aE5c50787b0F18B5769a5091b9'
        let chainId=await dameCurrentChain()


        if(chainId=='0x539'){
          winner=deployedNetwork.address
        }else if(chainId=='0x38'){
          // winner='0xD0055681c89841aE5c50787b0F18B5769a5091b9'
          winner='0x66cafdD687b83663512bCfC99e36724d86b11C7e'
        }else{
          // winner='0xc1ae5700776EFE63CC45d8e66D32858642570D5c'
          // winner='0x08D111F18c3F5463b163d3Ae41F1BC6A034eFE5b'
          // winner='0x1F3e28f21569b567758dE2Cb760939fe08D9D64a'//Este si funciona
          // winner='0xeb50576e8ba1b32b3B0fcDdA24C11Ef3F2591fb1'
          // winner='0x6BC1c830DBb5F8Bf019959ffB7c38BC71CC3ab80'
          winner='0x99Dc4a0CF0823b329F75D21278B2941bAffe1Ed7'
        }
        // winner='0xDe002d43CC54d21af12f914C86bBBbEa4D5679A2'
        
        try {
          const contrato=new web3.eth.Contract(
            Json.abi,
            winner
            )
          
            this.contrato=contrato
            return contrato  
        } catch (error) {
          console.log("error en conexion load: ",error)
          return {}
        }
      
      
    }

    async get(_index){
        try {
            var _hashi=await this.contrato.methods.get(_index).call()
            return _hashi        
        } catch (error) {
            console.log('error en HashimaContract.jsx ,dameHashima: ',error)
            return {}       
        }
    
    
    }
    
    async create(
        _name,
        _tipo,//uint8
        _address){

        var _resultado=await this.contrato.methods.createCertificate(
            _name,
            _tipo,
            _address).send({from:this.account})
        return _resultado.status
    }


    async dameTotal(){

        try {
            var _res=await this.contrato.methods.dameTotal().call()
            return _res        
        } catch (error) {
            console.log('error en HashimaContract.jsx dameTotalHashimas:',error)
            return {}
        }
    
    }

 

}

