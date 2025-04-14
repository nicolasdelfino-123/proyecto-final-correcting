import React, { useState } from 'react';

const SpecialOffersCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const specialOffers = [
    {
      id: 1,
      title: 'Escapada Romántica',
      description: 'Fin de semana en hotel boutique con cena',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      city: 'Barcelona'
    },
    {
      id: 2,
      title: 'Aventura en Pirineos',
      description: 'Rafting y senderismo con guía experto',
      image: 'https://images.unsplash.com/photo-1532339142463-fd0a89797911?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      city: 'Huesca'
    },
    {
      id: 3,
      title: 'Tour Gastronómico',
      description: '5 paradas en restaurantes locales',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      city: 'San Sebastián'
    },
    {
      id: 4,
      title: 'Spa de Lujo',
      description: 'Día completo con masajes y tratamientos',
      image: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      city: 'Madrid'
    },
    {
      id: 5,
      title: 'Tour Vinícola',
      description: 'Visita a bodegas con catas incluidas',
      image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      city: 'La Rioja'
    },
    {
      id: 6,
      title: 'Parque de Aventuras',
      description: 'Tirolinas y puentes colgantes en la naturaleza',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      city: 'Guadalajara'
    },
    {
      id: 7,
      title: 'Clase de Cocina',
      description: 'Aprende de chefs profesionales',
      image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      city: 'Valencia'
    },
    {
      id: 8,
      title: 'Observación de Estrellas',
      description: 'Tour astronómico con cena campestre',
      image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      city: 'Granada'
    }
  ];

  const CARDS_PER_PAGE = 4;
  const totalPages = Math.ceil(specialOffers.length / CARDS_PER_PAGE);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= specialOffers.length - CARDS_PER_PAGE ? 0 : prevIndex + CARDS_PER_PAGE
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? specialOffers.length - CARDS_PER_PAGE : prevIndex - CARDS_PER_PAGE
    );
  };

  const visibleOffers = specialOffers.slice(currentIndex, currentIndex + CARDS_PER_PAGE);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Ofertas Especiales</h2>
        
        <div className="relative">
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
              {visibleOffers.map((offer) => (
                <div key={offer.id} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${offer.image})` }}></div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold">{offer.title}</h3>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">{offer.city}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{offer.description}</p>
                    <button className="w-full py-2 bg-transparent border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition text-sm">
                      Más información
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {specialOffers.length > CARDS_PER_PAGE && (
            <>
              <button 
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>
        
        {totalPages > 1 && (
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * CARDS_PER_PAGE)}
                className={`w-3 h-3 rounded-full ${currentIndex === index * CARDS_PER_PAGE ? 'bg-red-500' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SpecialOffersCarousel;

// DONE