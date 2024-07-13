import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateArticulo = ({ addArticulo }) => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArticulo = { id: Date.now(), nombre, descripcion };
    addArticulo(newArticulo);
    navigate('/articulos');
  };

  return (
    <div>
      <h2>Crear Artículo</h2>
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
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};

export default CreateArticulo;
