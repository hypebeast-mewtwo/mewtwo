import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './components/Login';
import Products from './components/Products';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='login' element={<Login />} />
        <Route path='products' element={<Products />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// ReactDOM.render(<App />, document.getElementById('app'));
