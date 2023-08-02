import { Navbar } from './componentes/Navbar';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const App = () => {
  const [datos, setDatos] = useState([]);
  const [elementosCarrito, setElementosCarrito] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setDatos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const agregarAlCarrito = (elemento) => {
    setElementosCarrito((prevCarrito) => [...prevCarrito, elemento]);
  };

  return (
    <div className="bg-white">
      <Navbar elementosCarrito={elementosCarrito} />

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {datos &&
            Array.isArray(datos) &&
            datos.map((elemento) => (
              <div className="producto flex flex-col items-center" key={elemento.id}>
                <h6 className="text-lg font-medium mb-2">{elemento.title}</h6>
                <h6 className="text-sm mb-2">{elemento.category}</h6>
                <div className="w-full h-52 flex items-center justify-center mb-2">
                  <img src={elemento.image} alt="imagen" className="max-h-full max-w-full" />
                </div>
                <p className="text-lg font-medium">${elemento.price}</p>
                <button
                  className="px-3 py-1 text-sm rounded bg-blue-500 text-white hover:bg-blue-600"
                  onClick={() => agregarAlCarrito(elemento)}
                >
                  Agregar
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};





