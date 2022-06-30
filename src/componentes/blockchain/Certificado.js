import Web3 from "web3"
import Json from '../../build/Deccert.json'
import { actulizarCuenta, dameCurrentChain } from "./Blockchain"
import { determinarChain } from "./FiltroChains"


const web3=new Web3(window.ethereum)
const metamaskProvider = window.ethereum.providers.find((provider) => provider.isMetaMask);


export class ObjetoCertificado{
    constructor(){
        this.contrato={}
        this.account=''
    }

    async load(){
        const id=await web3.eth.net.getId()
        const deployedNetwork=Json.networks[id]
        this.account=await actulizarCuenta()

        let winner=await determinarChain(deployedNetwork,0)

               
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
            console.log('error en Certificado.jsx - DECCERT get(): ',error.message)
            return {}       
        }
    
    
    }
    
    async create(
        _name,
        _tipo
        ){

        var _resultado=await this.contrato.methods.createCertificate(
            _name,
            _tipo
            ).send({from:this.account,value:100})
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

