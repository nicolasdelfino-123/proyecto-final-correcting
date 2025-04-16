import React, { useState, useContext } from "react";
import LoginModal from "./LoginModal.js";
import CartModal from "./CartModal.js";
import { Context } from "../store/appContext.js";

const LayoutHeader = () => {
  const { store, actions } = useContext(Context);
  const [location, setLocation] = useState("Madrid");
  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);

  // Si querés manejar el número de items desde el store, podrías tener algo así:
  const cartItems = store.cartItems || 2; // Ponele valor por defecto si no está definido aún

  return (
    <>
      <header className="sticky-top bg-white shadow-sm">
        <div className="container d-flex align-items-center py-3 flex-wrap">
          {/* Logo */}
          <div
            className="d-flex align-items-center me-auto me-md-4"
            role="button"
            onClick={() => actions.navigateTo("home")}
          >
            <i className="bi bi-house-fill fs-2 text-danger me-2"></i>
            <h1 className="fs-4 fw-bold mb-0">GrouponClone</h1>
          </div>

          {/* Iconos móviles */}
          <div className="d-flex d-md-none align-items-center gap-3 order-md-last">
            <div
              className="position-relative"
              onClick={() => setShowCart(true)}
              role="button"
            >
              <i className="bi bi-cart fs-4 text-dark"></i>
              {cartItems > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartItems}
                </span>
              )}
            </div>

            <div onClick={() => setShowLogin(true)} role="button">
              <i className="bi bi-person-circle fs-4 text-dark"></i>
            </div>

            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="bi bi-list fs-3"></i>
            </button>
          </div>

          <div className="d-flex flex-column flex-md-row flex-grow-1 align-items-md-center mt-3 mt-md-0">
            <div className="d-flex flex-grow-1 align-items-center me-md-4">
              <input
                type="text"
                className="form-control me-2 rounded-pill"
                placeholder="Busca restaurantes, spas, actividades..."
              />
              <div className="d-flex align-items-center bg-light px-3 py-2 rounded-pill">
                <i className="bi bi-geo-alt-fill me-2 text-secondary"></i>
                <span className="text-muted small">{location}</span>
              </div>
            </div>

            <div className="d-none d-md-flex align-items-center gap-3 ms-auto">
              <div
                className="position-relative"
                onClick={() => setShowCart(true)}
                role="button"
              >
                <i className="bi bi-cart fs-4 text-dark"></i>
                {cartItems > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartItems}
                  </span>
                )}
              </div>

              <div onClick={() => setShowLogin(true)} role="button">
                <i className="bi bi-person-circle fs-4 text-dark"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav p-3 border-top">
            <li className="nav-item py-2">
              <a
                className="nav-link"
                href="#"
                onClick={() => actions.setCategory("top")}
              >
                Ofertas del día
              </a>
            </li>
            <li className="nav-item py-2">
              <a
                className="nav-link"
                href="#"
                onClick={() => actions.setCategory("food")}
              >
                Restaurantes
              </a>
            </li>
            <li className="nav-item py-2">
              <a
                className="nav-link"
                href="#"
                onClick={() => actions.setCategory("beauty")}
              >
                Belleza y spa
              </a>
            </li>
            <li className="nav-item py-2">
              <a
                className="nav-link"
                href="#"
                onClick={() => actions.setCategory("activities")}
              >
                Actividades
              </a>
            </li>
            <li className="nav-item py-2">
              <a
                className="nav-link"
                href="#"
                onClick={() => actions.setCategory("travel")}
              >
                Viajes
              </a>
            </li>
          </ul>
        </div>
      </header>

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      {showCart && <CartModal onClose={() => setShowCart(false)} />}
    </>
  );
};

export default LayoutHeader;
