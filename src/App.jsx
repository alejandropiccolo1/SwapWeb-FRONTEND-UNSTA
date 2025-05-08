import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import DetalleProducto from './Pages/DetalleProducto';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Intercambiar from './Pages/Intercambiar';
import Transacciones from './Pages/Transacciones';
import PerfilUsuario from './Pages/PerfilUsuario';
import Editar from './Pages/Editar';
import ConfigPage from './Pages/ConfigPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/producto/:id" element={<DetalleProducto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/intercambiar" element={<Intercambiar />} />
        <Route path="/transacciones" element={<Transacciones />} />
        <Route path="/PerfilUsuario" element={<PerfilUsuario />} />
        <Route path="/Editar" element={<Editar />} />
        <Route path="/ConfigPage" element={<ConfigPage />} />
      </Routes>
    </Router>
  );
}

export default App;
