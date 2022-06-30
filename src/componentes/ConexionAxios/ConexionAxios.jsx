import axios from 'axios'

const base_url='http://localhost:5002/user/'


export const getUserData=async(_address)=>{
   
    var image=''
    var name=''
    var description=''

    await axios.get(base_url+_address.toString()).then(
        result=>{
            name=result.data.data[0].name
            image=result.data.data[0].image
            description=result.data.data[0].description
            
        }
    
    )
    return {name,image,description}
}

// export const verificarPagoServidor=async(address_user,uri)=>{
//     var objetoObtenido={}
//     await axios.get(base_url_2+address_user.toString()+"/"+uri).then(
//         result=>{
//         //    console.log('resultado verficiacion backend:',result.data)
//            objetoObtenido=result.data
           
//         }
    
//     )
//     return objetoObtenido
// }



// export const guardarAddress=async(_address)=>{
    
//     await axios.post(base_url,{address:_address}).then(
//         result=>{
//             console.log(result)
            
//         }
    
//     )
   
// }


