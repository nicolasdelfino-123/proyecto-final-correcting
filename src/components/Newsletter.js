import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simular envío del formulario
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <div className="bg-dark text-white py-12 px-4 rounded-xl">
      <div className="container text-center">
        <h3 className="h3 font-weight-bold mb-4">
          Suscríbete a nuestro newsletter
        </h3>
        <p className="mb-6 text-white">
          Recibe las mejores ofertas directamente en tu correo
        </p>

        {subscribed ? (
          <div className="alert alert-success py-3 px-4 rounded-lg inline-block">
            ¡Gracias por suscribirte!
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="d-flex flex-column flex-sm-row gap-2 mx-auto max-w-md"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu correo electrónico"
              required
              className="form-control w-100 w-sm-75 px-4 py-3 rounded-lg text-dark"
            />
            <button type="submit" className="btn btn-danger px-6 py-3 ml-sm-2">
              Suscribirme
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
