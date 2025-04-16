const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      currentPage: "home",
      currentCategory: null,
      currentService: null,
      categoryData: {
        top: {
          name: "Top Ofertas",
          offers: [], // lo cargamos después con mockData
        },
        beauty: {
          name: "Belleza y Bienestar",
          offers: [],
        },
        food: {
          name: "Gastronomía",
          offers: [],
        },
        travel: {
          name: "Viajes y Escapadas",
          offers: [],
        },
      },
      mockData: {}, // para guardarlo una vez y no andar importando en todos lados
    },

    actions: {
      loadMockData: (data) => {
        const store = getStore();
        setStore({
          ...store,
          mockData: data,
          categoryData: {
            ...store.categoryData,
            top: { ...store.categoryData.top, offers: data.topOffers },
            beauty: { ...store.categoryData.beauty, offers: data.beautyOffers },
            food: { ...store.categoryData.food, offers: data.foodOffers },
            travel: { ...store.categoryData.travel, offers: data.travelOffers },
          },
        });
      },

      navigateTo: (page) => {
        setStore({ currentPage: page });
      },

      setCategory: (category) => {
        setStore({ currentCategory: category, currentPage: "category" });
      },

      setService: (service) => {
        setStore({ currentService: service, currentPage: "service" });
      },

      goBack: () => {
        const { currentService } = getStore();
        setStore({
          currentService: null,
          currentPage: currentService ? "category" : "home",
        });
      },
    },
  };
};

export default getState;
