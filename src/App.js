import React, { useState } from 'react';
import LayoutHeader from './components/LayoutHeader';
import HeroBanner from './components/HeroBanner';
import CategoriesSection from './components/CategoriesSection';
import SearchFilters from './components/SearchFilters';
import FeaturedDeals from './components/FeaturedDeals';
import RelatedContent from './components/RelatedContent';
import PromoBanner from './components/PromoBanner';
import SpecialOffersCarousel from './components/SpecialOffersCarousel';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CategoryPage from './components/CategoryPage';
import ServiceDetailPage from './components/ServiceDetailPage';
import mockData from './mock/data';

const HomePage = ({ onNavigate, onViewService }) => {
  const [deals, setDeals] = useState(mockData.featuredDeals);
  
  const handleFilter = ({ city, category }) => {
    let filtered = [...mockData.featuredDeals];
    
    if (city) {
      filtered = filtered.filter(deal => deal.city === city);
    }
    
    if (category) {
      filtered = filtered.filter(deal => deal.category === category);
    }
    
    setDeals(filtered);
  };

  return (
    <>
      <HeroBanner />
      <CategoriesSection onNavigate={onNavigate} />
      <SearchFilters 
        cities={mockData.cities} 
        categories={mockData.categories} 
        onFilter={handleFilter} 
      />
      <FeaturedDeals deals={deals} onNavigate={onNavigate} onViewService={onViewService} />
      <RelatedContent deals={mockData.featuredDeals} onNavigate={onNavigate} onViewService={onViewService} />
      <PromoBanner />
      <SpecialOffersCarousel />
      <Newsletter />
    </>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentService, setCurrentService] = useState(null);

  const categoryData = {
    top: {
      name: 'Top Ofertas',
      offers: mockData.topOffers
    },
    beauty: {
      name: 'Belleza y Bienestar',
      offers: mockData.beautyOffers
    },
    food: {
      name: 'Gastronomía',
      offers: mockData.foodOffers
    },
    travel: {
      name: 'Viajes y Escapadas',
      offers: mockData.travelOffers
    }
  };

  const handleNavigate = (category) => {
    setCurrentPage('category');
    setCurrentCategory(category);
  };

  const handleViewService = (service) => {
    setCurrentPage('service');
    setCurrentService(service);
  };

  const handleBack = () => {
    setCurrentPage(currentService ? 'category' : 'home');
    setCurrentService(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <LayoutHeader />
      <main className="container mx-auto px-4 py-8">
        {currentPage === 'home' ? (
          <HomePage onNavigate={handleNavigate} onViewService={handleViewService} />
        ) : currentPage === 'category' ? (
          <CategoryPage 
            categoryName={categoryData[currentCategory].name} 
            offers={categoryData[currentCategory].offers} 
            onBack={handleBack}
            onViewService={handleViewService}
          />
        ) : (
          <ServiceDetailPage 
            service={currentService} 
            onBack={handleBack} 
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;

// DONE