import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Products from './components/Products';

export default function App() {
  return (
    <div>
      <h1>Cryptic-$neeks</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to='/login'>Login</Link>
      </nav>
      <div>
        <Link to='/products'>Products</Link>
      </div>
      <Outlet />
    </div>
  );
}
