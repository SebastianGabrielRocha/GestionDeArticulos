import React from 'react';
import { Link } from 'react-router-dom';

const ArticuloList = ({ articulos, user }) => {
  return (
    <div>
      <h2>Lista de Artículos</h2>
      <ul>
        {articulos.map((articulo) => (
          <li key={articulo.id}>
            <h3>{articulo.nombre}</h3>
            <p>{articulo.descripcion}</p>
            {user && user.role === 'admin' && (
              <div>
                <Link to={`/editar-articulo/${articulo.id}`}>Editar</Link>
                <Link to={`/borrar-articulo/${articulo.id}`}>Borrar</Link>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticuloList;
