import React from "react";
import CategoryCard from "../components/CategoryCard";

const FoodPage = () => {
  const foodOffers = [
    {
      id: 1,
      title: "Menú Degustación",
      description: "5 platos con maridaje en restaurante con estrella Michelin",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      city: "San Sebastián",
      discountPrice: 75,
      originalPrice: 150,
    },
    {
      id: 2,
      title: "Taller de Cocina Japonesa",
      description: "Aprende a preparar sushi auténtico con chef profesional",
      image:
        "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      city: "Madrid",
      discountPrice: 50,
      originalPrice: 80,
    },
    // Agrega 6 ofertas más similares
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Gastronomía</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {foodOffers.map((offer) => (
            <CategoryCard key={offer.id} offer={offer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodPage;
