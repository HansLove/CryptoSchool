import axios from 'axios'
import { dameCurrentChain } from '../blockchain/Blockchain'

const base_url='http://localhost:5002/nft/'
// const base_url='https://deccert.herokuapp.com/nft/'


export const sendAnswer=async(id,name,address,answers)=>{
    var answerReturn=false
    let chainID=await dameCurrentChain()
    // console.log('ConexionServer.jsx: address: ',address, 'name: ',name,'id: ',id)
    
    await axios.post(base_url+
        id+
        '/'+
        address+
        '/'+name+
        '/'+chainID
    ,answers).
    then((response)=>{
        answerReturn=response.data.status

      })
      .catch(function (error) {
        console.log(error);
        return false
      });

  
    return answerReturn
}
