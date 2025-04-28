import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Component/Footer.jsx"; // <--- Agregado acá
import "../styles/Register.css";

const Register = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    console.log("Registrado con:", {
      nombre,
      apellido,
      email,
      password,
    });
    alert("¡Registro exitoso! Ya creaste tu cuenta.");

  };

  return (
    <>
      <header className="header">
        <h2 className="logo">
          <span style={{ color: "#00c853" }}>Swap</span>
          <span style={{ color: "#00bcd4" }}>Web</span>
        </h2>
        <nav className="nav">
        <button className="explorar-btn"><Link to="/" >Explorar</Link></button>
          
          <div className="perfil-icon">👤</div>
        </nav>
      </header>
      <div className="register-container">
        <form onSubmit={handleSubmit} className="register-form">
          <h2>Crear cuenta</h2>

          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn-register">
            Registrar
          </button>

          <p className="redirect-login">
            ¿Ya tienes cuenta? <Link to="/login">Inicia sesión aquí</Link>
          </p>
        </form>
      </div>
      <Footer /> {/* Aquí mostramos el Footer */}
    </>
  );
};

export default Register;