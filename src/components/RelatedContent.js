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
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">También te puede interesar</h2>

        {categories.map((category) => (
          <div key={category.id} className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">{category.name}</h3>
              <button
                onClick={() => onNavigate(category.id)}
                className="text-red-500 hover:text-red-700 font-medium"
              >
                Explorar {category.name.toLowerCase()} →
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.deals.map((deal) => (
                <CategoryCard key={deal.id} offer={deal} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedContent;
