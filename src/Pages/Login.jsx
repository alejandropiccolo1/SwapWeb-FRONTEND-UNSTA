import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../styles/Login.css";
import Footer from "../Component/Footer.jsx";
import "../styles/Header.css";



const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login enviado:", form);s
    // aqui irá la logica de conexion al back
  };

  return (
    <div className="b">
    <div className="login-contenedor">
      <header className="header">
          <h2 className="mb-0 fw-bold">
              <span style={{ color: "#00c853" }}>Swap</span>
              <span style={{ color: "#00bcd4" }}>Web</span> 
          </h2>
        <div className="nav">
          <button className="explorar-btn"><Link to="/" >Explorar</Link></button>
          <div className="perfil-icon">👤</div>
        </div>
      </header>

      <div className="login-box">
        <h2>Iniciar Sesión</h2>

        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Nombre de usuario"
            value={form.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn-continuar">
            Continuar
          </button>
        </form>

        <div className="links">
          <a> ¿Olvidaste tu contraseña?</a>
          <a><Link to="/register">Registrate</Link></a>
        </div>

        <div className="social-login">
          <button className="facebook-btn"> 
            <img src="/images/facebook.png" alt="SFacebook" className="btn-iconFace"/>
            Continuar con Facebook
          </button>
          <button className="google-btn">
            <img src="/images/google.png" alt="Google" className="btn-iconG"/>
            Continuar con Google
          </button>
        </div>
      </div>
      </div>
      <Footer/>
      </div>
    );
};


export default Login;
