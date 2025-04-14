import React from 'react';

const DealCard = ({ deal }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 bg-gray-200 relative">
        <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
          -{deal.discount}%
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{deal.title}</h3>
        <p className="text-gray-600 text-sm mb-3">{deal.description}</p>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-gray-400 line-through mr-2">€{deal.originalPrice}</span>
            <span className="font-bold text-red-500">€{deal.discountPrice}</span>
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span className="ml-1 text-sm text-gray-600">{deal.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealCard;