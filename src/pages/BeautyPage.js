import React from 'react';
import CategoryCard from '../components/CategoryCard';

const BeautyPage = () => {
  const beautyOffers = [
    {
      id: 1,
      title: 'Tratamiento Facial Premium',
      description: 'Limpieza facial profunda con máscara de oro',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      city: 'Valencia',
      discountPrice: 45,
      originalPrice: 90
    },
    {
      id: 2,
      title: 'Manicura y Pedicura Spa',
      description: 'Tratamiento completo de manos y pies con esmaltado semipermanente',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      city: 'Sevilla',
      discountPrice: 35,
      originalPrice: 60
    },
    // Agrega 6 ofertas más similares
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Belleza y Bienestar</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {beautyOffers.map(offer => (
            <CategoryCard key={offer.id} offer={offer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeautyPage;