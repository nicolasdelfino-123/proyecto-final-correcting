import React from 'react';
import CategoryCard from './CategoryCard';

const RelatedProducts = ({ title, products, onViewService }) => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {products.map((product, index) => (
          <div key={`related-${product.id}-${index}`} className="hover:scale-105 transition-transform">
            <CategoryCard 
              offer={product} 
              onViewService={onViewService} 
              compact={true}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;