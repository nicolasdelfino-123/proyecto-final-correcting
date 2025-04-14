import React from 'react';
import CategoryCard from '../components/CategoryCard';

const TravelPage = () => {
  const travelOffers = [
    {
      id: 1,
      title: 'Escapada a París',
      description: '3 noches en hotel 4* con vuelos incluidos',
      image: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      city: 'Desde Madrid',
      discountPrice: 299,
      originalPrice: 450
    },
    {
      id: 2,
      title: 'Fin de Semana en Costa',
      description: '2 noches en hotel frente al mar con desayuno buffet',
      image: 'https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      city: 'Málaga',
      discountPrice: 129,
      originalPrice: 210
    },
    // Agrega 6 ofertas más similares
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Viajes y Escapadas</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {travelOffers.map(offer => (
            <CategoryCard key={offer.id} offer={offer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelPage;