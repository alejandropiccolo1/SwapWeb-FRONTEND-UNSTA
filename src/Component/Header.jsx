import React from "react";
import "../styles/Header.css";

const Header = ({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory }) => {
  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);

  return (
    <header className="bg-light border-bottom w-100" style={{ position: "relative", zIndex: 10 }}>
      <div className="container-fluid py-2 px-4">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-3 d-flex align-items-center">
            <h2 className="mb-0 fw-bold">
              <span style={{ color: "#00c853" }}>Swap</span>
              <span style={{ color: "#00bcd4" }}>Web</span>
            </h2>
          </div>

          <div className="col-md-6">
            <div className="d-flex flex-column align-items-center">
              <div className="input-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Buscar productos, marcas y más..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <button className="btn btn-outline-secondary" type="button">
                  🔍
                </button>
              </div>
              <select className="form-select w-100" value={selectedCategory} onChange={handleCategoryChange}>
                <option value="">Categorías</option>
                <option value="tecnologia">Tecnología</option>
                <option value="electrodomesticos">Electrodomésticos</option>
                <option value="ropa">Ropa</option>
              </select>
            </div>
          </div>

          <div className="col-md-3 d-flex justify-content-end gap-2">
            <button className="btn btn-outline-primary">Crear cuenta</button>
            <button className="btn btn-outline-success">Ingresar</button>
            <button className="btn btn-outline-dark">Mis transacciones</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
