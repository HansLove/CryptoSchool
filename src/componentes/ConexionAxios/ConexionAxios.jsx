import axios from 'axios'
import { actulizarCuenta } from '../blockchain/Blockchain'

const base_url='http://localhost:5002/user/'
// const base_url='https://deccert.herokuapp.com/user/'


export const registerUser=async({name,address,description,image,occupation})=>{
    try {
    await axios.post(base_url,{
        name:name,
        address:address,
        description:description,
        occupation:occupation,
        image:image}
        ).then(
        result=>console.log('result',result))
    return true
    } catch (error) {
           console.log('erorr en conexion con axios: ',error.message) 
           return false
    }
}

export const getUserData=async()=>{
    try {
    var image=''
    var name=''
    var description=''
    var occupation=''

    let _address=await actulizarCuenta()

    await axios.get(base_url+_address.toString()).then(
        result=>{
            // console.log('result ConexionAxios.js getUserData: ',result)
            name=result.data.data[0].name
            image=result.data.data[0].image
            description=result.data.data[0].description
            occupation=result.data.data[0].occupation
            
        }
    
    )
    return {name,image,description,occupation}
    
    } catch (error) {
           console.log('error in getUserData: ',error.message) 
           return false
    }
}

export const editUser=async({name,address,description,image,occupation})=>{
    try {
    await axios.patch(base_url+address,{
        name:name,
        address:address,
        description:description,
        occupation:occupation,
        image:image}
        ).then(
        result=>console.log('result',result))
    return true
    } catch (error) {
           console.log('erorr en conexion con axios: ',error.message) 
           return false
    }
}

export const getUsers=async()=>{
    var list=[]
    try {
    await axios.get(base_url).then(
        result=>{
           
            list=result.data.data
            }
        )
        
    } catch (error) {
           console.log('erorr en ConexionAxios: getUsers: ',error.message) 
           return []
    }
    return list
}

