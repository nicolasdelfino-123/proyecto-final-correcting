import React from "react";
import CategoryCard from "./CategoryCard";

const RelatedContent = ({ deals, onNavigate }) => {
  const categories = [
    {
      id: "beauty",
      name: "Belleza",
      deals: deals.filter((d) => d.category === "beauty").slice(0, 4),
    },
    {
      id: "food",
      name: "Gastronomía",
      deals: deals.filter((d) => d.category === "food").slice(0, 4),
    },
    {
      id: "travel",
      name: "Viajes",
      deals: deals.filter((d) => d.category === "travel").slice(0, 4),
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container px-3">
        <h2 className="fs-3 fw-bold mb-4">También te puede interesar</h2>

        {categories.map((category) => (
          <div key={category.id} className="mb-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3 className="fs-4 fw-bold mb-0">{category.name}</h3>
              <button
                onClick={() => onNavigate(category.id)}
                className="btn btn-link text-danger text-decoration-none p-0"
              >
                Explorar {category.name.toLowerCase()} →
              </button>
            </div>
            <div className="row g-4">
              {category.deals.map((deal) => (
                <div key={deal.id} className="col-12 col-md-6 col-lg-4">
                  {/* Aseguramos altura uniforme */}
                  <div className="h-100">
                    <CategoryCard offer={deal} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedContent;
