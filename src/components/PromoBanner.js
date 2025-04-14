import React from "react";

const PromoBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl overflow-hidden mb-8">
      <div className="container mx-auto px-4 py-10 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
          ¡Ofertas Exclusivas!
        </h3>
        <p className="text-lg text-blue-100 mb-4">
          Descubre descuentos especiales solo para suscriptores
        </p>
        <div className="flex justify-center">
          <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-lg px-6 py-3 inline-block">
            <span className="text-white font-medium">
              Hasta 60% de descuento
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
