import axios from 'axios'

const base_url='http://localhost:5002/user/'
// const base_url_real='htpp://heroku.deccert.com/'


export const getUserData=async(_address)=>{

    try {
        

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
    } catch (error) {
           console.log('erorr en conexion con axios: ',error.message) 
           return{}
    }
}




