import './App.css';
import Menu from './componentes/menu/Menu';
import Welcome from './componentes/welcome/Welcome';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Mint from './pages/Mint/Mint';
import Profile from './pages/Profile/Profile';
import NFT_Types from './componentes/NFT_Types/NFT_Types';


function App() {

  return (
    <div className="App">
      <BrowserRouter>

      <Menu/>

      <Routes>

        <Route exact path='/welcome' element={<Welcome/>}></Route>
        <Route exact path='/profile' element={<Profile/>}></Route>
        <Route exact path='/certifications' element={<NFT_Types
        title='Soul Bond DECCERT NFT´s'
        />}></Route>
        <Route exact path='/mint' element={<Mint/>}></Route>
        <Route exact path='/' element={<Welcome/>}></Route>


      </Routes>

      </BrowserRouter>

      <p>Adaskjdbaskjdbasjk</p>

      <p>Hola! Desde App</p>

      <p>Nuevo texto</p>

    </div>
  );
}

export default App;
