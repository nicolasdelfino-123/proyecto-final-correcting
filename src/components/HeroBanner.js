import React from "react";

const HeroBanner = () => {
  return (
    <div
      className="position-relative bg-danger bg-gradient rounded-4 overflow-hidden mb-5"
      style={{ background: "linear-gradient(to right, #ef4444, #dc2626)" }}
    >
      <div className="container py-5 px-4">
        <div className="mx-auto" style={{ maxWidth: "640px" }}>
          <h2
            className="text-white fw-bold mb-3"
            style={{ fontSize: "2.5rem" }}
          >
            Descubre increíbles ofertas cerca de ti
          </h2>
          <p
            className="text-light mb-4"
            style={{ fontSize: "1.25rem", color: "#fecaca" }}
          >
            Ahorra hasta un 70% en tus experiencias favoritas
          </p>
          <button className="btn bg-white text-danger fw-semibold px-4 py-2 rounded-3 shadow-sm">
            Explorar ofertas
          </button>
        </div>
      </div>

      {/* Círculo dentro del banner */}
      <div
        className="position-absolute rounded-circle"
        style={{
          width: "16rem",
          height: "16rem",
          backgroundColor: "#f87171",
          opacity: 0.2,
          bottom: 0,
          right: 0,
          transform: "translate(5rem, 5rem)",
        }}
      ></div>
    </div>
  );
};

export default HeroBanner;
