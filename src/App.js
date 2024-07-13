import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import ArticuloList from './components/ArticuloList';
import CreateArticulo from './components/CreateArticulo';
import EditArticulo from './components/EditArticulo';
import DeleteArticulo from './components/DeleteArticulo';

const App = () => {
  const [articulos, setArticulos] = useState(() => {
    const savedArticulos = localStorage.getItem('articulos');
    return savedArticulos ? JSON.parse(savedArticulos) : [];
  });
  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem('articulos', JSON.stringify(articulos));
  }, [articulos]);

  const addArticulo = (articulo) => {
    setArticulos([...articulos, articulo]);
  };

  const updateArticulo = (updatedArticulo) => {
    setArticulos(
      articulos.map((articulo) =>
        articulo.id === updatedArticulo.id ? updatedArticulo : articulo
      )
    );
  };

  const deleteArticulo = (id) => {
    setArticulos(articulos.filter((articulo) => articulo.id !== id));
  };

  return (
    <Router>
      <Header user={user} setUser={setUser} />
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route
          path="/articulos"
          element={
            user ? (
              <ArticuloList articulos={articulos} user={user} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/crear-articulo"
          element={
            user && user.role === 'admin' ? (
              <CreateArticulo addArticulo={addArticulo} />
            ) : (
              <Navigate to="/articulos" />
            )
          }
        />
        <Route
          path="/editar-articulo/:id"
          element={
            user && user.role === 'admin' ? (
              <EditArticulo articulos={articulos} updateArticulo={updateArticulo} />
            ) : (
              <Navigate to="/articulos" />
            )
          }
        />
        <Route
          path="/borrar-articulo/:id"
          element={
            user && user.role === 'admin' ? (
              <DeleteArticulo articulos={articulos} deleteArticulo={deleteArticulo} />
            ) : (
              <Navigate to="/articulos" />
            )
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
