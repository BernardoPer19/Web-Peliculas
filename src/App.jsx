import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Inicio from './pages/Inicio';
import Pelis from './pages/Pelis';
import Series from './pages/Series';
import Nav from './components/Nav';
import DetailsMovies from './pages/DetailsMovies';
import DetailsSeries from './pages/DetailsSeries';

function App() {
  return (
    <Router>

        <Nav/>
        <Routes> 

        <Route path="/" element={<Inicio />} /> 
        <Route path="/pelis" element={<Pelis />} /> 
        <Route path="/series" element={<Series />} /> 
        <Route path="/pelis/details/:id" element={<DetailsMovies />} />
        <Route path="/series/details/:id" element={<DetailsSeries />} />

      </Routes>
    </Router>
  );
}

export default App;
