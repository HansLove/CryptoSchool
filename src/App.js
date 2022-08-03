import './App.css';
import Menu from './componentes/menu/Menu';
import Welcome from './componentes/welcome/Welcome';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Mint from './pages/Mint/Mint';
import ProfileTwo from './pages/Profile/ProfileTwo';
import Test from './pages/Test/Test';
import NFT_Types from './componentes/NFT_Types/NFT_Types';
import { useEffect } from 'react';
import { turnOnAccountChange, turnOnChainChange } from './componentes/blockchain/Blockchain';
import Fondo1 from '../src/componentes/image/fondo_2.png'
import JobBank from './pages/JobBank/JobBank';


function App() {


  useEffect(() => {
    
    async function initialSettleDown(){
      await turnOnAccountChange()
      await turnOnChainChange()

    }
    initialSettleDown()
  }, [])
  

  return (
    <div className="App">

      <img 
      className='imagen_fondo_welcome'
      src={Fondo1} alt="" />     

      <BrowserRouter>

      <Menu/>

      <Routes>

        <Route exact path='/welcome' element={<Welcome/>}></Route>
        <Route exact path='/profile' element={<ProfileTwo/>}></Route>
        <Route exact path='/test' element={<Test/>}></Route>
        <Route exact path='/certifications' element={<NFT_Types
        title='Soul Bond DECCERT NFT´s'
        />}></Route>
        <Route exact path='/mint' element={<Mint/>}></Route>
        <Route exact path='/jobbank' element={<JobBank/>}></Route>

        <Route exact path='/' element={<Welcome/>}></Route>


      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
