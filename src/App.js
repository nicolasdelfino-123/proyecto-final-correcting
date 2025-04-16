import React, { useContext, useEffect } from "react";
import { Context } from "./store/appContext";

import LayoutHeader from "./components/LayoutHeader";
import HeroBanner from "./components/HeroBanner";
import CategoriesSection from "./components/CategoriesSection";
import SearchFilters from "./components/SearchFilters";
import FeaturedDeals from "./components/FeaturedDeals";
import RelatedContent from "./components/RelatedContent";
import PromoBanner from "./components/PromoBanner";
import SpecialOffersCarousel from "./components/SpecialOffersCarousel";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import CategoryPage from "./components/CategoryPage";
import ServiceDetailPage from "./components/ServiceDetailPage";
import mockData from "./mock/data";

const HomePage = () => {
  const { store, actions } = useContext(Context);
  const [deals, setDeals] = React.useState(store.mockData.featuredDeals || []);

  useEffect(() => {
    if (Object.keys(store.mockData).length === 0) {
      actions.loadMockData(mockData);
      setDeals(mockData.featuredDeals);
    }
  }, []);

  const handleFilter = ({ city, category }) => {
    let filtered = [...mockData.featuredDeals];

    if (city) {
      filtered = filtered.filter((deal) => deal.city === city);
    }

    if (category) {
      filtered = filtered.filter((deal) => deal.category === category);
    }

    setDeals(filtered);
  };

  return (
    <>
      <HeroBanner />
      <CategoriesSection onNavigate={actions.setCategory} />
      <SearchFilters
        cities={mockData.cities}
        categories={mockData.categories}
        onFilter={handleFilter}
      />
      <FeaturedDeals
        deals={deals}
        onNavigate={actions.setCategory}
        onViewService={actions.setService}
      />
      <RelatedContent
        deals={mockData.featuredDeals}
        onNavigate={actions.setCategory}
        onViewService={actions.setService}
      />
      <PromoBanner />
      <SpecialOffersCarousel />
      <Newsletter />
    </>
  );
};

const App = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="min-h-screen bg-gray-100">
      <LayoutHeader />
      <main className="container mx-auto px-4 py-8">
        {store.currentPage === "home" ? (
          <HomePage />
        ) : store.currentPage === "category" ? (
          <CategoryPage
            categoryName={store.categoryData[store.currentCategory].name}
            offers={store.categoryData[store.currentCategory].offers}
            onBack={actions.goBack}
            onViewService={actions.setService}
          />
        ) : (
          <ServiceDetailPage
            service={store.currentService}
            onBack={actions.goBack}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
