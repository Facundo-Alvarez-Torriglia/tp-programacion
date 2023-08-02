import React, { useState, useEffect } from 'react';

export const Carrito = ({ elementosCarrito }) => {
  const [datos, setDatos] = useState(elementosCarrito);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let totalCalculado = 0;
    datos.forEach((el) => {
      totalCalculado += el.price;
    });
    setTotal(totalCalculado);
  }, [datos]);

  const quitarDelCarrito = (elemento) => {
    setDatos(datos.filter((el) => el.id !== elemento.id));
  };

  return (
    <div className="contenedor-carrito p-4">
      {datos.map((elemento) => (
        <div className="productoCarrito flex items-center space-x-4" key={elemento.id}>
          <div>
            <img src={elemento.image} alt="imagen" className="w-16 h-16" />
          </div>
          <div>
            <h6 className="text-lg font-medium">{elemento.title}</h6>
            <h6>{elemento.category}</h6>
            <p>{elemento.price} $</p>
          </div>
          <button
            className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"
            onClick={() => quitarDelCarrito(elemento)}
          >
            Quitar del Carrito
          </button>
        </div>
      ))}
      <button
        className="px-4 py-2 rounded bg-gray-500 text-white hover:bg-gray-600"
        onClick={() => setDatos([])}
      >
        Vaciar Carrito
      </button>
      <h3 className="mt-4 text-xl font-bold">Total: {total}</h3>
    </div>
  );
};
