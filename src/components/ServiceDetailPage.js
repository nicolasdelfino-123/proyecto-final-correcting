import React, { useState } from "react";
import SpecialOffersCarousel from "./SpecialOffersCarousel";

const ServiceDetailPage = ({ service, onBack }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookingSuccess(true);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-5 h-5 ${
            i <= rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Volver
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
            <div className="mt-8">
              <h1 className="text-3xl font-bold mb-2">{service.title}</h1>

              <div className="flex items-center mb-4">
                <div className="flex mr-4">{renderStars(service.rating)}</div>
                <span className="text-gray-600">{service.reviews} reseñas</span>
              </div>

              <div className="flex items-center mb-6">
                <span className="text-2xl font-bold text-red-600 mr-4">
                  ${service.discountPrice}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  ${service.originalPrice}
                </span>
                <span className="ml-4 bg-red-100 text-red-800 text-sm font-medium px-2.5 py-0.5 rounded">
                  {Math.round(
                    (1 - service.discountPrice / service.originalPrice) * 100
                  )}
                  % OFF
                </span>
              </div>

              <p className="text-gray-700 mb-6">{service.shortDescription}</p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">
                  Descripción detallada
                </h3>
                <p className="text-gray-700">{service.longDescription}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Ubicación</h3>
                <p className="text-gray-700">{service.location}</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <p className="text-blue-800 font-medium">
                  <span className="font-bold">{service.buyers}</span> personas
                  compraron este servicio
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg sticky top-8">
            <h2 className="text-2xl font-bold mb-6">Reservar servicio</h2>

            {bookingSuccess ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                <p className="font-bold">¡Reserva exitosa!</p>
                <p>
                  Tu cita para {service.title} ha sido agendada para el{" "}
                  {selectedDate} a las {selectedTime}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    Fecha
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    Hora
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    required
                  >
                    <option value="">Selecciona una hora</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="13:00">01:00 PM</option>
                    <option value="15:00">03:00 PM</option>
                    <option value="17:00">05:00 PM</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    Cantidad
                  </label>
                  <div className="flex items-center">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1 border border-gray-300 rounded-l-lg bg-gray-100 hover:bg-gray-200"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 border-t border-b border-gray-300 bg-white">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1 border border-gray-300 rounded-r-lg bg-gray-100 hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                  >
                    Comprar ahora
                  </button>
                  <button
                    type="button"
                    className="w-full bg-white border border-red-600 text-red-600 hover:bg-red-50 font-bold py-3 px-4 rounded-lg transition-colors"
                  >
                    Agregar al carrito
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">También puede interesarte</h2>
          <SpecialOffersCarousel />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;

// DONE
