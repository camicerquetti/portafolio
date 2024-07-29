import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/header'; // Ajusta la ruta según la ubicación real de tu archivo Header.js
import Sobremi from './componentes/sobremi'; // Ajusta la ruta según la ubicación real de tu archivo Sobremi.js
import Proyectos from './componentes/proyectos'; // Ajusta la ruta según la ubicación real de tu archivo Proyectos.js
import Footer from './componentes/footer'; // Ajusta la ruta según la ubicación real de tu archivo Footer.js
import MisTitulos from './componentes/educacion'; // Ajusta la ruta según la ubicación real de tu archivo Educacion.js
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Sobremi />} /> 
          <Route path="/educacion" element={<MisTitulos />} /> {/* Página de educación */}
          <Route path="/proyectos" element={<Proyectos />} /> {/* Página de proyectos */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
