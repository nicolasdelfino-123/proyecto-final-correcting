import React from 'react';
import CategoryCard from '../components/CategoryCard';

const TopPage = () => {
  const topOffers = [
    {
      id: 1,
      title: 'Spa de Lujo Completo',
      description: 'Día completo con acceso a todas las instalaciones y 2 tratamientos',
      image: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      city: 'Madrid',
      discountPrice: 89,
      originalPrice: 150
    },
    {
      id: 2,
      title: 'Cena con Vistas',
      description: 'Menú degustación en restaurante con terraza panorámica',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      city: 'Barcelona',
      discountPrice: 65,
      originalPrice: 110
    },
    // Agrega 6 ofertas más similares
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Las Mejores Ofertas</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topOffers.map(offer => (
            <CategoryCard key={offer.id} offer={offer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopPage;