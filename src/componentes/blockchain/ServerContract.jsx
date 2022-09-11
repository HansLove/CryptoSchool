import Web3 from "web3"
import JSON from './build/Server.json'
import { TransformarToWei } from "./Blockchain"
import { actulizarCuenta } from "./Pago"
import { determinarChain } from "./utils/FiltroChains"

const web3=new Web3(window.ethereum)

export class ObjetoServer{

    constructor(){
        this.contrato={}
        this.account=''
    }

    async load(){
        try {
        const id=await web3.eth.net.getId()
        const deployedNetwork=JSON.networks[id]
        this.account=await actulizarCuenta()
        
        let winner=await determinarChain(deployedNetwork,3)

        const contrato=new web3.eth.Contract(
        JSON.abi,
        winner
        )
        
        this.contrato=contrato
        return contrato  
        } catch (error) {
            console.log("error en conexion con Server.jsx: load: ",error)
            return {}
        }
      
      
    }

    async payServer(_stars,_uri,_amount){
        try {
            
            let newValueWei=TransformarToWei(_amount)
            var _res=await this.contrato.methods.payServer(_stars,_uri).send(
                {
                    from:this.account,
                    value:newValueWei
                })
            return _res
            
        } catch (error) {
            return false
        }
    }


    async check(_address){
        var _res=await this.contrato.methods.checkPayment(_address).call()
        return _res

    }

    async alreadyPaid(){
        try {
        
            var _res=await this.contrato.methods.paymentRegister(this.account).call()
            return _res
            
        } catch (error) {
            console.log('error in alreadyPaid ServerContract: ',error)
            return false
        }        

    }    
    
}