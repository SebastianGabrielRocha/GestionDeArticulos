import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/articulos">Artículos</Link>
          </li>
          {user && user.role === 'admin' && (
            <li>
              <Link to="/crear-articulo">Crear Artículo</Link>
            </li>
          )}
          {!user && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          {user && (
            <li>
              <button onClick={handleLogout}>Cerrar Sesión</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
