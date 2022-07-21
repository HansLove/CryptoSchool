import React, { useEffect, useState } from 'react'
import ProfileInfo from "../../containers/profile/ProfileInfo";
import ProfileNFTs from "../../containers/nft-group/ProfileNFTs";
import { ObjetoDeccert } from '../../componentes/blockchain/ObjetoDeccert';
import { actulizarCuenta } from '../../componentes/blockchain/Blockchain';

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
          console.log('certificado: ',certificado['owner'])
          if(certificado['owner']==account)_lista.push(certificado)
      }
      
      
      setlistaNFT(_lista)
      console.log('lista: ',_lista,account)

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