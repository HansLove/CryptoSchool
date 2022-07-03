import './App.css';
import Menu from './componentes/menu/Menu';
import { useState } from 'react';
import Welcome from './componentes/welcome/Welcome';
import {BrowserRouter,Routes,Route,useLocation} from "react-router-dom";
import Mint from './pages/Mint/Mint';
import {AnimatePresence} from 'framer-motion/dist/framer-motion'
import Profile from './pages/Profile/Profile';


function App() {

  return (
    <div className="App">
      <BrowserRouter>

      <Menu/>

      <AnimatePresence>
      <Routes>

        <Route exact path='/welcome' element={<Welcome/>}></Route>
        <Route exact path='/profile' element={<Profile/>}></Route>

        <Route exact path='/mint' element={<Mint/>}></Route>
        <Route exact path='/' element={<Welcome/>}></Route>


      </Routes>
      </AnimatePresence>

      </BrowserRouter>

      <p>Actualizacion en la branch update</p>
    </div>
  );
}

export default App;
