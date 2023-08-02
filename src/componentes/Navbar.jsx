import { FaBeer } from 'react-icons/fa';
import { Carrito } from './Carrito';
import { useState } from 'react';

export const Navbar = ({ elementosCarrito }) => {
  const [visible, setVisible] = useState(false);

  const mostrarCarrito = () => {
    setVisible(!visible);
  };

  return (
    <>
      <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <div className="text-lg font-bold">Mi Aplicación</div>
        <ul className="flex space-x-4">
          <li className="nav-item">
            <a className="hover:text-gray-300" href="#home">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a className="hover:text-gray-300" href="#about">
              Acerca de
            </a>
          </li>
          <li className="nav-item">
            <a className="hover:text-gray-300" href="#services">
              Servicios
            </a>
          </li>
          <li className="nav-item">
            <a className="hover:text-gray-300" href="#contact">
              Contacto
            </a>
          </li>
        </ul>
        <div>
          <button
            className="p-2 rounded bg-gray-700 hover:bg-gray-600"
            onClick={mostrarCarrito}
          >
            <FaBeer className="text-white" />
          </button>
        </div>
      </nav>
      {visible && <Carrito elementosCarrito={elementosCarrito} />}
    </>
  );
};
