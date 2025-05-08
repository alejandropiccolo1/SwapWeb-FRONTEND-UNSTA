import { useState, useEffect } from 'react';
import { Settings, Bell, Shield, CreditCard, User, Eye, EyeOff, Moon, Sun, Globe, LogOut } from 'lucide-react';
import "../styles/ConfigPage.css";
import Header from '../Component/Header.jsx';
import Footer from '../Component/Footer.jsx';


// Modelo: Representación de los datos del usuario y configuraciones
const userConfigModel = {
  // Datos iniciales simulados
  getInitialData: () => {
    return {

      perfil: {
        nombre: "Usuario Ejemplo",
        email: "usuario@ejemplo.com",
        telefono: "+34 600 123 456",
        avatar: "/api/placeholder/100/100"
      },
      preferencias: {
        temaOscuro: false,
        idioma: "es",
        notificaciones: {
          email: true,
          push: true,
          sms: false,
          nuevasOfertas: true,
          actualizacionesEstado: true,
          boletinNoticias: false
        },
        seguridad: {
          autenticacionDosFactores: false,
          sesionesActivas: 1
        },
        pago: {
          metodoPreferido: "tarjeta",
          tarjetas: [
            { id: 1, tipo: "visa", ultimos4: "4242", expira: "12/25", predeterminada: true }
          ]
        }
      }
    };
  }
};

// Controlador: Maneja la lógica de actualización de datos
const useConfigController = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("perfil");
  const [mostrarContrasena, setMostrarContrasena] = useState(false);

  // Simula una llamada a API
  useEffect(() => {
    const fetchData = async () => {
      // Simulamos una pequeña demora como en una API real
      setTimeout(() => {
        const data = userConfigModel.getInitialData();
        setUserData(data);
        setLoading(false);
      }, 500);
    };
    
    fetchData();
  }, []);

  // Función para actualizar preferencias
  const actualizarPreferencias = (categoria, subcategoria, valor) => {
    setUserData(prevData => {
      const newData = {...prevData};
      
      if (subcategoria) {
        newData.preferencias[categoria][subcategoria] = valor;
      } else {
        newData.preferencias[categoria] = valor;
      }
      
      // En una app real, aquí se enviarían los cambios al servidor
      console.log("Datos actualizados:", newData);
      return newData;
    });
  };

  // Función para actualizar datos del perfil
  const actualizarPerfil = (campo, valor) => {
    setUserData(prevData => {
      const newData = {...prevData};
      newData.perfil[campo] = valor;
      
      // En una app real, aquí se enviarían los cambios al servidor
      console.log("Perfil actualizado:", newData);
      return newData;
    });
  };

  return { 
    userData, 
    loading, 
    activeTab, 
    setActiveTab,
    actualizarPreferencias,
    actualizarPerfil,
    mostrarContrasena,
    setMostrarContrasena
  };
};

// Vista: Componentes de interfaz de usuario
const ConfigPage = () => {
  const { 
    userData, 
    loading, 
    activeTab, 
    setActiveTab,
    actualizarPreferencias,
    actualizarPerfil,
    mostrarContrasena,
    setMostrarContrasena
  } = useConfigController();

  if (loading) {
    return (
        
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="w-16 h-16 border-4 border-t-blue-500 border-b-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (

    <div className="min-h-screen bg-gray-50">
      {/* Cabecera */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Configuración</h1>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
              Guardar cambios
            </button>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Barra lateral */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white shadow rounded-md overflow-hidden">
              <ul className="divide-y divide-gray-200">
                <li>
                  <button 
                    onClick={() => setActiveTab("perfil")}
                    className={`flex items-center w-full px-4 py-3 hover:bg-gray-50 ${activeTab === "perfil" ? "bg-gray-100 font-medium" : ""}`}
                  >
                    <User className="mr-3 h-5 w-5 text-gray-500" />
                    <span>Perfil</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab("preferencias")}
                    className={`flex items-center w-full px-4 py-3 hover:bg-gray-50 ${activeTab === "preferencias" ? "bg-gray-100 font-medium" : ""}`}
                  >
                    <Settings className="mr-3 h-5 w-5 text-gray-500" />
                    <span>Preferencias</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab("notificaciones")}
                    className={`flex items-center w-full px-4 py-3 hover:bg-gray-50 ${activeTab === "notificaciones" ? "bg-gray-100 font-medium" : ""}`}
                  >
                    <Bell className="mr-3 h-5 w-5 text-gray-500" />
                    <span>Notificaciones</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab("seguridad")}
                    className={`flex items-center w-full px-4 py-3 hover:bg-gray-50 ${activeTab === "seguridad" ? "bg-gray-100 font-medium" : ""}`}
                  >
                    <Shield className="mr-3 h-5 w-5 text-gray-500" />
                    <span>Seguridad</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab("pagos")}
                    className={`flex items-center w-full px-4 py-3 hover:bg-gray-50 ${activeTab === "pagos" ? "bg-gray-100 font-medium" : ""}`}
                  >
                    <CreditCard className="mr-3 h-5 w-5 text-gray-500" />
                    <span>Métodos de pago</span>
                  </button>
                </li>
                <li>
                  <button 
                    className="flex items-center w-full px-4 py-3 text-red-500 hover:bg-red-50"
                  >
                    <LogOut className="mr-3 h-5 w-5" />
                    <span>Cerrar sesión</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Área de contenido */}
          <div className="flex-1">
            <div className="bg-white shadow rounded-md p-6">
              {activeTab === "perfil" && (
                <div>
                  <h2 className="text-xl font-bold mb-6">Información de perfil</h2>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="flex flex-col items-center">
                        <img 
                          src={userData.perfil.avatar} 
                          alt="Avatar de usuario" 
                          className="w-32 h-32 rounded-full mb-4 object-cover"
                        />
                        <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm px-4 py-2 rounded-md">
                          Cambiar foto
                        </button>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <div className="space-y-4">
                        <div> -------------------------
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Nombre completo
                          </label>
                          <input 
                            type="text" 
                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                            value={userData.perfil.nombre}
                            onChange={(e) => actualizarPerfil("nombre", e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Correo electrónico
                          </label>
                          <input 
                            type="email" 
                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                            value={userData.perfil.email}
                            onChange={(e) => actualizarPerfil("email", e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Teléfono
                          </label>
                          <input 
                            type="tel" 
                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                            value={userData.perfil.telefono}
                            onChange={(e) => actualizarPerfil("telefono", e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Contraseña
                          </label>
                          <div className="relative">
                            <input 
                              type={mostrarContrasena ? "text" : "password"} 
                              className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10"
                              placeholder="••••••••"
                            />
                            <button 
                              className="absolute right-3 top-2.5 text-gray-500"
                              onClick={() => setMostrarContrasena(!mostrarContrasena)}
                            >
                              {mostrarContrasena ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "preferencias" && (
                <div>
                  <h2 className="text-xl font-bold mb-6">Preferencias generales</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center">
                        <Moon className="mr-3 h-5 w-5 text-gray-500" />
                        <span>Modo oscuro</span>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="sr-only peer"
                          checked={userData.preferencias.temaOscuro}
                          onChange={(e) => actualizarPreferencias("temaOscuro", null, e.target.checked)}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                      </label>
                    </div>
                    <div className="border-t border-gray-200 py-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <div className="flex items-center">
                          <Globe className="mr-3 h-5 w-5 text-gray-500" />
                          <span>Idioma</span>
                        </div>
                      </label>
                      <select 
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        value={userData.preferencias.idioma}
                        onChange={(e) => actualizarPreferencias("idioma", null, e.target.value)}
                      >
                        <option value="es">Español</option>
                        <option value="en">English</option>
                        <option value="fr">Français</option>
                        <option value="de">Deutsch</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "notificaciones" && (
                <div>
                  <h2 className="text-xl font-bold mb-6">Configuración de notificaciones</h2>
                  <div className="space-y-4">
                    <div className="border-b border-gray-200 pb-4">
                      <h3 className="font-medium mb-3">Canales de notificación</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span>Correo electrónico</span>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input 
                              type="checkbox" 
                              className="sr-only peer"
                              checked={userData.preferencias.notificaciones.email}
                              onChange={(e) => actualizarPreferencias("notificaciones", "email", e.target.checked)}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                          </label>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Notificaciones push</span>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input 
                              type="checkbox" 
                              className="sr-only peer"
                              checked={userData.preferencias.notificaciones.push}
                              onChange={(e) => actualizarPreferencias("notificaciones", "push", e.target.checked)}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                          </label>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>SMS</span>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input 
                              type="checkbox" 
                              className="sr-only peer"
                              checked={userData.preferencias.notificaciones.sms}
                              onChange={(e) => actualizarPreferencias("notificaciones", "sms", e.target.checked)}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-3">Tipos de notificaciones</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span>Nuevas ofertas de intercambio</span>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input 
                              type="checkbox" 
                              className="sr-only peer"
                              checked={userData.preferencias.notificaciones.nuevasOfertas}
                              onChange={(e) => actualizarPreferencias("notificaciones", "nuevasOfertas", e.target.checked)}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                          </label>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Actualizaciones de estado de intercambio</span>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input 
                              type="checkbox" 
                              className="sr-only peer"
                              checked={userData.preferencias.notificaciones.actualizacionesEstado}
                              onChange={(e) => actualizarPreferencias("notificaciones", "actualizacionesEstado", e.target.checked)}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                          </label>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Boletín de noticias y ofertas</span>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input 
                              type="checkbox" 
                              className="sr-only peer"
                              checked={userData.preferencias.notificaciones.boletinNoticias}
                              onChange={(e) => actualizarPreferencias("notificaciones", "boletinNoticias", e.target.checked)}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "seguridad" && (
                <div>
                  <h2 className="text-xl font-bold mb-6">Configuración de seguridad</h2>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between py-2 border-b border-gray-200 pb-4">
                      <div>
                        <h3 className="font-medium">Autenticación de dos factores</h3>
                        <p className="text-sm text-gray-500 mt-1">
                          Añade una capa extra de seguridad a tu cuenta
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="sr-only peer"
                          checked={userData.preferencias.seguridad.autenticacionDosFactores}
                          onChange={(e) => actualizarPreferencias("seguridad", "autenticacionDosFactores", e.target.checked)}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                      </label>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Sesiones activas</h3>
                      <div className="bg-gray-50 p-4 rounded-md">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Este dispositivo</p>
                            <p className="text-sm text-gray-500">Última actividad: Hace 2 minutos</p>
                          </div>
                          <button className="text-red-500 text-sm hover:text-red-600">
                            Cerrar sesión
                          </button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <button className="mt-4 bg-red-50 text-red-600 px-4 py-2 rounded-md hover:bg-red-100">
                        Cerrar todas las sesiones
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "pagos" && (
                <div>
                  <h2 className="text-xl font-bold mb-6">Métodos de pago</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-3">Método preferido</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div 
                          className={`border rounded-md p-4 cursor-pointer ${userData.preferencias.pago.metodoPreferido === "tarjeta" ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}
                          onClick={() => actualizarPreferencias("pago", "metodoPreferido", "tarjeta")}
                        >
                          <div className="flex items-center mb-2">
                            <CreditCard className="h-5 w-5 mr-2 text-blue-500" />
                            <span className="font-medium">Tarjeta de crédito</span>
                          </div>
                          <p className="text-sm text-gray-500">
                            Visa, Mastercard, etc.
                          </p>
                        </div>
                        <div 
                          className={`border rounded-md p-4 cursor-pointer ${userData.preferencias.pago.metodoPreferido === "paypal" ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}
                          onClick={() => actualizarPreferencias("pago", "metodoPreferido", "paypal")}
                        >
                          <div className="flex items-center mb-2">
                            <span className="font-medium">PayPal</span>
                          </div>
                          <p className="text-sm text-gray-500">
                            Pago rápido y seguro
                          </p>
                        </div>
                        <div 
                          className={`border rounded-md p-4 cursor-pointer ${userData.preferencias.pago.metodoPreferido === "transferencia" ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}
                          onClick={() => actualizarPreferencias("pago", "metodoPreferido", "transferencia")}
                        >
                          <div className="flex items-center mb-2">
                            <span className="font-medium">Transferencia bancaria</span>
                          </div>
                          <p className="text-sm text-gray-500">
                            Directa a tu cuenta
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-medium">Tarjetas guardadas</h3>
                        <button className="text-blue-500 text-sm hover:text-blue-600">
                          + Añadir nueva tarjeta
                        </button>
                      </div>
                      
                      {userData.preferencias.pago.tarjetas.map(tarjeta => (
                        <div key={tarjeta.id} className="bg-gray-50 p-4 rounded-md mb-3 flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="mr-3">
                              {tarjeta.tipo === "visa" && <span className="font-bold text-blue-700">VISA</span>}
                              {tarjeta.tipo === "mastercard" && <span className="font-bold text-red-500">MC</span>}
                            </div>
                            <div>
                              <p className="font-medium">•••• •••• •••• {tarjeta.ultimos4}</p>
                              <p className="text-sm text-gray-500">Expira: {tarjeta.expira}</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            {tarjeta.predeterminada && (
                              <span className="mr-4 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                                Predeterminada
                              </span>
                            )}
                            <button className="text-gray-500 hover:text-gray-700">
                              <span className="sr-only">Editar</span>
                              <Settings size={18} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
    
  );
};

export default ConfigPage;
