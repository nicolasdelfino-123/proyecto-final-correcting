import React, { useState } from 'react';
import CategoryCard from './CategoryCard';
import SearchFilters from './SearchFilters';
import RelatedProducts from './RelatedProducts';

const CategoryPage = ({ categoryName, offers, onBack, onViewService }) => {
  const [filteredOffers, setFilteredOffers] = useState(offers.slice(0, 8));
  const [sortOption, setSortOption] = useState('popular');

  const handleSort = (option) => {
    setSortOption(option);
    let sorted = [...offers].slice(0, 8);
    
    if (option === 'price-asc') {
      sorted.sort((a, b) => a.discountPrice - b.discountPrice);
    } else if (option === 'price-desc') {
      sorted.sort((a, b) => b.discountPrice - a.discountPrice);
    } else if (option === 'rating') {
      sorted.sort((a, b) => b.rating - a.rating);
    }
    
    setFilteredOffers(sorted);
  };

  const handleFilter = ({ minPrice, maxPrice }) => {
    let filtered = [...offers];
    
    if (minPrice) {
      filtered = filtered.filter(offer => offer.discountPrice >= minPrice);
    }
    
    if (maxPrice) {
      filtered = filtered.filter(offer => offer.discountPrice <= maxPrice);
    }
    
    setFilteredOffers(filtered.slice(0, 8));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <button 
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver al inicio
        </button>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-3xl font-bold">{categoryName}</h1>
          <div className="mt-4 md:mt-0">
            <label className="text-gray-600 mr-2">Ordenar por:</label>
            <select 
              value={sortOption}
              onChange={(e) => handleSort(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black"
            >
              <option value="popular">Más populares</option>
              <option value="price-asc">Precio: menor a mayor</option>
              <option value="price-desc">Precio: mayor a menor</option>
              <option value="rating">Mejor calificados</option>
            </select>
          </div>
        </div>

        <SearchFilters onFilter={handleFilter} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredOffers.map((offer, index) => (
            <CategoryCard 
              key={`${offer.id}-${index}`} 
              offer={offer} 
              onViewService={onViewService} 
            />
          ))}
        </div>

        <RelatedProducts 
          title="También puede interesarte" 
          products={offers.slice(0, 6)} 
          onViewService={onViewService} 
        />
      </div>
    </div>
  );
};

export default CategoryPage;