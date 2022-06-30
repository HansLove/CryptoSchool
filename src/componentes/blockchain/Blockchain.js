import Web3 from 'web3'

const web3=new Web3(window.ethereum)

const metamaskProvider = window.ethereum.providers.find((provider) => provider.isMetaMask);

let currentAccount = null;


export const actulizarCuenta=async()=>{
  const metamaskProvider = window.ethereum.providers.find((provider) => provider.isMetaMask);

    await metamaskProvider
    .request({ method: 'eth_accounts' })
    .then(accounts=>{
      if (accounts.length === 0) {
        // MetaMask is locked or the user has not connected any accounts
        console.log('Please connect to MetaMask.');

      } else if (accounts[0] !== currentAccount) {
        currentAccount = accounts[0];
        // console.log("accounts: ",accounts)
      }
  
    })
    .catch((err) => {
      console.error("Error en actualizarCuenta: Pago.js",err);
    })

    if(currentAccount==null) return 0
    return web3.utils.toChecksumAddress(currentAccount)
    
}

export const prenderCambioCuenta=(setAccount)=>{

  metamaskProvider.on('accountsChanged',(acc)=>{
      console.log("cuenta cambiada: ",acc[0])
      setAccount(acc[0])
      window.location.reload(false);
    });
  
}



export const CancelarListener=async()=>{
  metamaskProvider.removeListener('accountsChanged',()=>{
      console.log("oidos de cambio de cuenta desactivados")
    });
}


export const prenderCambioCadena=(setChain)=>{
  var chain=''
  metamaskProvider.on('chainChanged', (_chainId) =>{
      console.log("Cambiando a: ",_chainId)
      chain= _chainId
      setChain(chain)
      window.location.reload(false)
      
  });
  return chain
}

export const ConectWallet=async()=>{
  console.log('window etherem:',window.ethereum)
  // await window.ethereum.request({ method: 'eth_requestAccounts' })
}
export const dameCurrentChain=async()=>{
  const metamaskProvider = window.ethereum.providers.find((provider) => provider.isMetaMask);

 
  const chainId = await metamaskProvider.request({ method: 'eth_chainId' });
  return chainId
  
  

}