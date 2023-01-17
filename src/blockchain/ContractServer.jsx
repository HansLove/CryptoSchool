import Web3 from "web3"
import JSON from './build/Server.json'
import { getCurrentAccount } from "./Blockchain"
import { determinarChain } from "./FiltroChains"

const web3=new Web3(window.ethereum)

export class ContractServer{

    constructor(){
        this.contrato={}
        this.account=''
    }

    async load(){
        try {
        const id=await web3.eth.net.getId()
        const deployedNetwork=JSON.networks[id]
        this.account=await getCurrentAccount()
        
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

    async pay(metadata_uri){
        try {
            let newValueWei=await this.currentPrice()

            var _res=await this.contrato.methods.pay(metadata_uri).send(
                {
                    from:this.account,
                    value:newValueWei
                })
            return _res.status
            
        } catch (error) {
            console.log('error pay()',error)
            return false
        }
    }

    
    async check(uri){
        try {
            var _res=await this.contrato.methods.checkPayment(this.account,uri).call()
            return _res
        } catch (error) {
            console.log('error check() ContractServer.jsx',error)
        }
    }

    async currentPrice(){
        var _res=await this.contrato.methods.currentPrice().call()
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