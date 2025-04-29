import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'; 

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setIsOpen(false);
    navigate('/login');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <div className="user-menu" ref={menuRef}>
      <div className="avatar" onClick={toggleMenu}>
        <FaUserCircle size={32} />
      </div>

      {isOpen && (
        <div className="flyout">
          {isLoggedIn ? (
            <>
              <button onClick={() => handleNavigate('/publicar')}>Publicar Producto</button>
              <button onClick={() => handleNavigate('/perfil')}>Mi Perfil</button>
              <button onClick={handleLogout}>Cerrar Sesión</button>
            </>
          ) : (
            <>
              <button onClick={() => handleNavigate('/register')}>Registrarse</button>
              <button onClick={() => handleNavigate('/login')}>Iniciar Sesión</button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default UserMenu;
