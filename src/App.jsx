import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Inicio from './pages/Inicio';
import Pelis from './pages/Pelis';
import Series from './pages/Series';
import Nav from './components/Nav';
import DetailsMovies from './pages/DetailsMovies';

function App() {
  return (
    <Router> {/* Esto envuelve todo el sistema de rutas */}

        <Nav/>
        <Routes> {/* Este es el contenedor de todas las rutas */}
        {/* Aquí definimos las rutas */}

        <Route path="/" element={<Inicio />} /> 
        <Route path="/pelis" element={<Pelis />} /> 
        <Route path="/series" element={<Series />} /> 
        <Route path="/pelis/details/:id" element={<DetailsMovies />} />

      </Routes>
    </Router>
  );
}

export default App;
