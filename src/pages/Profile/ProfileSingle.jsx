import React from 'react'
import ProfileInfoTwo from '../../containers/profile/ProfileInfoTwo';
import ProfileInfoNFTs from '../../containers/nft-group/ProfileInfoNFTs';


function ProfileSingle(){

    return(
        <div>
            <ProfileInfoTwo/>
            <ProfileInfoNFTs/>
        </div>
        
    )
}

export default ProfileSingle;