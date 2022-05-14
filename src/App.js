import './App.css';
import Menu from './componentes/menu/Menu';
import SingleCertificado from './componentes/single_certificado/SingleCertificado';
import Logo from './componentes/image/logo.png'
import Certificado from './componentes/image/certificado_nft_1.png'
import Welcome from './componentes/welcome/Welcome';
import { useState } from 'react';
import Cursos from './componentes/cursos/Cursos';
import NuevoCertificado from './componentes/nuevocertificado/NuevoCertificado';
import Contactanos from './pages/Contactanos/Contactanos';
import AboutUs from './pages/AboutUs/AboutUs';

function App() {

  const [estado, setEstado] = useState(0)




  return (
    <div className="App">
      
      <Menu setEstado={setEstado}/>
      
      <Welcome/>
      <Cursos/>
          
      <AboutUs/>

      <Contactanos/>

      <NuevoCertificado/>


    </div>
  );
}

export default App;
