import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteArticulo = ({ articulos, deleteArticulo }) => {
  const { id } = useParams();
  const articulo = articulos.find((a) => a.id === parseInt(id));
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteArticulo(articulo.id);
    navigate('/articulos');
  };

  return (
    <div>
      <h2>Borrar Artículo</h2>
      <p>¿Estás seguro de que deseas borrar el artículo {articulo.nombre}?</p>
      <button onClick={handleDelete}>Borrar</button>
    </div>
  );
};

export default DeleteArticulo;
