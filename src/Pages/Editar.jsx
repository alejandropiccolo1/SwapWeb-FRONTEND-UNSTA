import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Editar.css';
import Header from '../Component/Header.jsx';
import Footer from '../Component/Footer.jsx';


const Editar = () => {

  const navigate = useNavigate();
  
  // Estado inicial del usuario - en una app real, esto vendría de una API o context
  const [userData, setUserData] = useState({
    id: 1,
    nombre: 'Juan Pérez',
    email: 'juan.perez@ejemplo.com',
    telefono: '123-456-7890',
    fechaRegistro: '12/01/2024',
    imagen: "/images/fotoperfil.jpeg",
    ubicacion: 'Ciudad de México',
    calificacion: 4.5,
    transacciones: 23
  });
  const irAEditarPerfil = () => {
    navigate('/Editar');
  };

  // Estado para el formulario de edición
  const [formData, setFormData] = useState({...userData});
  
  // Estado para controlar si estamos en modo edición
  const [isEditing, setIsEditing] = useState(false);
  
  // Estado para mensajes de error o éxito
  const [message, setMessage] = useState({ text: '', type: '' });

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Manejar cambio de imagen
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // En un caso real, aquí subirías la imagen a un servidor
      // Por ahora, solo creamos una URL temporal
      const imageUrl = URL.createObjectURL(file);
      setFormData({
        ...formData,
        imagen: imageUrl
      });
    }
  };

  // Iniciar modo edición
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Cancelar edición
  const handleCancel = () => {
    setFormData({...userData});
    setIsEditing(false);
    setMessage({ text: '', type: '' });
  };

  // Guardar cambios
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.nombre || !formData.email || !formData.telefono) {
      setMessage({ text: 'Por favor completa todos los campos obligatorios', type: 'error' });
      return;
    }
    
    // En una app real, aquí enviarías los datos al servidor
    // Simulamos una actualización exitosa
    setUserData({...formData});
    setIsEditing(false);
    setMessage({ text: 'Perfil actualizado con éxito', type: 'success' });
    
    // Limpiamos el mensaje después de 3 segundos
    setTimeout(() => {
      setMessage({ text: '', type: '' });
    }, 3000);
  };

  // Navegar a la página de transacciones
  const verTransacciones = () => {
    navigate('/transacciones');
  };

  return (
    <>
    <Header />



    <div className="perfil-container">
      <h1>Mi Perfil</h1>
      
      {message.text && (
        <div className={`alert ${message.type}`}>
          {message.text}
        </div>
      )}
      
      <div className="perfil-card">
        <div className="perfil-header">
          <div className="imagen-container">
            <img 
              src={formData.imagen} 
              alt="Foto de perfil" 
              className="perfil-imagen" 
            />
            {isEditing && (
              <div className="cambiar-imagen">
                <label htmlFor="imagen-input" className="btn-cambiar-imagen">
                  Cambiar imagen
                </label>
                <input 
                  type="file" 
                  id="imagen-input" 
                  accept="image/*" 
                  onChange={handleImageChange} 
                  style={{ display: 'none' }}
                />
              </div>
            )}
          </div>
          
          <div className="info-basica">
            <h2>{userData.nombre}</h2>
            <div className="stats">
              <div className="stat">
                <span className="stat-value">{userData.calificacion}</span>
                <span className="stat-label">Calificación</span>
              </div>
              <div className="stat">
                <span className="stat-value">{userData.transacciones}</span>
                <span className="stat-label">Transacciones</span>
              </div>
            </div>
            <p className="miembro-desde">Miembro desde: {userData.fechaRegistro}</p>
          </div>
        </div>
        
        <div className="perfil-content">
          {!isEditing ? (
            <>
              <div className="info-section">
                <h3>Información Personal</h3>
                <div className="info-row">
                  <span className="info-label">Nombre:</span>
                  <span className="info-value">{userData.nombre}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Email:</span>
                  <span className="info-value">{userData.email}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Teléfono:</span>
                  <span className="info-value">{userData.telefono}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Ubicación:</span>
                  <span className="info-value">{userData.ubicacion}</span>
                </div>
              </div>
              
              <div className="actions">
                <button className="btn primary" onClick={handleEdit}>
                  Editar Perfil
                </button>
                <button
  className="btn secondary"
  onClick={() => navigate('/PerfilUsuario')}
>
  Volver
</button>
              </div>
            </>
          ) : (
            <form onSubmit={handleSubmit} className="edit-form">
              <h3>Editar Información Personal</h3>
              
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="telefono">Teléfono</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="ubicacion">Ubicación</label>
                <input
                  type="text"
                  id="ubicacion"
                  name="ubicacion"
                  value={formData.ubicacion}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-actions">
                <button type="submit" className="btn primary">
                  Guardar Cambios
                </button>
                <button type="button" className="btn secondary" onClick={handleCancel}>
                  Cancelar
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
  
    </div>
    <Footer />
    </>
  );
};

export default Editar;