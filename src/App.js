import './App.css';
import Menu from './componentes/menu/Menu';
import { useState } from 'react';
import Welcome from './componentes/welcome/Welcome';
import {BrowserRouter,Routes,Route,useLocation} from "react-router-dom";
import Mint from './pages/Mint/Mint';
import {AnimatePresence} from 'framer-motion/dist/framer-motion'
import Profile from './pages/Profile/Profile';
import { WagmiConfig, createClient } from 'wagmi'
import { getDefaultProvider } from 'ethers'
import ButtonConexion from './componentes/Boton/ButtonConexion/ButtonConexion';

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
})

function App() {

  return (
    <div className="App">
      <BrowserRouter>

      <Menu/>

      {/* <WagmiConfig client={client}>
        <ButtonConexion/>
      </WagmiConfig> */}

      

      <AnimatePresence>
      <Routes>

        <Route exact path='/welcome' element={<Welcome/>}></Route>
        <Route exact path='/profile' element={<Profile/>}></Route>

        <Route exact path='/mint' element={<Mint/>}></Route>
        <Route exact path='/' element={<Welcome/>}></Route>


      </Routes>
      </AnimatePresence>

      </BrowserRouter>





    </div>
  );
}

export default App;
