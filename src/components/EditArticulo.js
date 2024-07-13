import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditArticulo = ({ articulos, updateArticulo }) => {
  const { id } = useParams();
  const articulo = articulos.find((a) => a.id === parseInt(id));
  const [nombre, setNombre] = useState(articulo.nombre);
  const [descripcion, setDescripcion] = useState(articulo.descripcion);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateArticulo({ id: articulo.id, nombre, descripcion });
    navigate('/articulos');
  };

  return (
    <div>
      <h2>Editar Artículo</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </label>
        <label>
          Descripción:
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          ></textarea>
        </label>
        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
};

export default EditArticulo;
