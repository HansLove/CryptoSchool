import React, { useEffect, useState } from 'react'
import ProfileInfo from "../../containers/profile/ProfileInfo";
import ProfileNFTs from "../../containers/nft-group/ProfileNFTs";
import { ObjetoDeccert } from '../../componentes/blockchain/ObjetoDeccert';
import { actulizarCuenta } from '../../componentes/blockchain/Blockchain';
import axios from 'axios';

function Profile(){

    const [listaNFT, setlistaNFT] = useState([])
    const [data, setdata] = useState({name:'',image:'.',description:''})


    useEffect(async() => {
      let objeto=new ObjetoDeccert()
      let account=await actulizarCuenta()
      await objeto.load()
      let _total=await objeto.getTotal()
      var _lista=[]

      for (let index = 1; index < parseInt(_total)+1; index++) {
          let certificado=await objeto.get(index)
          let _uri=await objeto.getURI(index)
          console.log('uri: ',_uri)
          axios.get(_uri).then((res)=>console.log('res axios nft uri:',res.data))
          if(certificado['owner']==account)_lista.push(certificado)
      }
      
      
      setlistaNFT(_lista)
      console.log('lista nfts: ',_lista)
    //   let resultado=await getUserData(account)
    //   setdata(resultado)

    //   return () => {
    //     setdata({}); // This worked for me
    //   };
      
    
    }, [])

    return(
        <div>
            <ProfileInfo/>
            <ProfileNFTs/>
        </div>
        
    )
}

export default Profile;