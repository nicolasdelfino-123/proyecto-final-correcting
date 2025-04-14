import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simular envío del formulario
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <div className="bg-gray-900 text-white py-12 px-4 rounded-xl">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">Suscríbete a nuestro newsletter</h3>
        <p className="text-gray-300 mb-6">Recibe las mejores ofertas directamente en tu correo</p>
        
        {subscribed ? (
          <div className="bg-green-500 text-white py-3 px-4 rounded-lg inline-block">
            ¡Gracias por suscribirte!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu correo electrónico"
              required
              className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition whitespace-nowrap"
            >
              Suscribirme
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Newsletter;