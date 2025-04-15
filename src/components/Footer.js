import React from "react";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 col-md-3">
            <h4 className="font-weight-bold mb-3">GrouponClone</h4>
            <p>
              Descubre las mejores ofertas en tu ciudad y ahorra hasta un 70%.
            </p>
          </div>
          <div className="col-12 col-md-3">
            <h4 className="font-weight-bold mb-3">Explorar</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#" className=" hover:text-white">
                  Ofertas
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-white">
                  Categorías
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-white">
                  Ciudades
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-white">
                  Novedades
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3">
            <h4 className="font-weight-bold mb-3">Empresa</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#" className=" hover:text-white">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-white">
                  Trabaja con nosotros
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-white">
                  Para negocios
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-white">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3">
            <h4 className="font-weight-bold mb-3">Legal</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#" className=" hover:text-white">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-white">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-white">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-top border-secondary pt-3 d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className=" mb-3 mb-md-0">
            © 2023 GrouponClone. Todos los derechos reservados.
          </p>
          <div className="d-flex space-x-3">
            <a href="#" className=" hover:text-white">
              <BsFacebook size={24} />
            </a>
            <a href="#" className=" hover:text-white">
              <BsTwitter size={24} />
            </a>
            <a href="#" className=" hover:text-white">
              <BsInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
