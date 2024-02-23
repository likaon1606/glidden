import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "../styles/nav2.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="menu">
      <div className="navbar">
        <div className="nav_logo">
          <img src="./assets/LOGO.png" alt="logo" />
        </div>
        <div className={`nav_items sci ${isOpen && "open"}`}>
          <NavLink
            to="/"
            className="fa animated-line"
            data-text="Bienvenidos"
            onClick={() => setIsOpen(!isOpen)}
          >
            Inicio
          </NavLink>
          <NavLink
            to="/menuQR"
            className="animated-line"
            onClick={() => setIsOpen(!isOpen)}
          >
            Productos
          </NavLink>
          <NavLink
            to="/nosotros"
            className="animated-line"
            onClick={() => setIsOpen(!isOpen)}
          >
            Catálogo
          </NavLink>
          <NavLink
            to="/contactanos"
            className="animated-line"
            onClick={() => setIsOpen(!isOpen)}
          >
            Trends
          </NavLink>
          <button className="btn-red-white">Tiendas</button>
        </div>
        <div
          className={`nav_toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
