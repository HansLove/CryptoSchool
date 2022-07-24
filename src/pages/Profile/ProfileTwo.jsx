import React, { useEffect, useState } from 'react'
import ProfileInfo from "../../containers/profile/ProfileInfo";
import ProfileNFTs from "../../containers/nft-group/ProfileNFTs";


function Profile(){

    const [data, setdata] = useState({name:'',image:'.',description:''})




    return(
        <div>
            <ProfileInfo/>
            <ProfileNFTs/>
        </div>
        
    )
}

export default Profile;