import Web3 from 'web3'
// import detectEthereumProvider from '@metamask/detect-provider';
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';


const web3=new Web3(window.ethereum)

// const INFURA_ID='638abf31dffd41faa04a27725f181f26'
let currentAccount = null;

// const providerOptions = {
//   /* See Provider Options Section */
//   binancechainwallet: {
//     package: true
//   },

//   coinbasewallet: {
//     package: CoinbaseWalletSDK, // Required
//     options: {
//       appName: "DECCERT", // Required
//       infuraId: INFURA_ID, // Required
//       rpc: "", // Optional if `infuraId` is provided; otherwise it's required
//       chainId: 1, // Optional. It defaults to 1 if not provided
//       darkMode: false // Optional. Use dark theme, defaults to false
//     }
//   },

//   walletconnect: {
//     package: WalletConnectProvider, // required
//     options: {
//       infuraId: INFURA_ID // required
//     }
//   }
// };


// const web3Modal = new Web3Modal({
//   // network: "mainnet", // optional
//   // cacheProvider: true, // optional
//   providerOptions // required
// });


export const ConectWallet=async()=>{
  // const provider = await web3Modal.connect();
  // let web3 = new Web3(provider);
  await window.ethereum.request({ method: 'eth_requestAccounts' })
}

export const actulizarCuenta=async()=>{

    await window.ethereum
    .request({ method: 'eth_accounts' })
    .then(accounts=>{
      if (accounts.length === 0) {
        // MetaMask is locked or the user has not connected any accounts
        console.log('Please connect to MetaMask.');

      } else if (accounts[0] !== currentAccount) {
        currentAccount = accounts[0];
      }
  
    })
    .catch((err) => {
      console.error("Error en actualizarCuenta: ",err);
    })

    if(currentAccount==null) return 0
    return web3.utils.toChecksumAddress(currentAccount)
    
      
    
}

export const prenderCambioCuenta=(setAccount)=>{

  window.ethereum.on('accountsChanged',(acc)=>{
      console.log("cuenta cambiada: ",acc[0])
      setAccount(acc[0])
      window.location.reload(false);
    });
  
}

export const prenderCambioCadena=(setChain)=>{
  var chain=''
  window.ethereum.on('chainChanged', (_chainId) =>{
      console.log("Cambiando a: ",_chainId)
      chain= _chainId
      setChain(chain)
      window.location.reload(false)
      
  });
  return chain
}


export const dameCurrentChain=async()=>{
  try {
    

  const chainId = await window.ethereum.request({ method: 'eth_chainId' });
  return chainId

} catch (error) {
    return ''
}
  
  

}


export const CheckConexion=async()=>{
  var isConnected=false
  var isInstall=true

  if (window.ethereum !== undefined) {

    try {
        
      await window.ethereum
      .request({ method: 'eth_accounts' })
      .then(accounts=>{
        if (accounts.length != 0) {
          // MetaMask is locked or the user has not connected any accounts
          isConnected=true           
          
        }
      })

    } catch (error) {
      console.log('error CheckConexion: ',error.message)
    }

  }else{
      //The user doesnt have install a web3Wallet
      isInstall=false
      
  }
  return {connect:isConnected,install:isInstall}
}


export const ChangeChain=async()=>{
  await window.ethereum.request({ method: 'wallet_switchEthereumChain', params:[{chainId: '0x38'}]});

}

export const RequestConexion=async(isConnected=()=>{})=>{
  let res=await window.ethereum.request({ method: 'eth_requestAccounts' })
  if(res.length>0)isConnected(true)
  
}