import React from "react";

const PromoBanner = () => {
  return (
    <div className="bg-primary bg-gradient rounded-4 overflow-hidden mb-4">
      <div className="container text-center py-5 px-3">
        <h3 className="fs-2 fw-bold text-white mb-3">¡Ofertas Exclusivas!</h3>
        <p className="fs-5 text-light mb-4">
          Descubre descuentos especiales solo para suscriptores
        </p>
        <div className="d-flex justify-content-center">
          <div
            className="px-4 py-2 rounded-3"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(6px)",
            }}
          >
            <span className="text-white fw-medium">Hasta 60% de descuento</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
