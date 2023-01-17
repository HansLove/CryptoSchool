import React,{createContext,useEffect,useState} from "react";
import { CheckConexion, getCurrentChain, getCurrentAccount } from "../blockchain/Blockchain";
import {ObjetoDeccert} from "../blockchain/ObjetoDeccert";

export const DataContext=createContext()

export const DataProvider=({children})=>{
    const [account, setAccount] = useState('')
    const [chainID, setChainID] = useState('')

    let objeto=new ObjetoDeccert()


    //Blockchain conexion
    const [isConnected, setIsConnected] = useState(true)
    const [web3Installed, setWeb3Install] = useState(true)

    useEffect(() => {
        async function init(){
            await objeto.load()
            let _account=await getCurrentAccount()
            const _chainId = await getCurrentChain()

            const respuesta=await CheckConexion()
        
            //state change
            setIsConnected(respuesta.connect)
            setWeb3Install(respuesta.install)
            setChainID(_chainId)
            setAccount(_account)
        }
        init()
    
      return () => {
      }
    }, [])
    
    return(
        <DataContext.Provider 
        value={
            {
            account,
            chainID,
            isConnected,
            setIsConnected,
            web3Installed,
            }
        }>

            {children}
        </DataContext.Provider>
    )
}