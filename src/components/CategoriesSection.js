import React from "react";

const CategoriesSection = ({ onNavigate }) => {
  const categories = [
    { id: "top", name: "Top Ofertas", icon: "⭐" },
    { id: "beauty", name: "Belleza", icon: "💄" },
    { id: "food", name: "Gastronomía", icon: "🍴" },
    { id: "travel", name: "Viajes", icon: "✈️" },
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <h2 className="h4 fw-bold mb-4">Explora por categorías</h2>
        <div className="row g-3">
          {categories.map((category) => (
            <div className="col-6 col-md-3" key={category.id}>
              <button
                onClick={() => onNavigate(category.id)}
                className="btn border border-light w-100 py-3 d-flex flex-column align-items-center justify-content-center rounded shadow-sm"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#ececec")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "")
                }
              >
                <span className="fs-2 mb-2">{category.icon}</span>
                <span className="fw-semibold">{category.name}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
