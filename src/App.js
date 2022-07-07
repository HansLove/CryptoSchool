import './App.css';
import Menu from './componentes/menu/Menu';
import Welcome from './componentes/welcome/Welcome';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Mint from './pages/Mint/Mint';
import ProfileTwo from './pages/Profile/ProfileTwo';
import NFT_Types from './componentes/NFT_Types/NFT_Types';


function App() {

  return (
    <div className="App">
      <BrowserRouter>

      <Menu/>

      <Routes>

        <Route exact path='/profile' element={<ProfileTwo/>}/>

        <Route exact path='/welcome' element={<Welcome/>}/>

        <Route exact path='/certifications' element={
        <NFT_Types
        title='Soul Bond DECCERT NFT´s'/>}/>

        <Route exact path='/mint' element={<Mint/>}/>

        <Route exact path='/' element={<Welcome/>}/>


      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
